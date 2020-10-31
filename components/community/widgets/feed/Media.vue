<template>
  <v-row no-gutters>
    <v-col
      v-for="(item, n) in media"
      :key="n"
      :cols="
        media.length === 1
          ? '12'
          : media.length === 2
          ? '6'
          : media.length === 3
          ? n === 2
            ? '12'
            : '6'
          : media.length === 4
          ? '6'
          : '6'
      "
      class="column-container--padding"
    >
      <v-img
        max-height="240"
        :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
        :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
        aspect-ratio="1"
        class="grey lighten-2"
      ></v-img>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    media: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>
.column-container--padding {
  padding: 1px;
}
</style>
