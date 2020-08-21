<template>
  <v-card class="px-10 pt-5 mt-5" max-width="1056" outlined light>
    <v-row>
      <v-col cols="2">
        <div>
          <v-avatar width="100%" height="100%">
            <v-img
              src="https://pickaface.net/gallery/avatar/unr_test_161024_0535_9lih90.png"
            ></v-img>
          </v-avatar>
        </div>
      </v-col>

      <v-col cols="10" class="mb-10">
        <div>
          <v-list-item-title class="headline mb-4"
            >Business Name #1</v-list-item-title
          >
          <v-list-item-subtitle class="mb-10">
            I design things sed soluta mollis eleifend eu I design things sed
            soluta mollis eleifend eu
          </v-list-item-subtitle>

          <v-list-item class="px-0">
            <v-icon class="mr-4">mdi-map-marker</v-icon>
            <span>Hanoi, Vietnam</span>
          </v-list-item>

          <v-list-item class="px-0">
            <v-icon class="mr-4">mdi-flag-outline</v-icon>
            <span>English, Vietnamese, Mandarin</span>
          </v-list-item>

          <v-list-item class="px-0">
            <v-icon class="mr-4">mdi-web</v-icon>
            <span>Visit website</span>
          </v-list-item>

          <v-list-item class="px-0">
            <v-icon class="mr-4">mdi-tag-outline</v-icon>
            <v-chip-group column>
              <v-chip small>#DesignCommunity</v-chip>
              <v-chip small>#PHdevelopers</v-chip>
              <v-chip small>#Freelancers</v-chip>
            </v-chip-group>
          </v-list-item>
        </div>
      </v-col>
    </v-row>

    <v-divider></v-divider>

    <v-tabs v-model="tabsModel" class="mt-5" color="secondary">
      <v-tabs-slider color="secondary"></v-tabs-slider>
      <v-tab>Activity</v-tab>
      <v-tab>About</v-tab>
      <v-tab>Team</v-tab>
      <v-tab>Store</v-tab>

      <v-spacer></v-spacer>

      <v-btn rounded color="primary" class="pa-5 btn_edit-profile" outlined>
        Edit Profile
      </v-btn>
    </v-tabs>
  </v-card>
</template>

<script>
export default {
  props: {
    tabs: {
      type: Function,
      default: null
    }
  },
  data() {
    return {
      tabsModel: 0
    }
  },
  watch: {
    tabsModel(val) {
      this.$emit('tabs', val)
    }
  }
}
</script>

<style scoped>
.btn_edit-profile {
  border: thin solid #4db7a1 !important;
}
</style>
