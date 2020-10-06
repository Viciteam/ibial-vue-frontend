<template>
  <div>
    <v-row class="py-6 px-8">
      <v-col>
        <v-row>
          <v-col>
            <h1 class="font-weight-medium">Deals</h1>
          </v-col>
          <v-col class="text-right">
            <v-btn
              class="text-capitalize pa-6 ml-3 box_shadow--default"
              color="white"
              rounded
            >
              <v-icon left>mdi-cog-outline</v-icon>
              <span v-if="$vuetify.breakpoint.smAndUp" class="pr-2">
                Configure Stages
              </span>
            </v-btn>
            <v-btn
              class="text-capitalize white--text pa-6 ml-3 box_shadow--default"
              color="primary"
              rounded
            >
              <v-icon left>mdi-plus</v-icon>
              <span v-if="$vuetify.breakpoint.smAndUp" class="pr-2">
                New Deal
              </span>
            </v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-btn text class="text-capitalize">
              Filter
              <span class="font-weight-bold pl-3">All</span>
              <v-icon right>mdi-chevron-down</v-icon>
            </v-btn>
            <v-btn text class="text-capitalize">
              Assignee
              <span class="font-weight-bold pl-3">Me</span>
              <v-icon right>mdi-chevron-down</v-icon>
            </v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <Deals />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { Deals } from '~/components/saas/deals'

export default {
  components: {
    Deals
  },
  data() {
    return {}
  }
}
</script>
