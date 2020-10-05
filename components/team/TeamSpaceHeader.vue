<template>
  <div>
    <v-app-bar
      app
      clipped-right
      color="medium_gray"
      clipped-left
      flat
      height="130"
      src="https://images.pexels.com/photos/747964/pexels-photo-747964.jpeg?cs=srgb&dl=pexels-simon-migaj-747964.jpg&fm=jpg"
    >
      <v-container class="pa-0">
        <v-card
          height="158"
          color="transparent"
          class="pt-12"
          :class="$vuetify.breakpoint.smAndDown ? '' : 'd-flex'"
          flat
        >
          <div color="transparent" flat>
            <v-avatar size="120" class="rounded--avatar">
              <img
                src="https://cdn.vuetifyjs.com/images/lists/2.jpg"
                alt="John"
              />
            </v-avatar>
          </div>
          <v-card color="transparent" width="100%" class="pl-8" flat>
            <div class="text-h5 white--text font-weight-semi-bold mb-3">
              Business ABC
            </div>

            <v-tabs
              dark
              background-color="transparent"
              slider-color="transparent"
              height="40"
            >
              <v-tab
                v-for="(item, i) in tabs"
                :key="i"
                :to="item.link"
                active-class="white--transparent"
                class="rounded-tabs text-capitalize white--text"
              >
                <v-badge v-if="item.badge" dot color="red">
                  {{ item.tab }}
                </v-badge>

                <span v-else>{{ item.tab }}</span>
              </v-tab>

              <v-btn icon height="40" width="40">
                <v-icon>mdi-magnify</v-icon>
              </v-btn>
              <v-btn icon height="40" width="40">
                <v-icon>mdi-dots-horizontal</v-icon>
              </v-btn>

              <v-spacer />

              <v-btn icon><v-icon>mdi-image-outline</v-icon></v-btn>
            </v-tabs>
          </v-card>
        </v-card>
      </v-container>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      businessMenuModel: 'home',
      tabs: [
        {
          tab: 'Home',
          badge: false,
          link: '/t/' + this.$route.params.id
        },
        {
          tab: 'Library',
          badge: true,
          link: ''
        },
        {
          tab: 'Projects and Tasks',
          badge: false,
          link: ''
        },
        {
          tab: 'Settings',
          badge: false,
          link: ''
        }
      ]
    }
  }
}
</script>

<style scoped>
.teamspace__header--container {
  max-width: 1440px;
}
.rounded-tabs {
  border-radius: 100px;
  overflow: hidden;
}
</style>
