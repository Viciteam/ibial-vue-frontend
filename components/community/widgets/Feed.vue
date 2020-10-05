<template>
  <div>
    <v-card
      v-for="(item, n) in feedData"
      :key="n"
      class="box_shadow--default my-3"
    >
      <v-list pa>
        <v-list-item>
          <v-list-item-avatar size="60" color="gray"> </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title class="black--text body-1 font-weight-bold">
              User ID : {{ item.user }}
            </v-list-item-title>
            <v-list-item-subtitle class="medium_gray--text mt-1">
              {{ item.posted_on }}
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
        <FeedContent :feed-content="item.content" />

        <Hashtag :tags="item.tag" :template="'chips'" />
      </div>

      <div class="px-4 py-2">
        <v-divider></v-divider>
      </div>

      <v-row no-gutters class="px-4 pt-2 pb-4" align="center">
        <PostReactions
          :reactions="item.reaction"
          :comments="item.comments.length"
          :imported="'feed'"
          class="py-3"
        />

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
        <CommentSection :feed-comments="item.comments" />
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
      feedCount: 0,
      feedData: null,
      feedContent: null
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
    this.getBusinessFeed()
  },
  methods: {
    async getBusinessFeed() {
      try {
        this.feed = await this.$feedRepository.getFeedByBusiness(1)
        this.feedData = this.feed.data
        console.log(this.feedData)

        this.feedCount = this.feed.data.length
        console.log(this.feedCount)
        // this.business = await this.$businessRepository.GetBusinessProfileDetails(
        //   this.$route.params.id
        // )
        // this.profile = this.business.data
        // this.tagsBusiness = this.business.data.tags
        //console.log(this.tagsBusiness)
        // eslint-disable-next-line no-empty
      } catch (error) {}
    }
  }
}
</script>
