<template>
  <v-app-bar app flat clipped-left align="center" color="white">
    <img src="/logo/ibial_logo_big.png" width="24px" />
    <v-spacer></v-spacer>
    <v-tabs v-model="tabs" icons-and-text centered>
      <v-tabs-slider class="d-none"></v-tabs-slider>
      <v-tab class="text-capitalize px-10" href="#tab-1">
        Tools
        <img
          :src="'/icons/header/tools_' + activeIcon(tabs, 1) + '.svg'"
          width="20px"
        />
      </v-tab>
      <v-tab class="text-capitalize px-10" href="#tab-2">
        Team Space
        <img
          :src="'/icons/header/team_' + activeIcon(tabs, 2) + '.svg'"
          width="20px"
          alt=""
        />
      </v-tab>
      <v-tab class="text-capitalize px-10" href="#tab-3">
        Community
        <img
          :src="'/icons/header/community_' + activeIcon(tabs, 3) + '.svg'"
          width="20px"
        />
      </v-tab>
      <v-tab class="text-capitalize px-10" href="#tab-4">
        Store
        <img
          :src="'/icons/header/market_' + activeIcon(tabs, 4) + '.svg'"
          width="20px"
        />
      </v-tab>
    </v-tabs>
    <v-spacer></v-spacer>
    <v-card flat width="400px" class="mr-5">
      <v-text-field
        label="Search"
        solo
        flat
        hide-details
        background-color="light_gray"
        prepend-inner-icon="mdi-magnify"
      ></v-text-field>
    </v-card>
    <v-btn icon class="mx-1">
      <v-badge content="1" color="error">
        <img src="/icons/header/cart_idle.svg" width="20px" />
      </v-badge>
    </v-btn>
    <v-btn icon class="mx-1">
      <v-badge content="5" color="error">
        <img src="/icons/header/message_idle.svg" width="20px" />
      </v-badge>
    </v-btn>
    <v-btn icon class="mx-1">
      <v-badge content="99+" color="error">
        <img src="/icons/header/bell_idle.svg" width="20px" />
      </v-badge>
    </v-btn>
    <v-avatar class="ml-5">
      <img src="https://cdn.vuetifyjs.com/images/john.jpg" width="20px" />
    </v-avatar>
    <v-card flat width="350px">
      <v-select
        solo
        flat
        hide-details
        background-color="transparent"
        label="Ibial Solution"
      >
      </v-select>
    </v-card>
    <span v-if="this.$auth.loggedIn" @click="logout">logout</span>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      tabs: 0
    }
  },
  computed: {},
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
    activeIcon(num, tab) {
      if (num === 'tab-' + tab) {
        return 'active'
      } else {
        return 'idle'
      }
    },
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
