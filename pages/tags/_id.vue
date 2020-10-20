<template>
  <v-container>
    <v-row>
      <v-col cols="8" offset="2">
        <v-card class="box_shadow--default px-6 py-3">
          <v-card-title>
            {{ this.$route.query.tags }}
          </v-card-title>
          <v-card-subtitle>
            23K people are posting about this
          </v-card-subtitle>
        </v-card>
        <Feed />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Feed from '~/components/community/widgets/Feed.vue'
export default {
  components: {
    Feed
  },
  data() {
    return {}
  }
}
</script>
