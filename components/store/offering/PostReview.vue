<template>
  <v-card flat color="transparent">
    <v-tabs
      color="primary"
      class="tabs-background-color--transparent z-index--high"
    >
      <v-tab
        active-class="white black--text pointer-events--none"
        class="px-15 text-capitalize font-weight-semi-bold"
      >
        Post
      </v-tab>
      <v-tab
        active-class="white black--text pointer-events--none"
        class="px-15 text-capitalize font-weight-semi-bold"
      >
        Review
      </v-tab>

      <v-tabs-slider class="d-none"></v-tabs-slider>
    </v-tabs>

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
  </v-card>
</template>

<script>
export default {}
</script>

<style scoped>
.pointer-events--none {
  pointer-events: none;
}
.z-index--high {
  z-index: 7;
  position: relative;
}
.z-index--low {
  z-index: 0;
  position: relative;
}
</style>

<style>
#app .textArea--line-height-normal textarea {
  line-height: 1.5;
  margin-top: 5px;
}
#app .tabs-background-color--transparent .v-tabs-bar {
  background: #eeeeee;
}
</style>
