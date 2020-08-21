<template>
  <div>
    <v-card v-for="n in 2" :key="n" class="box_shadow--default my-3">
      <v-list pa>
        <v-list-item>
          <v-list-item-avatar size="60" color="gray"> </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title class="black--text body-1 font-weight-bold">
              My Business Name
            </v-list-item-title>
            <v-list-item-subtitle class="medium_gray--text mt-1">
              8 min ago
            </v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-icon>
            <v-btn icon>
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </v-list-item-icon>
        </v-list-item>
      </v-list>

      <div class="px-4 pt-2 pb-4">
        <FeedContent />

        <Hashtag :template="'chips'" />
      </div>

      <div class="px-4 py-2">
        <v-divider></v-divider>
      </div>

      <v-row no-gutters class="px-4 pt-2 pb-4" align="center">
        <PostReactions :imported="'feed'" />

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-avatar tile size="18">
            <v-img src="/icons/feed/idle-share.svg"></v-img>
          </v-avatar>
        </v-btn>
        <span class="medium_gray--text body-2 mr-1">
          0 {{ $vuetify.breakpoint.smAndUp ? 'Shares' : '' }}
        </span>
      </v-row>

      <div class="px-4">
        <CommentField />
        <CommentSection />
      </div>
    </v-card>
  </div>
</template>

<script>
import {
  FeedContent,
  PostReactions,
  CommentField,
  CommentSection
} from './feed/index'
import Hashtag from './Hashtag'

export default {
  components: {
    /**
     * all the components here
     */
    Hashtag,
    FeedContent,
    PostReactions,
    CommentField,
    CommentSection
  },
  data() {
    return {
      /**
       * all the datas here
       */
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
     * all the methods here
     */
  }
}
</script>
