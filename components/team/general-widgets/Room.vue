<template>
  <v-flex
    class="flex overflow-hidden rounded-lg box_shadow--default flexSidebar__height--min"
  >
    <v-flex>
      <v-card-title
        class="text-subtitle-1 white font-weight-medium black--text pb-0 fixed-bar"
      >
        <span>
          Room
        </span>
      </v-card-title>
    </v-flex>
    <v-card height="100%" class="overflow-auto roomCard__container" flat>
      <v-list class="pt-0">
        <v-list-item-group color="primary">
          <v-list-item v-for="n in 10" :key="n" @click="redirectUrl(n)">
            <v-badge
              color="primary"
              bordered
              bottom
              dot
              offset-x="28"
              offset-y="18"
            >
              <v-list-item-avatar class="my-2">
                <img src="https://cdn.vuetifyjs.com/images/lists/2.jpg" />
              </v-list-item-avatar>
            </v-badge>

            <v-list-item-content>
              <v-list-item-title>Room One</v-list-item-title>
            </v-list-item-content>

            <v-badge color="primary" dot inline></v-badge>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>

    <v-list-item
      class="text-subtitle-1 white font-weight-medium black--text pb-0 fixed-bar--bottom"
      link
    >
      <v-list-item-avatar class="my-2 mr-0">
        <v-icon class="secondary--text">mdi-plus</v-icon>
      </v-list-item-avatar>

      <v-list-item-content>
        <v-list-item-title>Create Room</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-flex>
</template>

<script>
export default {
  methods: {
    /**
     * Redirect to room page, and dynamically change parameter
     *
     * @param   {number}  n  room id
     *
     * @return  {return}
     */
    redirectUrl(n) {
      // Sometime later

      const currentPath = this.$router.currentRoute.path

      // Retrieve current params
      const currentParams = this.$router.currentRoute.params

      // Create new params object
      const mergedParams = { ...currentParams, ...{ roomid: n } }

      // this.updatePathParams(this.$router, { id: n })
      if (this.$route.name === 't-id') {
        this.$router.push('/t/0/r/' + n)
      } else if (this.$route.name === 't-id-r-roomid') {
        this.$router.push({ params: mergedParams })
        console.log(currentPath)
      }
    }
  }
}
</script>

<style scoped>
.fixed-bar {
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  z-index: 2;
}
.fixed-bar--bottom {
  position: sticky;
  position: -webkit-sticky;
  bottom: 0;
  z-index: 2;
}
.roomCard__container {
  padding-bottom: 95px;
}
.flexSidebar__height--min {
  min-height: 228px;
}
</style>
