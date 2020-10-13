<template>
  <v-row no-gutters align="center" class="my-5">
    <span class="mr-4 text-subtitle-2">Review Summary</span>
    <span class="mr-3 text-subtitle-2">
      <img src="/icons/review/very-happy.svg" width="20" class="mb-n1" />
      30
    </span>
    <span class="mr-3 text-subtitle-2">
      <img src="/icons/review/happy.svg" width="20" class="mb-n1" />
      20
    </span>

    <v-spacer />

    <v-btn text class="text-capitalize black--text pr-2 text-subtitle-2">
      All Post <v-icon>mdi-chevron-down</v-icon>
    </v-btn>
    <v-btn text class="text-capitalize black--text pr-2 text-subtitle-2">
      Recommended <v-icon>mdi-chevron-down</v-icon>
    </v-btn>
  </v-row>
</template>

<script>
export default {}
</script>
