<template>
  <div>
    <p class="font-weight-medium black--text body-2">
      {{ feedContent }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    feedContent: {
      type: String,
      default: ''
    }
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
