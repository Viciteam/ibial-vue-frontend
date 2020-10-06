<template>
  <div>
    <v-row class="py-6 px-8">
      <v-col>
        <v-row>
          <v-col>
            <h1 class="font-weight-medium">Contacts</h1>
          </v-col>
          <v-col class="text-right">
            <v-btn
              class="text-capitalize pa-6 ml-3 box_shadow--default"
              color="white"
              rounded
            >
              <span v-if="$vuetify.breakpoint.smAndUp" class="pr-2">
                Import Contacts
              </span>
            </v-btn>
            <v-btn
              class="text-capitalize white--text pa-6 ml-3 box_shadow--default"
              color="primary"
              rounded
            >
              <span v-if="$vuetify.breakpoint.smAndUp" class="pr-2">
                New Contact
              </span>
              <v-icon right>mdi-chevron-down</v-icon>
            </v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-tabs background-color="transparent">
              <v-tab class="text-capitalize">All Contacts</v-tab>
              <v-tab class="text-capitalize">Segments</v-tab>
              <v-tab class="text-capitalize">Archived</v-tab>
              <v-tab-item>
                <Contacts :contacts="contacts" :loading="loading" />
              </v-tab-item>
              <v-tab-item>
                <Segments />
              </v-tab-item>
              <v-tab-item>
                <Archived />
              </v-tab-item>
            </v-tabs>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { Contacts, Segments, Archived } from '~/components/saas/contacts'

export default {
  components: {
    Contacts,
    Segments,
    Archived
  },
  data() {
    return {
      contacts: [],
      loading: true
    }
  },
  mounted() {
    this.getContacts()
  },
  methods: {
    async getContacts() {
      try {
        await this.$saasRepository.Contacts(1234).then((response) => {
          console.log(response)
          this.loading = false
          this.contacts = response
        })
        // eslint-disable-next-line no-empty
      } catch (error) {
        this.loading = false
      }
    }
  }
}
</script>
<style>
.theme--light.v-tabs-items {
  background-color: unset;
  border-top: 2px solid #443f3f1a;
}
</style>
