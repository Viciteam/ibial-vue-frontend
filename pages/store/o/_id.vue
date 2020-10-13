<template>
  <v-container class="container__default">
    <v-row>
      <v-col cols="12" md="8" lg="8">
        <ProductView />
      </v-col>
      <v-col cols="12" md="4" lg="4">
        <SidebarPlans class="SidebarPlans--sticky" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { SidebarPlans, ProductView } from '~/components/store/offering'

export default {
  components: {
    SidebarPlans,
    ProductView
  }
}
</script>

<style scoped>
.container__default {
  max-width: 1080px;
}
.SidebarPlans--sticky {
  position: sticky;
  top: 75px;
}
</style>
