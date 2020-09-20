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
          <v-list-item-title class="headline mb-4">
            <span v-if="profile">{{ profile.name }}</span>
          </v-list-item-title>
          <v-list-item-subtitle class="mb-10">
            <span v-if="profile">{{ profile.tag_line }}</span>
          </v-list-item-subtitle>

          <v-list-item class="px-0">
            <v-icon class="mr-4">mdi-map-marker</v-icon>
            <span v-if="profile">
              {{ profile.city }}, {{ profile.country }}</span
            >
          </v-list-item>

          <v-list-item class="px-0">
            <v-icon class="mr-4">mdi-flag-outline</v-icon>
            <span v-if="profile">{{ profile.languages }}</span>
          </v-list-item>

          <v-list-item class="px-0">
            <v-icon class="mr-4">mdi-web</v-icon>
            <span v-if="profile">{{ profile.business_email }}</span>
          </v-list-item>

          <v-list-item class="px-0">
            <v-icon class="mr-4">mdi-tag-outline</v-icon>
            <v-chip-group v-for="item in tagsBusiness" :key="item.tag">
              <v-chip small>{{ item.tag }}</v-chip>
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
      tabsModel: 0,
      business: null,
      tagsBusiness: null,
      profile: null
    }
  },
  watch: {
    tabsModel(val) {
      this.$emit('tabs', val)
    }
  },
  mounted() {
    this.getBusinessProfileDetails()
  },
  methods: {
    async getBusinessProfileDetails() {
      try {
        this.business = await this.$businessRepository.GetBusinessProfileDetails(
          this.$route.params.id
        )
        this.profile = this.business.data
        this.tagsBusiness = this.business.data.tags
        //console.log(this.tagsBusiness)
        // eslint-disable-next-line no-empty
      } catch (error) {}
    }
  }
}
</script>

<style scoped>
.btn_edit-profile {
  border: thin solid #4db7a1 !important;
}
</style>
