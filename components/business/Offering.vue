<template>
  <v-card class="pa-0 ma-3 box_shadow--default">
    <v-avatar tile color="primary" width="100%" height="150"></v-avatar>
    <div class="py-3 px-5">
      <span
        v-for="(item, i) in data.tags"
        :key="i"
        class="mr-2 mt-2 caption font-weight-medium medium_gray--text"
      >
        {{ item }}
      </span>
      <v-card-text class="pa-0 black--text font-weight-bold title">
        {{ data.title }}
      </v-card-text>
      <v-card-text class="pt-2 pl-0 text--primary text-truncate">{{
        data.subtitle
      }}</v-card-text>
      <v-row>
        <v-col class="font-weight-medium medium_gray--text">
          {{ data.likes == '' ? 'No reviews yet' : '😀 ' + data.likes }}
        </v-col>
        <v-col class="text-right font-weight-bold">
          {{ data.price }}
        </v-col>
      </v-row>
    </div>
  </v-card>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true
    }
  }
}
</script>
