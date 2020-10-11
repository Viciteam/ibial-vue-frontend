<template>
  <!--<v-container class="container__default">-->
  <v-row>
    <v-col v-if="this.$auth.loggedIn" cols="3" class="hidden-sm-and-down">
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
  <!--</v-container>-->
</template>
<script>
import {
  ProfileWidget,
  InvitationLink,
  PostsFeed,
  SidebarWidgets
} from '~/components/privatecommunity'

export default {
  //middleware: 'auth',
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
