<template>
  <v-card class="pa-5 box_shadow--default">
    <div class="font-weight-semi-bold title black--text mb-3">
      Featured
    </div>

    <v-avatar tile color="primary" width="100%" height="150"></v-avatar>

    <Hashtag :template="'no-chips'" class="py-2" />

    <v-card-text class="pa-0 black--text font-weight-bold title">
      KeepSolid VPN Unlimited: Lifetime Subscription
    </v-card-text>

    <div class="text-center mt-6 mb-3">
      <v-btn outlined rounded color="primary" class="text-capitalize py-5 px-7">
        View All Offering
      </v-btn>
    </div>
  </v-card>
</template>

<script>
import Hashtag from './Hashtag'

export default {
  components: {
    Hashtag
  }
}
</script>
