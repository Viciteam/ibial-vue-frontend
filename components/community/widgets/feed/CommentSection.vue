<template>
  <div>
    <v-card v-for="(feed, fin) in feedComments" :key="fin" flat class="py-2">
      <v-list-item class="pa-0">
        <v-list-item-avatar
          class="align-self-start mt-n1"
          color="gray"
          size="40"
        ></v-list-item-avatar>
        <v-list-item-content class="pa-0">
          <v-list-item-title class="body-2 font-weight-bold black--text">
            User: {{ feed.user }}
            <span class="medium_gray--text caption ml-2">
              {{ feed.posted_on }}
            </span>
          </v-list-item-title>

          <div class="body-2 black--text">
            {{ feed.content }}
          </div>
        </v-list-item-content>
      </v-list-item>

      <v-card flat class="pl-14">
        <PostReactions
          :reactions="feed.reaction"
          :comments="feed.replies.length"
          :imported="'comment'"
          class="py-3"
        />
        <div class="sub-feeds">
          <v-card
            v-for="(reply, rin) in feed.replies"
            :key="rin"
            flat
            class="py-2"
          >
            <v-list-item class="pa-0">
              <v-list-item-avatar
                class="align-self-start mt-n1"
                color="gray"
                size="40"
              ></v-list-item-avatar>
              <v-list-item-content class="pa-0">
                <v-list-item-title class="body-2 font-weight-bold black--text">
                  User: {{ reply.user }}
                  <span class="medium_gray--text caption ml-2">
                    {{ reply.posted_on }}
                  </span>
                </v-list-item-title>

                <div class="body-2 black--text">
                  {{ reply.content }}
                </div>
              </v-list-item-content>
            </v-list-item>

            <v-card flat class="pl-14">
              <PostReactions
                :reactions="reply.reaction"
                :showcomment="false"
                :imported="'comment'"
                class="py-3"
              />
            </v-card>
          </v-card>
        </div>
        <CommentField :details="post" :level="2" @updated="1" />
      </v-card>
    </v-card>
  </div>
</template>

<script>
import { CommentField, PostReactions } from './index'

export default {
  components: {
    /**
     * all the components here
     */
    CommentField,
    PostReactions
  },
  props: {
    feedComments: {
      type: Array,
      default: null
    },
    post: {
      type: Object,
      default: null
    }
  },
  methods: {
    pushNewComment(item) {
      console.log(item)
    }
  }
}
</script>
