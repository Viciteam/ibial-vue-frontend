<template>
  <v-container fill-height>Logout here</v-container>
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
    this.logout()
  },
  methods: {
    /**
     * all the methods here
     */
    async logout() {
      //put logic to also logout of the microservice
      await this.$auth.logout()
    }
  },
  head: {
    /**
     * all the header here
     */
    title: 'Logout'
  }
}
</script>
