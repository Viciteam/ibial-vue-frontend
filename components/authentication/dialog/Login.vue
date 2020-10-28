<template>
  <div :class="{ 'px-5': $vuetify.breakpoint.smAndUp }">
    <v-card-text class="font-weight-semi-bold text-h5 black--text text-center">
      Log in to iBial
    </v-card-text>
    <div class="mt-7">
      <v-btn
        rounded
        class="text-capitalize google--btn text-decoration-none mb-3"
        block
        large
        depressed
        outlined
      >
        <v-avatar size="17" class="mr-4">
          <v-img src="/icons/google.png"></v-img>
        </v-avatar>

        Use Google Account
      </v-btn>
      <v-btn
        rounded
        class="text-capitalize text-decoration-none white--text"
        color="#006699"
        block
        large
        depressed
      >
        <v-avatar size="17" class="mr-4 mb-1" tile color="transparent">
          <v-img src="/icons/linkedin.png"></v-img>
        </v-avatar>
        Use LinkedIn Account
      </v-btn>
    </div>
    <v-card-actions class="my-7">
      <span class="body-2">OTHER OPTIONS:</span>

      <v-spacer></v-spacer>

      <v-avatar size="40" class="mx-1">
        <v-img src="/icons/facebook.png" lazy-src="/icons/facebook.png"></v-img>
      </v-avatar>
      <v-avatar size="40" class="mx-1">
        <v-img src="/icons/twitter.png" lazy-src="/icons/twitter.png"></v-img>
      </v-avatar>
      <v-avatar size="40" class="mx-1">
        <v-img src="/icons/apple.png" lazy-src="/icons/apple.png"></v-img>
      </v-avatar>
    </v-card-actions>
    <div class="or__divider--container">
      <div class="text-center mx-auto white or__divider--line">OR</div>
    </div>
    <v-text-field
      v-model="email"
      color="primary"
      placeholder="Email"
    ></v-text-field>
    <v-text-field
      v-model="password"
      color="primary"
      placeholder="Password"
      name="input-10-1"
      :type="isHidePassword ? 'text' : 'password'"
      :append-icon="isHidePassword ? 'mdi-eye' : 'mdi-eye-off'"
      @keyup.enter="login"
      @click:append="isHidePassword = !isHidePassword"
    ></v-text-field>
    <div class="text-center mt-2">
      <v-btn
        :width="$vuetify.breakpoint.smAndUp ? '300' : ''"
        :block="$vuetify.breakpoint.xsOnly"
        class="text-capitalize font-weight-semibold"
        color="primary"
        rounded
        x-large
        :loading="loading"
        @click="login"
      >
        Log In
      </v-btn>
    </div>
    <div class="text-center mt-6">
      Forgot Password?
    </div>
    <div class="text-center mt-3">
      Don't have an account?
      <a
        href="#"
        class="primary--text font-weight-medium text-decoration-none"
        @click="toggleLogin"
        >Sign up</a
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      /**
       * all the datas here
       */
      isHidePassword: false,
      email: '',
      password: '',
      loading: false
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
     * registration login function will automatically run when user click confirm.
     *
     * @return  {Promise<void>}        returns object
     */
    async login() {
      let details = {
        email: this.email,
        password: this.password
      }
      this.loading = true
      try {
        await this.$auth.loginWith('local', {
          data: details
        })
        const notif = {
          display: true,
          type: 'primary',
          message: 'Thanks for signing in..'
        }
        this.$store.dispatch('addNotifications', notif)
        this.loading = false
        this.$emit('showSignUp', false)

        location.reload()
      } catch (error) {
        const notif = {
          display: true,
          type: 'error',
          message: 'There was an issue signing in. Please try again.'
        }
        this.$store.dispatch('addNotifications', notif)
        this.loading = false
      }
    },
    /**
     * toggle login modal
     *
     * @return  {void}
     */
    toggleLogin() {
      this.$emit('cancelRegister', false)
    }
  }
}
</script>
<style scoped>
.or__divider--container {
  position: relative;
}
.or__divider--container::before {
  background: #596366;
  content: '';
  position: absolute;
  width: 100%;
  height: 1px;
  left: 0;
  bottom: 0;
  top: 11px;
}
.or__divider--line {
  width: 50px;
  z-index: 23;
  position: relative;
}

#app .google--btn.v-btn--outlined {
  border: thin solid #dfdfe1;
}
</style>
