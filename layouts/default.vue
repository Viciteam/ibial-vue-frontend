<template>
  <v-app id="app">
    <Header />

    <v-main class="accent">
      <nuxt />
    </v-main>

    <Authentication v-if="$route.name === 'index'" />
    <v-snackbar v-model="notification" :color="mscolor">
      {{ message }}
      <template v-slot:action="{ attrs }">
        <v-btn color="white" v-bind="attrs" icon @click="notification = false">
          <v-icon>{{
            mscolor == 'success' ? 'mdi-check' : 'mdi-close'
          }}</v-icon>
        </v-btn>
      </template>
    </v-snackbar>
  </v-app>
</template>

<script>
import { Header } from '~/components/header'
import { Authentication } from '~/components/authentication'
import { mapGetters } from 'vuex'

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
      notification: false,
      message: '',
      mscolor: ''
    }
  },
  computed: {
    /**
     * all the computed here
     */
    ...mapGetters(['getNotifications'])
  },
  watch: {
    /**
     * all the watchers here
     */
    getNotifications() {
      this.notification = this.getNotifications.display
      this.message = this.getNotifications.message
      this.mscolor = this.getNotifications.type
    }
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
