<template>
  <div>
    <v-row v-if="this.$auth.loggedIn">
      <v-col cols="3" class="hidden-sm-and-down">
        <ProfileWidget />
        <InvitationLink />
      </v-col>
      <v-col cols="12" sm="12" :md="this.$auth.loggedIn ? 6 : 8">
        <PostsFeed />
      </v-col>
      <v-col :cols="this.$auth.loggedIn ? 3 : 4" class="hidden-sm-and-down">
        <SidebarWidgets />
      </v-col>
    </v-row>
    <div v-else>
      <v-container>
        <v-row class="fill-height ma-0">
          <v-col cols="6">
            <v-img src="images/publichomepage.png" contain max-height="600" />
          </v-col>
          <v-col cols="6">
            <v-card flat tile class="d-flex align-center" height="70%">
              <h1>
                Run your Digital
                <p class="mb-0">Business with iBial</p>
                <v-card-text>
                  <v-row>
                    <v-col class="pa-0">
                      <v-btn
                        rounded
                        class="text-capitalize font-weight-regular py-6"
                        color="primary"
                        width="200"
                      >
                        Get Free Access
                      </v-btn>
                      <v-btn
                        text
                        class="text-capitalize font-weight-regular py-6"
                        color="primary"
                        width="150"
                      >
                        Learn more
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-card-text>
              </h1>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>
<script>
import {
  ProfileWidget,
  InvitationLink,
  PostsFeed,
  SidebarWidgets
} from '~/components/privatecommunity'

export default {
  components: {
    ProfileWidget,
    PostsFeed,
    SidebarWidgets,
    InvitationLink
  }
}
</script>
<style scoped>
.container__default {
  max-width: 1080px;
}
</style>
