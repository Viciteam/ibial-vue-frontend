<template>
  <v-flex
    ref="middleFeed"
    class="flex overflow-auto mx-5 flexContainer__width--max pb-10"
  >
    <v-card
      v-for="(item, i) in messages"
      :key="i"
      class="pa-2"
      color="transparent"
      :class="onSenderReciever(item.sender_id)"
      flat
    >
      <v-card
        class="d-flex"
        color="transparent"
        :class="onSenderRecieverFlex(item.sender_id)"
        flat
      >
        <div class="align-self-end mx-2">
          <v-badge
            bordered
            bottom
            color="green accent-4"
            class="item__list--avatar"
            dot
            offset-x="11px"
            offset-y="12px"
          >
            <v-avatar size="35" class="my-1 ">
              <v-img :src="item.avatar"></v-img>
            </v-avatar>
          </v-badge>
        </div>

        <div :class="item.sender_id === 12345 ? 'ml-11' : 'mr-11'">
          <span v-if="item.sender_id === 12345 ? false : true" class="caption">
            Juan Dela Cruz ·
          </span>
          <span class="caption grey--text">
            10:30am
          </span>
          <v-card
            class="pa-3 rounded-lg body-2"
            :class="
              item.sender_id === 12345
                ? 'text-right primary lighten-1 white--text'
                : 'text-left'
            "
            color="flat"
            flat
            tile
          >
            <span>
              Flex item asdasd asdasd asdasd asdasd asdasd asdasd asdasd
              asdasdasdasd asdasdasdasd asdasdasdasd asdasdasdasd asdasdasdasd
              asdasdasdasd asdasdasdasd asdasdasdasd asdasdasdasd asdasdasdasd
              asdasd
            </span>

            <!-- <video width="320" height="240" controls>
                  <source
                    src="https://www.youtube.com/watch?v=a3ICNMQW7Ok"
                    type="video/mp4"
                  />
                  <source
                    src="https://www.youtube.com/watch?v=a3ICNMQW7Ok"
                    type="video/ogg"
                  />
                  Your browser does not support the video tag.
                </video> -->
          </v-card>
        </div>
      </v-card>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  data() {
    return {
      messages: [
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg?v=1',
          title: 'Juan Dela Cruz',
          message: 'Hi Everyone!!!',
          sender_id: 12341
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg?v=1',
          title: 'Juan Dela Cruz',
          message: 'Hi Everyone!!!',
          sender_id: 12345
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg?v=1',
          title: 'Juan Dela Cruz',
          message: 'Hi Everyone!!!',
          sender_id: 12341
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg?v=1',
          title: 'Juan Dela Cruz',
          message: 'Hi Everyone!!!',
          sender_id: 12345
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg?v=1',
          title: 'Juan Dela Cruz',
          message: 'Hi Everyone!!!',
          sender_id: 12341
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
          title: 'Juan Dela Cruz',
          message: 'Hi Everyone!!!',
          sender_id: 12345
        }
      ]
    }
  },

  mounted() {
    // This will be called on load
    this.scrollToEnd()
  },

  updated() {
    // This will be called when the component updates
    // try toggling a todo
    this.scrollToEnd()
  },

  methods: {
    scrollToEnd() {
      var content = this.$refs.middleFeed
      content.scrollTop = content.scrollHeight
    },

    /**
     * align changer base on who is the sender and whos the reciever
     */
    onSenderReciever(sender_id) {
      return sender_id === 12345 ? 'align-self-end' : 'align-self-start'
    },

    /**
     * flex changer base on who is the sender and whos the reciever
     */
    onSenderRecieverFlex(sender_id) {
      return sender_id === 12345 ? 'flex-row-reverse' : 'flex-row'
    }
  }
}
</script>

<style scoped>
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
