<template>
  <div>
    <RecentOfferings v-if="this.$auth.loggedIn" />
    <PopularTags />
    <SuggestedConnections v-if="this.$auth.loggedIn" />
    <NewOnMarketplace />
  </div>
</template>
<script>
import {
  RecentOfferings,
  PopularTags,
  SuggestedConnections,
  NewOnMarketplace
} from '~/components/privatecommunity/widgets'

export default {
  components: {
    RecentOfferings,
    PopularTags,
    SuggestedConnections,
    NewOnMarketplace
  }
}
</script>
