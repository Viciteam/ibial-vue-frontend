<template>
  <v-app-bar app flat clipped-left align="center" color="white">
    <img src="/logo/ibial_logo_big.png" width="24px" />
    <v-spacer></v-spacer>
    <v-tabs flat icons-and-text>
      <v-tabs-slider></v-tabs-slider>
      <v-tab class="text-capitalize" href="#tab-1">
        Tools
        <img src="/icons/header/tools_idle.svg" width="20px" />
      </v-tab>
      <v-tab class="text-capitalize" href="#tab-2">
        Team Space
        <img src="/icons/header/team_idle.svg" width="20px" />
      </v-tab>
      <v-tab class="text-capitalize" href="#tab-3">
        Community
        <img src="/icons/header/community_idle.svg" width="20px" />
      </v-tab>
      <v-tab class="text-capitalize" href="#tab-4">
        Store
        <img src="/icons/header/market_idle.svg" width="20px" />
      </v-tab>
    </v-tabs>
    <v-spacer></v-spacer>
    <v-text-field
      label="Search"
      solo
      flat
      hide-details
      background-color="light_gray"
      prepend-inner-icon="mdi-magnify"
    ></v-text-field>

    <v-btn icon>
      <img src="/icons/header/cart_idle.svg" width="20px" />
    </v-btn>
    <v-btn icon>
      <img src="/icons/header/message_idle.svg" width="20px" />
    </v-btn>
    <v-btn icon>
      <img src="/icons/header/bell_idle.svg" width="20px" />
    </v-btn>
    <v-avatar>
      <img src="https://cdn.vuetifyjs.com/images/john.jpg" width="20px" />
    </v-avatar>
    <v-select
      solo
      flat
      hide-details
      background-color="transparent"
      label="Business Name #1"
    >
    </v-select>

    <span v-if="this.$auth.loggedIn" @click="logout">logout</span>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      /**
       * all the datas here
       */
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
    logout() {
      this.$auth.logout()
    }
  },
  head: {
    /**
     * all the header here
     */
    title: 'Home'
  }
}
</script>
