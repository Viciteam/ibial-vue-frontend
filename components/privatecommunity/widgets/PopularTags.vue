<template>
  <v-card class="pa-5 box_shadow--default mt-5">
    <v-row class="pt-0 pb-3">
      <v-col cols="9" class="black--text body-1 font-weight-bold py-0">
        Popular Tags
      </v-col>
    </v-row>
    <v-row>
      <v-col class="py-0">
        <v-chip-group column>
          <v-chip
            v-for="item in tags"
            :key="item"
            color="secondary_background"
            class="secondary--text"
            small
            >{{ item }}</v-chip
          >
        </v-chip-group>
      </v-col>
    </v-row>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      tags: [
        '#Network&Communications',
        '#Marketing',
        '#Management',
        '#Printing&Prototyping'
      ]
    }
  }
}
</script>
