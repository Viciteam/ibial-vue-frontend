<template>
  <v-container class="container__default">
    <!-- Need atleast one element inside <template> -->
    <Header @tabs="onCurrentTab" />
    <!-- feed -->
    <v-row>
      <v-col cols="12" xs="12" sm="8" md="8">
        <div v-if="currentTab === 0">
          <v-row :class="{ 'px-6': $vuetify.breakpoint.smAndUp }">
            <v-col cols="6">
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
            <v-col cols="6">
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
          <Feed />
        </div>

        <Overview v-if="currentTab === 1" />
      </v-col>
      <v-col cols="12" xs="12" sm="4" md="4">
        <Featured class="mt-3" />
        <Connections class="mt-3" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { Header, Overview } from '~/components/business'
import { Feed, Featured, Connections } from '~/components/community/widgets'

export default {
  components: {
    Header,
    Overview,
    Feed,
    Featured,
    Connections
  },
  data() {
    return {
      /**
       * all the datas here
       */
      currentTab: 0
    }
  },
  computed: {
    /**
     * all the computed here
     */
  },
  watch: {
    /**
     * all the watchers here
     */
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
    onCurrentTab(val) {
      this.currentTab = val
    }
  }
}
</script>

<style scoped>
.container__default {
  max-width: 1080px;
}
</style>
