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

    <v-row no-gutters align="center">
      <v-btn-toggle color="primary" tile group>
        <v-btn icon class="ma-0 rounded-lg">
          <v-icon>mdi-paperclip</v-icon>
        </v-btn>
        <v-btn icon class="ma-0 rounded-lg">
          <v-icon>mdi-format-list-bulleted</v-icon>
        </v-btn>
        <v-btn icon class="ma-0 rounded-lg">
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
        meta: {}
      },
      isLoading: false,
      counter: 0
    }
  },
  computed: {
    isPostValid() {
      const content = this.createPostPayload.content

      return content === '' ? true : false
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
      let notif = {
        display: true,
        type: '',
        message: ''
      }
      // condition here
      this.emitNewPost()
      try {
        await this.$feedRepository.CreatePost(this.createPostPayload)

        this.isLoading = false
        this.clearInputs()

        notif.type = 'primary'
        notif.message = 'Successfully deleted posts.'
      } catch (error) {
        this.isLoading = false

        notif.type = 'error'
        notif.message = 'There was a problem while processing your data.'
      }

      this.$store.dispatch('addNotifications', notif)
    },
    /**
     * Clear all inputs
     *
     * @return  {void}  returns nothing
     */
    clearInputs() {
      this.createPostPayload.content = ''
      this.createPostPayload.meta = {}
    },
    /**
     * Emit back if have new post
     *
     * @return  {void}  returns nothing
     */
    emitNewPost() {
      this.counter++

      this.$emit('newPost', this.counter)
    }
  }
}
</script>

<style>
#app .textArea--line-height-normal textarea {
  line-height: 1.5;
  margin-top: 5px;
}
</style>
