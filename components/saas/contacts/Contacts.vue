<template>
  <div>
    <v-row>
      <v-col>
        <v-row>
          <v-col>
            <v-btn text class="text-capitalize">
              Filter
              <span class="font-weight-bold pl-3">Active</span>
              <v-icon right>mdi-chevron-down</v-icon>
            </v-btn>
          </v-col>
          <v-col class="text-right">
            <v-btn icon>
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
            <v-btn
              class="text-capitalize pa-6 ml-3 box_shadow--default"
              color="white"
              rounded
            >
              <span v-if="$vuetify.breakpoint.smAndUp" class="px-3">
                Export
              </span>
            </v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-data-table
              :headers="headers"
              :items="contacts"
              :items-per-page="5"
              :loading="loading"
              loading-text="Loading... Please wait"
              show-select
              class="box_shadow--default"
            >
            </v-data-table>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props: {
    contacts: {
      type: Array,
      required: true
    },
    loading: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      headers: [
        {
          text: 'EMAIL ADDRESS',
          align: 'start',
          value: 'contact_email'
        },
        {
          text: 'FIRST NAME',
          value: 'contact_fname'
        },
        {
          text: 'LAST NAME',
          value: 'contact_lname'
        },
        {
          text: 'DATE ADDED',
          value: 'created_at'
        },
        {
          text: 'SOURCE',
          value: 'source'
        }
      ]
    }
  }
  /*computed: {
    loading() {
      return this.contacts ? false : true
    }
  }*/
}
</script>
