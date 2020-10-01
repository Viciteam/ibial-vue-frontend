<template>
  <div>
    <div v-if="template === 'chips'">
      <v-chip
        v-for="titems in tags"
        :key="titems"
        class="mr-2 mt-2"
        color="secondary_background"
        text-color="secondary"
      >
        #{{ titems }}
      </v-chip>
    </div>

    <div v-if="template === 'no-chips'">
      <span
        v-for="n in 2"
        :key="n"
        class="mr-2 mt-2 caption font-weight-medium medium_gray--text"
      >
        #NetworkSystems {{ n }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    template: {
      type: String,
      default: null
    },
    tags: {
      type: Object,
      default: null
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
