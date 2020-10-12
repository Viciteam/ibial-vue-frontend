<template>
  <div>
    <v-navigation-drawer
      v-if="!this.$auth.loggedIn"
      v-model="drawer"
      color="secondary"
      :mini-variant.sync="mini"
      app
      :width="300"
      clipped
    >
      <v-row>
        <v-col class="text-right pr-6">
          <v-btn icon @click.stop="mini = !mini">
            <v-icon v-show="!mini" color="white">mdi-chevron-left</v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <div v-show="!mini" class="white--text pa-12 mt-10 text-center">
        <h1 class="font-weight-regular">Be part of our iBial Community</h1>
        <p class="pt-3 body-2 font-weight-light">
          Join a community of teams and professionals running their business
          online
        </p>
        <div class="signup__btn">
          <v-btn
            class="text-capitalize font-weight-regular justify-center mb-3"
            color="white"
            rounded
            outlined
            block
            @click="toggleSignUp = !toggleSignUp"
          >
            Sign up
          </v-btn>
          <span class="caption font-weight-thin">Already have an account?</span>
          <span class="caption signin__btn" @click="toggleLogin = !toggleLogin"
            >Sign in</span
          >
          <p class="caption mt-3 learnmore__btn">Learn more</p>
        </div>
      </div>
    </v-navigation-drawer>
    <v-container>
      <Home />
    </v-container>
    <SignUp :signup="toggleSignUp" @cancelSignup="cancel" />
    <v-dialog v-model="toggleLogin" width="450">
      <v-card class="pa-10">
        <v-row no-gutters>
          <v-spacer></v-spacer>
          <v-btn icon color="primary" @click="toggleLogin = !toggleLogin">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-row>
        <Login @showSignUp="signup" />
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { Login } from '@/components/authentication/dialog'
import { Home } from '@/components/community'

export default {
  components: {
    SignUp: () => import('@/components/authentication/Authentication.vue'),
    Login,
    Home
  },
  data() {
    return {
      /**
       * all the datas here
       */
      drawer: true,
      mini: false,
      toggleSignUp: false,
      toggleLogin: false
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
    cancel(value) {
      this.toggleSignUp = value
    },
    signup(value) {
      this.toggleLogin = false
      this.toggleSignUp = value
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

<style scoped>
.signin__btn:hover,
.learnmore__btn:hover {
  cursor: pointer;
}
.signup__btn {
  position: absolute;
  bottom: 40px;
}
</style>
