<template>
  <div :class="{ 'px-5': $vuetify.breakpoint.smAndUp }">
    <v-card-text class="font-weight-semi-bold text-h5 black--text text-center">
      Sign up to iBial
    </v-card-text>

    <div class="text-center">
      Already have an account?
      <a href="#" class="primary--text font-weight-medium text-decoration-none"
        >Sign in</a
      >
    </div>

    <div class="mt-7">
      <v-btn
        rounded
        class="text-capitalize text-decoration-none mb-3"
        block
        large
        depressed
        outlined
      >
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

    <v-text-field color="primary" placeholder="Email"></v-text-field>
    <v-text-field color="primary" placeholder="Password"></v-text-field>
    <v-text-field color="primary" placeholder="Confirm Password"></v-text-field>

    <div>
      <v-checkbox label="I agree to the Terms and Conditions."></v-checkbox>
    </div>

    <div class="text-center mt-2">
      <v-btn
        :width="$vuetify.breakpoint.smAndUp ? '300' : ''"
        :block="$vuetify.breakpoint.xsOnly"
        class="text-capitalize font-weight-semibold"
        color="primary"
        rounded
        x-large
      >
        Get Started
      </v-btn>
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
</style>
