<template>
  <v-layout column class="fill-height rightSidebar__width--max">
    <v-flex class="flex overflow-auto rounded-lg flexSidebar__height--min">
      <v-card class="pa-5 box_shadow--default">
        <span class="text-subtitle-1 font-weight-medium black--text pb-0">
          Business Details
        </span>
        <div class="text-subtitle-2 font-weight-light py-3">
          Team details that explains thier background...
        </div>

        <div class="py-1">
          <v-avatar
            v-for="i in 6"
            :key="i"
            class="mr-n2 avatar--bordered-white"
            size="40"
          >
            <v-img src="https://cdn.vuetifyjs.com/images/john.jpg"></v-img>
          </v-avatar>
        </div>
        <AddMember />
        <AddPeople />
      </v-card>
    </v-flex>

    <v-flex class="flex overflow-hidden rounded-lg mt-4 box_shadow--default">
      <v-flex>
        <v-card-title
          class="text-subtitle-1 white font-weight-medium black--text pb-0 fixed-bar"
        >
          <span>
            My Tasks <span class="caption medium_gray--text">(13)</span>
          </span>

          <v-spacer></v-spacer>

          <v-btn icon color="primary">
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </v-card-title>
      </v-flex>

      <v-card height="100%" class="overflow-auto roomCard__container" flat>
        <v-list class="pt-0">
          <v-list-item-group color="primary">
            <v-list-item v-for="n in 20" :key="n" link two-line class="px-5">
              <v-list-item-content>
                <v-list-item-title>Oversee copy and venues</v-list-item-title>
                <v-list-item-subtitle>Marketing</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
import AddPeople from './addPeopleModal'
import AddMember from './viewMembersModal'
export default {
  components: {
    AddPeople,
    AddMember
  },
  data() {}
}
</script>

<style scoped>
.leftSidebar__width--max {
  max-width: 23%;
}
.rightSidebar__width--max {
  max-width: 23%;
}
.avatar--bordered-white {
  border: 1px solid white;
}
.flexSidebar__height--min {
  min-height: 228px;
}
.fixed-bar {
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  z-index: 2;
}
.roomCard__container {
  padding-bottom: 55px;
}
</style>
