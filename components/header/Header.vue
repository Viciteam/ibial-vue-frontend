<template>
  <v-app-bar app flat clipped-left color="white">
    <v-toolbar-title>iBial</v-toolbar-title>
    <v-spacer></v-spacer>
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
