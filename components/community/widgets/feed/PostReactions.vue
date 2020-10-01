<template>
  <div>
    <v-btn icon color="secondary" @click="onClickLikeDislike('like')">
      <v-avatar tile :size="imported === 'comment' ? '18' : '19'" class="mt-n1">
        <v-img
          :src="`/icons/feed/${isLiked ? 'active-like.svg' : 'idle-like.svg'}`"
        ></v-img>
      </v-avatar>
    </v-btn>
    <span class="medium_gray--text body-2 ml-n1 mr-1">
      {{ reactions.like }}
    </span>

    <v-btn icon color="secondary" @click="onClickLikeDislike('dislike')">
      <v-avatar tile :size="imported === 'comment' ? '18' : '19'" class="mb-n1">
        <v-img
          :src="
            `/icons/feed/${
              isDisliked ? 'active-dislike.svg' : 'idle-dislike.svg'
            }`
          "
        ></v-img>
      </v-avatar>
    </v-btn>
    <span class="medium_gray--text body-2 ml-n1 mr-1">
      {{ reactions.dislike }}
    </span>

    <v-btn
      v-if="showcomment"
      icon
      color="secondary"
      @click="isCommented = !isCommented"
    >
      <v-avatar tile :size="imported === 'comment' ? '18' : '19'">
        <v-img
          :src="
            `/icons/feed/${
              isCommented ? 'active-comment.svg' : 'idle-comment.svg'
            }`
          "
        ></v-img>
      </v-avatar>
    </v-btn>
    <span v-if="showcomment" class="medium_gray--text body-2 ml-n1 mr-1">
      {{ comments }}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    imported: {
      type: String,
      default: null
    },
    comments: {
      type: String,
      default: '0'
    },
    reactions: {
      type: Object,
      default: null
    },
    showcomment: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      /**
       * all the datas here
       */
      isLiked: false,
      isDisliked: false,
      isCommented: false
    }
  },
  computed: {
    /**
     * all the computed here
     */
  },
  watch: {
    /**
     * all the watchers here
     */
  },
  mounted() {
    /**
     * all the mounted here
     */
  },
  methods: {
    /**
     * check if like and dislike then toggle true or false to like or dislike
     *
     * @return  {void}
     */
    onClickLikeDislike(reaction) {
      switch (reaction) {
        case 'like':
          this.likeFeed()
          break
        case 'dislike':
          this.dislikeFeed()
          break
      }
    },

    /**
     * Post like on specific field
     *
     * @return  {void}
     */
    likeFeed() {
      this.isLiked = true
      this.isDisliked = false
    },

    /**
     * Post dislike on specific field
     *
     * @return  {void}
     */
    dislikeFeed() {
      this.isLiked = false
      this.isDisliked = true
    }
  }
}
</script>
