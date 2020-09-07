<template>
  <v-card class="mx-auto box_shadow--default my-5">
    <v-row class="px-6 pt-1">
      <v-col cols="8" class="black--text body-1 font-weight-bold">
        Invitation Link
      </v-col>
      <v-col cols="4" class="caption text-right">
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              text
              v-bind="attrs"
              small
              class="text-capitalize primary--text"
              v-on="on"
              @click="copyText"
              >Copy</v-btn
            >
          </template>
          <span class="caption">Copy Link</span>
        </v-tooltip>
      </v-col>
    </v-row>
    <v-row class="px-6">
      <v-col class="py-0">
        <v-text-field
          id="tocopy"
          class="caption"
          value="https://ibial.com/invite?url=123"
          rounded
          outlined
          dense
        ></v-text-field>
      </v-col>
    </v-row>
  </v-card>
</template>
<script>
export default {
  data() {
    return {}
  },
  methods: {
    copyText() {
      let input = document.getElementById('tocopy')
      input.select()
      document.execCommand('copy')
    }
  }
}
</script>
