<template>
  <v-row no-gutters class="mt-2">
    <v-col
      v-for="(item, n) in media.slice(0, 4)"
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
      <v-card
        flat
        class="light_gray d-flex align-content-center justify-content-center"
        height="100%"
      >
        <v-img
          v-if="item.includes('/images')"
          :max-height="media.length < 3 ? '450' : '240'"
          :height="media.length < 3 ? '480' : '240'"
          :src="item"
          :lazy-src="item"
          aspect-ratio="1"
          class="grey lighten-2 rounded-lg"
        ></v-img>

        <video
          v-if="item.includes('/videos')"
          :height="media.length < 3 ? '480' : '240'"
          :src="item"
        ></video>

        <video
          v-if="item.includes('/audios')"
          :height="media.length < 3 ? '480' : '240'"
          :src="item"
        ></video>

        <v-sheet
          v-if="item.includes('/documents')"
          :max-height="media.length < 3 ? '450' : '240'"
          :height="media.length < 3 ? '480' : '240'"
          width="100%"
          class="d-flex align-content-center justify-content-center light_gray rounded-lg"
        >
          <v-icon size="60" class="rounded-lg mx-auto" color="primary">
            mdi-file-document
          </v-icon>
        </v-sheet>

        <v-overlay v-if="n === 3 && media.length > 4" absolute>
          <v-btn
            icon
            x-large
            class="d-block mx-auto align-self-center white--transparent"
          >
            <span>+{{ media.slice(4, 2000).length }}</span>
          </v-btn>
        </v-overlay>
      </v-card>
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
