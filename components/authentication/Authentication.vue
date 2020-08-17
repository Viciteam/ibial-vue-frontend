<template>
  <v-dialog v-model="dialog" max-width="290">
    <v-card>
      Authentication

      <Register />
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
  data() {
    return {
      /**
       * all the datas here
       */
      dialog: true
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
