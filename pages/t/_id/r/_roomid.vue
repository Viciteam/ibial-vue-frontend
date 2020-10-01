<template>
  <FeedChatView />
</template>

<script>
import { FeedChatView } from '~/components/team/general-widgets'

export default {
  layout: 'team',
  components: {
    FeedChatView
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
