<template>
  <v-app id="app" class="accent">
    <Header />
    <TeamSpaceHeader />

    <v-container class="fill-height">
      <v-layout column class="fill-height leftSidebar__width--max">
        <Room />
        <Chats />
      </v-layout>

      <nuxt />

      <FeedChatSidebar />
    </v-container>
  </v-app>
</template>

<script>
import { Header } from '~/components/header'
import { TeamSpaceHeader } from '~/components/team'
import { mapGetters } from 'vuex'
import { Room, Chats, FeedChatSidebar } from '~/components/team/general-widgets'

export default {
  components: {
    /**
     * all the components here
     */
    Header,
    TeamSpaceHeader,
    Room,
    Chats,
    FeedChatSidebar
  },
  data() {
    return {
      /**
       * all the datas here
       */
      notification: false,
      message: '',
      mscolor: ''
    }
  },
  computed: {
    /**
     * all the computed here
     */
    ...mapGetters(['getNotifications'])
  },
  watch: {
    /**
     * all the watchers here
     */
    getNotifications() {
      this.notification = this.getNotifications.display
      this.message = this.getNotifications.message
      this.mscolor = this.getNotifications.type
    }
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
