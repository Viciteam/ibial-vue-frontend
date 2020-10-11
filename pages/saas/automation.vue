<template>
  <div>
    <v-row class="py-6 px-8">
      <v-col>
        <v-row>
          <v-col>
            <h1 class="font-weight-medium">Automation Center</h1>
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
              Sort by
              <span class="font-weight-bold pl-3">Last Updated</span>
              <v-icon right>mdi-chevron-down</v-icon>
            </v-btn>
            <v-menu bottom transition="scale-transition">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="white"
                  class="text-capitalize ml-3 box_shadow--default"
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon left>{{ iconview }}</v-icon>
                  <span class="font-weight-bold">{{ textview }}</span>
                </v-btn>
              </template>
              <v-list>
                <v-list-item
                  @click="view('mdi-format-list-bulleted', 'List View')"
                >
                  <v-list-item-icon>
                    <v-icon>mdi-format-list-bulleted</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>List View</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item @click="view('mdi-grid-large', 'Grid View')">
                  <v-list-item-icon>
                    <v-icon>mdi-grid-large</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>Grid View</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-col>
          <v-col class="text-right">
            <v-btn icon>
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
            <v-btn
              class="text-capitalize white--text pa-6 ml-3 box_shadow--default"
              color="primary"
              rounded
            >
              <v-icon left>mdi-plus</v-icon>
              <span v-if="$vuetify.breakpoint.smAndUp">
                New Workflow
              </span>
            </v-btn>
          </v-col>
        </v-row>
        <Workflow :views="isListView" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { Workflow } from '~/components/saas/automation'

export default {
  middleware: 'auth',
  components: {
    Workflow
  },
  data() {
    return {
      textview: 'Grid View',
      iconview: 'mdi-format-list-bulleted',
      isListView: false
    }
  },
  methods: {
    view(icon, text) {
      this.isListView = text === 'List View' ? true : false
      this.iconview = icon
      this.textview = text
    }
  }
}
</script>
