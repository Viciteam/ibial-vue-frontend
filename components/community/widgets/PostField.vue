<template>
  <v-card class="box-shadow--default pa-3" width="100%">
    <v-textarea
      v-model="createPostPayload.content"
      placeholder="Share an update about your work..."
      solo
      flat
      hide-details
      no-resize
      rows="3"
      class="textArea--line-height-normal"
    >
    </v-textarea>

    <input
      ref="fileInput"
      class="d-none"
      type="file"
      multiple
      accept="application/*, image/*, .jpeg, .jpg, video/*, audio/*, .doc, .docx, .ppt, .pptx, .xls, .xlsx, .txt"
      @change="fileInputChanged('123')"
    />

    <v-row class="px-4">
      <v-col
        v-for="(item, i) in previewFiles.slice(0, 4)"
        :key="i"
        cols="3"
        class="pa-2"
      >
        <v-hover v-slot="{ hover }">
          <v-card
            flat
            class="light_gray d-flex align-content-center justify-content-center"
            height="100%"
            min-height="60"
            :disabled="isLoading"
          >
            <v-img
              v-if="item.type.includes('image/')"
              :src="item.file"
              max-height="60"
              contain
            ></v-img>

            <v-btn
              v-if="item.type.includes('video/') && !hover"
              icon
              :ripple="false"
              class="d-block mx-auto align-self-center primary--transparent"
            >
              <v-icon size="20" class="rounded-lg" color="primary">
                mdi-file-video
              </v-icon>
            </v-btn>

            <v-btn
              v-if="item.type.includes('application/') && !hover"
              icon
              :ripple="false"
              class="d-block mx-auto align-self-center primary--transparent"
            >
              <v-icon size="20" class="rounded-lg" color="primary">
                mdi-file
              </v-icon>
            </v-btn>

            <v-btn
              v-if="item.type.includes('audio/') && !hover"
              icon
              :ripple="false"
              class="d-block mx-auto align-self-center primary--transparent"
            >
              <v-icon size="20" class="rounded-lg" color="primary">
                mdi-file-music
              </v-icon>
            </v-btn>

            <v-overlay v-if="i < 3" absolute :value="hover" color="transparent">
              <v-btn
                v-if="hover"
                icon
                class="d-block mx-auto align-self-center error--transparent"
                @click="removeAttachment(i)"
              >
                <v-icon size="20" class="rounded-lg" color="error">
                  mdi-close
                </v-icon>
              </v-btn>
            </v-overlay>

            <v-overlay v-if="i === 3 && previewFiles.length > 4" absolute>
              <v-btn
                icon
                class="d-block mx-auto align-self-center white--transparent"
              >
                <span>+{{ previewFiles.slice(4, 1000).length }}</span>
              </v-btn>
            </v-overlay>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>

    <v-row no-gutters align="center">
      <v-btn-toggle color="primary" tile group>
        <v-btn icon class="ma-0 rounded-lg" @click="clickInput">
          <v-icon>mdi-paperclip</v-icon>
        </v-btn>
        <v-btn icon class="ma-0 rounded-lg">
          <v-icon>mdi-format-list-bulleted</v-icon>
        </v-btn>
        <v-btn icon class="ma-0 rounded-lg" @click="clickInput">
          <v-icon>mdi-image-outline</v-icon>
        </v-btn>
        <v-btn icon class="ma-0 rounded-lg">
          <v-icon>mdi-emoticon-happy-outline</v-icon>
        </v-btn>
      </v-btn-toggle>

      <v-spacer />

      <v-btn
        class="text-capitalize font-weight-medium px-6"
        color="primary"
        depressed
        rounded
        :disabled="isPostValid"
        :loading="isLoading"
        @click="createPost"
      >
        Post
      </v-btn>
    </v-row>
  </v-card>
</template>

<script>
export default {
  props: {
    newPost: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      createPostPayload: {
        user: this.$auth.user.id,
        position: 'business',
        position_id: 1,
        content: '',
        ispublic: 'public',
        meta: {
          attachment: [],
          media: []
        }
      },
      isLoading: false,
      counter: 0,
      uploadedFiles: [],
      previewFiles: [],
      appFiles: [],
      videoFiles: [],
      imageFiles: []
    }
  },
  computed: {
    isPostValid() {
      const content = this.createPostPayload.content
      const file = this.previewFiles.length

      return content === '' && file === 0
    }
  },
  methods: {
    /**
     * Create new post
     *
     * @return  {Promise}  returns promise
     */
    async createPost() {
      this.isLoading = true

      // condition here
      this.emitNewPost()
      try {
        const response = await this.$feedRepository.CreatePost(
          this.createPostPayload
        )

        if (response.status === 200) {
          this.isLoading = false
          this.clearInputs()

          this.$store.dispatch('addNotifications', {
            display: true,
            type: 'primary',
            message: 'Successfully created posts.'
          })
        }
      } catch (error) {
        this.isLoading = false

        this.$store.dispatch('addNotifications', {
          display: true,
          type: 'error',
          message: 'There was a problem while processing your data.'
        })
      }
    },
    /**
     * Clear all inputs
     *
     * @return  {void}  returns nothing
     */
    clearInputs() {
      this.createPostPayload.content = ''
      this.createPostPayload.meta.media = []
      this.createPostPayload.meta.attachment = []

      this.uploadedFiles = []
      this.previewFiles = []

      this.$refs.fileInput.value = null
    },
    /**
     * Emit back if have new post
     *
     * @return  {void}  returns nothing
     */
    emitNewPost() {
      this.counter++

      this.$emit('newPost', this.counter)
    },
    /**
     * File Upload
     */

    /**
     * Clicks actual input file
     */
    clickInput() {
      this.$refs.fileInput.click()
    },

    /**
     * Triggers when input is updated, appends to uploadedFiles variable for cumulative files
     */
    fileInputChanged() {
      const files = this.$refs.fileInput.files
      if (!files.length) return
      for (const file of files) {
        this.uploadedFiles.push(file)

        this.previewFiles.push({
          file: URL.createObjectURL(file),
          type: file.type
        })
      }

      this.filterFiles()
    },
    /**
     * Remove queue file attachments
     *
     * @return
     */
    removeAttachment(i) {
      this.uploadedFiles.splice(i, i + 1)
      this.previewFiles.splice(i, i + 1)

      this.createPostPayload.meta.media.splice(i, i + 1)

      this.$refs.fileInput.value = null
    },

    /**
     * filter files
     *
     * @return
     */
    async filterFiles() {
      if (this.uploadedFiles.length !== 0) {
        for (let i = 0; i < this.uploadedFiles.length; i++) {
          this.isLoading = true

          const file = this.uploadedFiles[i]
          if (file.type.includes('application/')) {
            this.uploadFiles(file, 'store-file')
          } else if (file.type.includes('video/')) {
            this.uploadFiles(file, 'store-video')
          } else if (file.type.includes('image/')) {
            this.uploadFiles(file, 'store-image')
          } else if (file.type.includes('audio/')) {
            this.uploadFiles(file, 'store-audio')
          }
        }
      }
    },
    /**
     * Files Types
     */
    async uploadFiles(file, uploadType) {
      this.isLoading = true

      try {
        const response = await this.$mediaRepository.UploadFiles(uploadType, {
          user_id: this.$auth.user.id,
          file: file
        })

        const media = this.createPostPayload.meta.media

        media.push(response.file)

        this.uploadedFiles = []

        this.$refs.fileInput.value = null

        if (media.length === this.previewFiles.length) {
          this.isLoading = false
        }
      } catch (error) {
        this.$store.dispatch('addNotifications', {
          display: true,
          type: 'error',
          message:
            'Error uploading file. Please check if the files are valid, or contact technical support.'
        })

        // clear uploaded files
        this.uploadedFiles = []
        this.previewFiles = []
        this.isLoading = false
      }
    }
  }
}
</script>

<style>
#app .textArea--line-height-normal textarea {
  line-height: 1.5;
  margin-top: 5px;
}
#app .media-position--contain {
  max-width: 100%;
  max-height: 100%;
}
</style>
