<template>
  <FeedChatView />
</template>

<script>
import { FeedChatView } from '~/components/team/general-widgets'

export default {
  layout: 'team',
  components: {
    FeedChatView
  },
  mounted() {
    console.log('User is logged in: ', this.$auth.loggedIn)
  }
}
</script>

<style>
.v-application--wrap {
  height: 100vh !important;
  padding-top: 158px;
  background: #f7f7f7;
}
</style>
