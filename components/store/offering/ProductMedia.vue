<template>
  <div>
    <v-img
      height="360"
      width="100%"
      class="rounded-lg secondary--fade"
      contain
      :src="offeringModel.img"
      :lazy-src="offeringModel.img"
    ></v-img>

    <v-sheet class="mx-auto mt-2" max-width="800">
      <v-slide-group
        v-model="offeringModel"
        class="slide-group--container"
        center-active
        show-arrows
      >
        <v-slide-item
          v-for="(item, i) in thumbnails"
          :key="i"
          v-slot:default="{ toggle }"
          class="pointer-events--pointer rounded-lg"
          :value="item"
        >
          <v-img
            v-ripple
            class="my-4 mx-2 elevation-0"
            height="100"
            width="100"
            :src="item.img"
            :lazy-src="item.img"
            @click="toggle"
          >
          </v-img>
        </v-slide-item>
      </v-slide-group>
    </v-sheet>
  </div>
</template>

<script>
export default {
  data() {
    return {
      offeringModel: {
        img: 'https://picsum.photos/500/300?image=1'
      },
      thumbnails: [
        {
          img: 'https://picsum.photos/500/300?image=1'
        },
        {
          img: 'https://picsum.photos/500/300?image=2'
        },
        {
          img: 'https://picsum.photos/500/300?image=3'
        },
        {
          img: 'https://picsum.photos/500/300?image=4'
        },
        {
          img: 'https://picsum.photos/500/300?image=5'
        },
        {
          img: 'https://picsum.photos/500/300?image=4'
        },
        {
          img: 'https://picsum.photos/500/300?image=5'
        }
      ]
    }
  }
}
</script>

<style scoped>
.slide-group--container .v-slide-item--active {
  pointer-events: none;
}
.pointer-events--pointer {
  cursor: pointer;
}
</style>
