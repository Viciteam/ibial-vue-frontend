<template>
  <v-container class="container__default">
    <v-row>
      <v-col cols="3" class="hidden-sm-and-down">
        <ProfileWidget />
        <InvitationLink />
      </v-col>
      <v-col cols="12" sm="12" md="6">
        <PostsFeed />
      </v-col>
      <v-col cols="3" class="hidden-sm-and-down">
        <SidebarWidgets />
      </v-col>
    </v-row>
  </v-container>
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
