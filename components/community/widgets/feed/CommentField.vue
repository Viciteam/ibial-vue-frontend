<template>
  <div>
    <v-textarea
      v-model="commentPayload.content"
      solo
      placeholder="Leave a comment..."
      rounded
      outlined
      flat
      dense
      hide-details
      class="input--height pb-4"
      rows="1"
      auto-grow
    >
      <template v-slot:prepend>
        <v-avatar size="40" color="gray" class="mt-n2 mr-1"></v-avatar>
      </template>
      <template v-if="commentPayload.content !== ''" v-slot:append-outer>
        <v-btn
          icon
          color="primary"
          class="mt-n2 mr-1"
          @click="createFirstComment"
        >
          <v-icon>mdi-send</v-icon>
        </v-btn>
      </template>
    </v-textarea>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      default: null
    },
    level: {
      type: Number,
      default: 0
    },
    updated: {
      type: Function,
      default: null
    }
  },
  data: () => ({
    isLoading: false,
    commentPayload: {
      user: 0,
      position: 'wall',
      position_id: 0,
      parent: 0,
      level: 0,
      content: '',
      meta: []
    }
  }),
  methods: {
    /**
     * Create new comment
     *
     * @return  {Promise}  returns promise
     */
    async createFirstComment() {
      this.isLoading = true

      this.commentPayload.user = this.post.user
      this.commentPayload.position = this.post.position
      this.commentPayload.position_id = this.post.position_id
      this.commentPayload.level = this.level
      this.commentPayload.parent = this.post.id

      try {
        await this.$feedRepository.CreateComment(this.commentPayload)

        this.isLoading = false

        this.$store.dispatch('addNotifications', {
          display: true,
          type: 'primary',
          message: 'Successfully posted comment.'
        })

        // when succeed emit back to parent to reload feed
        this.$emit('updated')
      } catch (error) {
        console.log(error)
        this.isLoading = false

        this.$store.dispatch('addNotifications', {
          display: true,
          type: 'error',
          message: 'There was a problem while processing your data.'
        })
      }
    }
  }
}
</script>

<style>
#app .input--height .v-input__slot {
  position: relative;
  min-height: 40px;
  font-size: 0.9em;
}
</style>
