<template>
  <div>
    <v-row v-if="this.$auth.loggedIn">
      <v-col class="py-0">
        <v-btn
          class="text-capitalize font-weight-semi-bold white--text py-7 box_shadow--default"
          color="primary"
          block
          rounded
        >
          <v-avatar tile size="20">
            <v-img src="/icons/feed/feed-writeapost.svg"></v-img>
          </v-avatar>
          <span v-if="$vuetify.breakpoint.smAndUp" class="ml-4">
            Write <span class="text-lowercase px-1">a</span> Post
          </span>
        </v-btn>
      </v-col>
      <v-col class="py-0">
        <v-btn
          class="text-capitalize font-weight-semi-bold black--text py-7 box_shadow--default"
          color="white"
          block
          rounded
        >
          <v-avatar tile size="20">
            <v-img src="/icons/feed/feed-createoffering.svg"></v-img>
          </v-avatar>
          <span v-if="$vuetify.breakpoint.smAndUp" class="ml-4">
            Create New Offering
          </span>
        </v-btn>
      </v-col>
    </v-row>
    <v-divider v-if="this.$auth.loggedIn" class="mt-6"></v-divider>
    <v-row v-if="this.$auth.loggedIn">
      <v-col class="caption">
        Personalize your feed:
        <v-btn text class="caption text-capitalize" small>
          <v-icon left>mdi-sort-variant</v-icon>
          See latest post first
        </v-btn>
        <v-btn text class="caption text-capitalize" small>
          <v-icon left>mdi-sort-variant</v-icon>
          Local Posts
        </v-btn>
        <v-btn text class="caption text-capitalize" small>
          <v-icon left>mdi-checkbox-multiple-blank-outline</v-icon>
          Filter
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="py-0">
        <Feed />
      </v-col>
    </v-row>
  </div>
</template>
<script>
import Feed from '~/components/community/widgets/Feed.vue'

export default {
  components: {
    Feed
  }
}
</script>
