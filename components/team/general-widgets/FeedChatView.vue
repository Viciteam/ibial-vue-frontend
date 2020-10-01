<template>
  <v-layout column class="fill-height middleContainer__width--max">
    <v-flex class="white--text flex shrink">
      <v-card flat color="transparent" width="100%" class="py-1 pb-5 px-6">
        <v-btn-toggle
          v-model="toggleButton"
          tile
          color="primary"
          group
          class="toggleButton__width-max white rounded-cards pa-2"
          active-class="primary--transparent"
        >
          <v-btn
            width="50%"
            class="rounded-tabs text-capitalize ma-0"
            value="feed"
            x-large
            :class="{ 'disable-events': toggleButton === 'feed' }"
          >
            Feed
          </v-btn>

          <v-btn
            width="50%"
            class="rounded-tabs text-capitalize ma-0"
            value="chats"
            x-large
            :class="{ 'disable-events': toggleButton === 'chats' }"
          >
            <v-badge color="red" dot>
              Chats
            </v-badge>
          </v-btn>
        </v-btn-toggle>
      </v-card>
    </v-flex>

    <ChatView v-if="toggleButton === 'chats'" />

    <v-flex
      v-if="toggleButton === 'chats'"
      class="white--text flex shrink px-4"
    >
      <v-card flat width="100%" class="py-1 px-2 rounded-lg">
        <v-row no-gutters align="center">
          <v-btn
            v-if="!toggleAttachmentButton"
            icon
            medium
            color="primary"
            @click="toggleAttachmentButton = true"
          >
            <v-icon>mdi-plus</v-icon>
          </v-btn>
          <div v-if="toggleAttachmentButton">
            <v-btn icon color="medium_grey">
              <v-icon>mdi-emoticon-happy</v-icon>
            </v-btn>
            <v-btn icon color="medium_grey">
              <v-icon>mdi-image</v-icon>
            </v-btn>
            <v-btn icon color="medium_grey">
              <v-icon>mdi-video</v-icon>
            </v-btn>
          </div>
          <v-textarea
            clear-icon="mdi-close"
            background-color="flat"
            color="primary"
            class="ml-3 body-2"
            placeholder="Type a message..."
            rows="2"
            no-resize
            hide-details
            solo
            flat
            @click="toggleAttachmentButton = true"
            @blur="toggleAttachmentButton = false"
          ></v-textarea>
          <v-btn icon color="primary" class="mx-3">
            <v-icon>mdi-send mdi-rotate-315</v-icon>
          </v-btn>
        </v-row>
      </v-card>
    </v-flex>

    <v-flex
      v-if="toggleButton === 'feed'"
      class="overflow-auto mx-2 px-2 mt-n3 flexContainer__width--max"
    >
      <Feed />
    </v-flex>
  </v-layout>
</template>

<script>
import ChatView from './ChatView'
import Feed from '~/components/community/widgets/Feed.vue'

export default {
  components: {
    ChatView,
    Feed
  },
  data() {
    return {
      toggleButton: 'feed',
      toggleAttachmentButton: false
    }
  }
}
</script>

<style scoped>
.rounded-tabs {
  border-radius: 100px !important;
  overflow: hidden;
}
.toggleButton__width-max {
  width: 100%;
}
.middleContainer__width--max {
  max-width: 54%;
}
.rounded-cards {
  border-radius: 100px !important;
}
/* width */
.flexContainer__width--max::-webkit-scrollbar {
  width: 7px;
}

/* Track */
.flexContainer__width--max::-webkit-scrollbar-track {
  background: transparent;
}

/* Handle */
.flexContainer__width--max::-webkit-scrollbar-thumb {
  background: #999;
  border-radius: 5px;
}

/* Handle on hover */
.flexContainer__width--max::-webkit-scrollbar-thumb:hover {
  background: #888;
}
</style>
