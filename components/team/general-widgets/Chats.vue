<template>
  <v-flex class="flex overflow-hidden mt-4 rounded-lg box_shadow--default">
    <v-flex>
      <v-card-title
        class="text-subtitle-1 white font-weight-medium black--text pb-0 fixed-bar"
      >
        <span>
          Chats
        </span>

        <v-spacer></v-spacer>

        <v-btn icon color="primary"><v-icon>mdi-plus</v-icon></v-btn>
      </v-card-title>
    </v-flex>
    <v-card height="100%" class="overflow-auto roomCard__container" flat>
      <v-list class="pt-0">
        <v-list-item-group color="primary">
          <v-list-item v-for="n in 20" :key="n" link color="primary">
            <v-badge
              color="primary"
              bordered
              bottom
              dot
              offset-x="28"
              offset-y="18"
            >
              <v-list-item-avatar class="my-2">
                <img src="https://cdn.vuetifyjs.com/images/lists/2.jpg" />
              </v-list-item-avatar>
            </v-badge>

            <v-list-item-content>
              <v-list-item-title>Jeanna B. Davis</v-list-item-title>
            </v-list-item-content>

            <v-badge color="primary" dot inline></v-badge>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
  </v-flex>
</template>

<script>
export default {}
</script>

<style scoped>
.fixed-bar {
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  z-index: 2;
}
.roomCard__container {
  padding-bottom: 52px;
}
</style>
