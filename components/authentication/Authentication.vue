<template>
  <v-dialog v-model="dialog" width="450">
    <v-card class="pa-10">
      <v-row no-gutters>
        <v-spacer></v-spacer>
        <v-btn icon color="primary" @click="dialog = !dialog">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-row>
      <Register @cancelRegister="close" />
    </v-card>
  </v-dialog>
</template>

<script>
import { Register } from './dialog'

export default {
  components: {
    /**
     * all the datas here
     */
    Register
  },
  props: {
    signup: {
      type: Boolean
      //required: true
    }
  },
  data() {
    return {
      /**
       * all the datas here
       */
      dialog: false
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
    signup() {
      console.log(this.signup)
      this.dialog = this.signup
    },
    dialog() {
      return !this.dialog ? this.$emit('cancelSignup', false) : ''
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
    close(value) {
      this.dialog = value
    }
  }
}
</script>
