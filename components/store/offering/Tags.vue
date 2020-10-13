<template>
  <v-chip
    class="ma-2 mx-1 secondary--text font-weight-semi-bold text-caption"
    color="secondary--fade"
  >
    {{ tags.name }}
  </v-chip>
</template>

<script>
export default {
  props: {
    tags: {
      default: null,
      type: Object
    }
  }
}
</script>
