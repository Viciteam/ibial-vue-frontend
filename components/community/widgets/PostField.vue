<template>
  <v-card class="box-shadow--default pa-3">
    <v-textarea
      placeholder="Share an update about your work..."
      solo
      flat
      hide-details
      no-resize
      rows="3"
      class="textArea--line-height-normal"
    >
    </v-textarea>

    <v-row no-gutters align="center">
      <v-btn-toggle color="primary" tile group>
        <v-btn icon class="ma-0 rounded-lg">
          <v-icon>mdi-paperclip</v-icon>
        </v-btn>
        <v-btn icon class="ma-0 rounded-lg">
          <v-icon>mdi-format-list-bulleted</v-icon>
        </v-btn>
        <v-btn icon class="ma-0 rounded-lg">
          <v-icon>mdi-image-outline</v-icon>
        </v-btn>
        <v-btn icon class="ma-0 rounded-lg">
          <v-icon>mdi-emoticon-happy-outline</v-icon>
        </v-btn>
      </v-btn-toggle>

      <v-spacer />

      <v-btn
        class="text-capitalize font-weight-medium px-6"
        color="primary"
        depressed
        rounded
      >
        Post
      </v-btn>
    </v-row>
  </v-card>
</template>

<script>
export default {}
</script>

<style>
#app .textArea--line-height-normal textarea {
  line-height: 1.5;
  margin-top: 5px;
}
</style>
