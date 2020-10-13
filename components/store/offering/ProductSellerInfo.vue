<template>
  <v-card flat>
    <v-card-title class="text-h5 font-weight-semi-bold py-0">
      <v-avatar size="60" color="primary" class="mr-3">
        <v-img
          src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
        ></v-img>
      </v-avatar>
      <v-badge
        color="transparent"
        icon="mdi-checkbox-marked-circle-outline"
        class="badge-icon--color"
      >
        Company C
      </v-badge>

      <v-spacer></v-spacer>

      <v-btn color="primary" large class="pt-1 mr-2" icon outlined>
        <v-icon size="20">mdi-message-outline</v-icon>
      </v-btn>

      <v-btn color="primary" large class="text-capitalize" rounded outlined>
        Visit Store
      </v-btn>
    </v-card-title>
  </v-card>
</template>

<script>
export default {}
</script>

<style>
.badge-icon--color .v-badge__badge {
  color: #4db7a1;
  font-size: 16px;
}
</style>
