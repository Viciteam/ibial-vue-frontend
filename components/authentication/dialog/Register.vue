<template>
  <div :class="{ 'px-5': $vuetify.breakpoint.smAndUp }">
    <v-card-text class="font-weight-semi-bold text-h5 black--text text-center">
      Sign up to iBial
    </v-card-text>

    <div class="text-center">
      Already have an account?
      <a
        href="#"
        class="primary--text font-weight-medium text-decoration-none"
        @click="
          login = true
          $emit('cancelRegister', false)
        "
        >Sign in</a
      >
    </div>

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

        Continue <span class="text-lowercase px-1">with</span> Google
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
        Continue <span class="text-lowercase px-1">with</span> LinkedIn
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
    <v-form ref="form" v-model="valid">
      <v-text-field
        v-model="name"
        color="primary"
        placeholder="Name"
        :rules="[required('name')]"
      ></v-text-field>
      <v-text-field
        v-model="email"
        color="primary"
        placeholder="Email"
        :rules="[required('email'), isValidEmail()]"
      ></v-text-field>
      <v-text-field
        v-model="password"
        color="primary"
        placeholder="Password"
        name="input-10-1"
        :type="isHidePassword ? 'text' : 'password'"
        :append-icon="isHidePassword ? 'mdi-eye' : 'mdi-eye-off'"
        :rules="[required('password'), minLength('password', 5)]"
        @click:append="isHidePassword = !isHidePassword"
      ></v-text-field>
      <v-text-field
        v-model="confirm_password"
        color="primary"
        placeholder="Confirm Password"
        name="input-10-1"
        :type="isHideConfirmPassword ? 'text' : 'password'"
        :append-icon="isHideConfirmPassword ? 'mdi-eye' : 'mdi-eye-off'"
        :rules="[
          required('confirm password'),
          password === confirm_password || 'Password must match'
        ]"
        @click:append="isHideConfirmPassword = !isHideConfirmPassword"
      ></v-text-field>

      <div>
        <v-checkbox
          v-model="terms"
          :rules="[terms === true || 'You must agree to continue!']"
          label="I agree to the Terms and Conditions."
        ></v-checkbox>
      </div>

      <div class="text-center mt-2">
        <v-btn
          :width="$vuetify.breakpoint.smAndUp ? '300' : ''"
          :block="$vuetify.breakpoint.xsOnly"
          class="text-capitalize font-weight-semibold"
          color="primary"
          rounded
          x-large
          :disabled="!valid"
          :loading="loading"
          @click="register"
        >
          Get Started
        </v-btn>
      </div>
    </v-form>
    <v-dialog v-model="login" width="450">
      <v-card class="pa-10">
        <v-row no-gutters>
          <v-spacer></v-spacer>
          <v-btn icon color="primary" @click="login = !login">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-row>
        <Login @showSignUp="signup" />
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import validations from '@/utils/validations'
import { Login } from '@/components/authentication/dialog'
import axios from 'axios'

export default {
  components: {
    Login
  },
  data() {
    return {
      /**
       * all the datas here
       */
      isHidePassword: false,
      isHideConfirmPassword: false,
      ...validations,
      valid: true,
      name: '',
      email: '',
      password: '',
      confirm_password: '',
      terms: '',
      login: false,
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
     * all the methods here
     */
    async register() {
      let details = {
        name: this.name,
        email: this.email,
        password: this.password,
        c_password: this.confirm_password
      }
      this.loading = true
      try {
        await axios.post('https://accounts.ibial.com/api/v1/register', details)

        await this.$auth.loginWith('local', {
          data: details
        })
        this.loading = false
        this.$router.push('/community')
      } catch (error) {
        console.log(error)
        this.loading = false
      }
    },
    signup(value) {
      this.login = false
      this.$emit('cancelRegister', value)
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
