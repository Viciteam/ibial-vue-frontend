<template>
  <div>
    <v-textarea
      v-model="updatePostPayload.content"
      placeholder="Update about your work..."
      solo
      flat
      hide-details
      no-resize
      rows="3"
      background-color="light_gray"
      class="textArea--line-height-normal d-block mb-3"
    >
    </v-textarea>

    <v-row no-gutters align="center">
      <v-spacer />

      <v-btn
        class="text-capitalize font-weight-medium px-6"
        color="primary"
        depressed
        rounded
        :disabled="!isPostValid"
        :loading="isLoading"
        @click="updatePost"
      >
        Save
      </v-btn>
    </v-row>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      default: null
    },
    updated: {
      type: Function,
      default: null
    }
  },
  data: () => ({
    isLoading: false,
    updatePostPayload: {
      user: 0,
      position: '',
      position_id: '',
      content: '',
      ispublic: ''
    }
  }),
  computed: {
    isPostValid() {
      return this.post !== null
        ? this.post.content !== this.updatePostPayload.content
        : false
    }
  },
  mounted() {
    if (this.post !== null) this.updatePostPayload.content = this.post.content
  },
  methods: {
    /**
     * Update Post by ID
     *
     * @param   {object}  item    item per posts
     *
     * @return  {Promise<void>}   returns promise
     */
    async updatePost() {
      this.isLoading = true

      this.updatePostPayload.user = this.post.user
      this.updatePostPayload.position = this.post.position
      this.updatePostPayload.position_id = this.post.position_id
      this.updatePostPayload.ispublic = this.post.ispublic

      try {
        await this.$feedRepository.UpdatePost(
          this.updatePostPayload,
          this.post.id
        )

        this.$store.dispatch('addNotifications', {
          display: true,
          type: 'primary',
          message: 'Successfully updated posts.'
        })
        this.isLoading = false

        // when succeed emit back to parent to reload feed
        this.$emit('updated')
      } catch (error) {
        // error state
        this.$store.dispatch('addNotifications', {
          display: true,
          type: 'error',
          message: 'There was a problem while processing your data.'
        })
        this.isLoading = false
      }
    }
  }
}
</script>

<style>
#app .textArea--line-height-normal textarea {
  line-height: 1.5;
}
</style>
