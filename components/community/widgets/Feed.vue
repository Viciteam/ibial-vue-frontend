<template>
  <div>
    <div v-if="isLoading">
      <v-card v-for="n in 2" :key="n" class="box_shadow--default my-3">
        <v-skeleton-loader
          type="list-item-avatar-two-line, table-heading, list-item-two-line"
        ></v-skeleton-loader>
      </v-card>
    </div>
    <div v-if="!isLoading">
      <v-card
        v-for="(item, i) in feed"
        :key="i"
        class="box_shadow--default my-3"
      >
        <v-list>
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

            <v-menu offset-y left transition="slide-y-transition">
              <template v-slot:activator="{ on, attrs }">
                <v-list-item-icon>
                  <v-btn icon v-bind="attrs" v-on="on">
                    <v-icon>mdi-dots-vertical</v-icon>
                  </v-btn>
                </v-list-item-icon>
              </template>
              <v-list width="200">
                <!-- <v-list-item link @click="updatePost(item)">
                  <v-list-item-title>
                    Update Post
                  </v-list-item-title>
                </v-list-item> -->
                <v-list-item link>
                  <v-list-item-title>
                    Lorem Ipsum
                  </v-list-item-title>
                </v-list-item>
                <v-list-item
                  v-if="$auth.user.id.toString() === item.user"
                  link
                  @click="deletePost(item)"
                >
                  <v-list-item-title class="red--text">
                    Delete Post
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-list-item>
        </v-list>

        <div class="px-4 pt-2 pb-4">
          <FeedContent :feed-content="item.content" />

          <v-card v-if="item.media" flat width="100%">
            <Media :media="item.media ? item.media : []" />
          </v-card>

          <Hashtag :tags="item.tag" :template="'chips'" />
        </div>

        <div class="px-4 py-2">
          <v-divider></v-divider>
        </div>

        <v-row no-gutters class="px-4 pt-2 pb-4" align="center">
          <PostReactions
            :like="item.reaction.like"
            :dislike="item.reaction.dislike"
            :comments="item.comments.length"
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
  </div>
</template>

<script>
import {
  FeedContent,
  PostReactions,
  CommentField,
  CommentSection,
  Media
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
    CommentSection,
    Media
  },
  props: {
    newPost: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      feed: [],
      isLoading: false,
      isUpdatePostLoading: false,
      updatePostPayload: {
        user: this.$auth.user.id,
        position: '',
        position_id: 0,
        content: '',
        ispublic: ''
      }
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
    newPost() {
      this.GetBusinessFeed()
    }
  },
  mounted() {
    this.GetBusinessFeed()
  },
  methods: {
    /**
     * Function to get posts
     *
     * @return  {Promise<void>}  returns nothing
     */
    async GetBusinessFeed() {
      this.isLoading = true
      try {
        const response = await this.$feedRepository.GetFeedByBusiness(1)
        this.feed = response.data

        this.isLoading = false
      } catch (error) {
        // error state
        this.isLoading = false
      }
    },

    /**
     * Delete Post by ID
     *
     * @param   {object}  item    item per posts
     *
     * @return  {Promise<void>}   returns promise
     */
    async deletePost(item) {
      let notif = {
        display: true,
        type: '',
        message: ''
      }

      try {
        await this.$feedRepository.DeletePostById(item.id)

        notif.type = 'primary'
        notif.message = 'Successfully deleted posts.'

        this.GetBusinessFeed()
      } catch (error) {
        // error state
        notif.type = 'error'
        notif.message = 'There was a problem while processing your data.'
      }

      this.$store.dispatch('addNotifications', notif)
    },

    /**
     * Update Post by ID
     *
     * @param   {object}  item    item per posts
     *
     * @return  {Promise<void>}   returns promise
     */
    async updatePost(item) {
      let notif = {
        display: true,
        type: '',
        message: ''
      }

      try {
        await this.$feedRepository.UpdatePost(this.updatePostPayload, item.id)

        notif.type = 'primary'
        notif.message = 'Successfully deleted posts.'

        this.GetBusinessFeed()
      } catch (error) {
        // error state
        notif.type = 'error'
        notif.message = 'There was a problem while processing your data.'
      }

      this.$store.dispatch('addNotifications', notif)
    }
  }
}
</script>
