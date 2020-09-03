<template>
  <v-card class="pa-5 box_shadow--default">
    <v-row class="pt-0 pb-3">
      <v-col cols="9" class="black--text body-1 font-weight-bold py-0">
        Recent Offerings
      </v-col>
      <v-col cols="3" class="pa-0">
        <v-btn text color="primary" class="text-capitalize" x-small
          >View All</v-btn
        >
      </v-col>
    </v-row>
    <v-row v-for="item in offerings" :key="item.id" class="pl-3">
      <v-col cols="3">
        <v-avatar color="primary" size="40" tile></v-avatar>
      </v-col>
      <v-col cols="9" class="caption">
        <v-row>
          <v-col class="py-0 font-weight-bold">
            {{ item.title }}
          </v-col>
        </v-row>
        <v-row>
          <v-col class="py-0">
            {{ item.subtitle }}
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      offerings: [
        {
          id: 1,
          title: 'XYZ Database',
          subtitle: 'Company abc'
        },
        {
          id: 2,
          title: 'HQS Telenetwork',
          subtitle: 'Company hqs'
        },
        {
          id: 3,
          title: 'UTP Jack LOL',
          subtitle: 'Company anf'
        }
      ]
    }
  }
}
</script>
