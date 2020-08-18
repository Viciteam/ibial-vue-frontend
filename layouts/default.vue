<template>
  <v-app id="app">
    <Header />

    <v-main class="accent">
      <nuxt />
    </v-main>

    <Authentication v-if="$route.name === 'index'" />
  </v-app>
</template>

<script>
import { Header } from '~/components/header'
import { Authentication } from '~/components/authentication'

export default {
  components: {
    /**
     * all the components here
     */
    Header,
    Authentication
  },
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
  }
}
</script>
