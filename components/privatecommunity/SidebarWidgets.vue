<template>
  <div>
    <RecentOfferings />
    <PopularTags />
    <SuggestedConnections />
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
