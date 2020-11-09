<template>
  <div>
    <pre
      class="font-weight-medium black_gray--text body-1 content__pre--component content__line-height--default"
    >
      {{ feedContent }}
      </pre
    >
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
       *
       */
    }
  },
  computed: {
    /**
     *
     */
  },
  watch: {
    /**
     *
     */
  },
  mounted() {
    /**
     *
     */
  },
  methods: {
    /**
     *
     */
  }
}
</script>

<style scoped>
.content__pre--component {
  white-space: pre-line;
}
.content__line-height--default {
  line-height: 1.4;
}
</style>
