<template>
  <v-card class="pt-5 px-5 box_shadow--default mt-5">
    <v-row class="pt-0 pb-3">
      <v-col class="black--text body-1 font-weight-bold py-0 pr-0">
        Suggested Connections
      </v-col>
    </v-row>
    <v-row v-for="item in connections" :key="item.id">
      <v-col cols="3">
        <v-avatar color="primary" size="40"></v-avatar>
      </v-col>
      <v-col cols="5" class="caption">
        <v-row>
          <v-col class="pa-0 font-weight-bold">
            {{ item.name }}
          </v-col>
        </v-row>
        <v-row>
          <v-col class="pa-0 medium_gray--text text-truncate">
            {{ item.connections }}
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="4">
        <v-btn
          color="secondary"
          class="text-capitalize"
          rounded
          outlined
          x-small
        >
          Connect
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-btn width="100%" text class="text-capitalize primary--text">
          View more profiles
        </v-btn>
      </v-col>
    </v-row>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      connections: [
        {
          id: 1,
          name: 'John White',
          connections: '20 Connections'
        },
        {
          id: 2,
          name: 'Chaz Rosario',
          connections: '20 Connections'
        },
        {
          id: 3,
          name: 'Company 2',
          connections: '13k Connections'
        },
        {
          id: 4,
          name: 'Company 3',
          connections: '120 Connections'
        },
        {
          id: 5,
          name: 'Melanie Gold',
          connections: '46 Connections'
        }
      ]
    }
  }
}
</script>
