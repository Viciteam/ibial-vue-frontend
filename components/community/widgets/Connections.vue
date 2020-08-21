<template>
  <v-card class="pa-5 box_shadow--default">
    <v-row no-gutters align="center" class="mb-2">
      <span class="font-weight-semi-bold title black--text">
        My Connections
      </span>

      <span class="medium_gray--text body-2 ml-2">10</span>

      <v-spacer></v-spacer>

      <v-btn text color="primary" class="text-capitalize" small>View All</v-btn>
    </v-row>

    <v-list class="py-0">
      <v-list-item v-for="n in 5" :key="n" class="px-0">
        <v-list-item-avatar size="40" color="gray"></v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Jason Derulo {{ n }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
export default {}
</script>
