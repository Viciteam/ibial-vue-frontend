<template>
  <div>
    <v-row>
      <v-col cols="12" sm="5">
        <span class="headline">Recommended Offerings</span>
      </v-col>
      <v-col cols="12" sm="7" class="text-sm-right">
        <v-menu bottom transition="scale-transition">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="white"
              class="text-capitalize box_shadow--default"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon left>mdi-sort-variant</v-icon>
              Sort by
              <span class="font-weight-bold">&nbsp;{{ sortText }}</span>
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="item in sortBy"
              :key="item"
              @click="sortText = item"
            >
              <v-list-item-content>
                <v-list-item-title>{{ item }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-btn color="white" class="text-capitalize ml-3 box_shadow--default">
          <v-icon left>mdi-checkbox-multiple-blank-outline</v-icon>
          <span class="font-weight-bold">Filter</span>
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
            <v-list-item @click="view('mdi-format-list-bulleted', 'List View')">
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
    </v-row>
    <RecommendedOfferings :views="isListView" />
    <TopOfferings :views="isListView" />
  </div>
</template>
<script>
import {
  RecommendedOfferings,
  TopOfferings
} from '~/components/marketplace/store'

export default {
  components: {
    RecommendedOfferings,
    TopOfferings
  },
  data() {
    return {
      sortBy: ['Newest', 'Recommended', 'Best Selling'],
      sortText: 'Best Selling',
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
