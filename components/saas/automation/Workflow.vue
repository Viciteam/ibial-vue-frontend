<template>
  <div>
    <v-card v-if="isListView" tile class="px-3 box_shadow--default">
      <v-row class="text-uppercase font-weight-bold">
        <v-col cols="5">
          <v-row>
            <v-col cols="2" class="py-0">
              <v-checkbox class="mt-2 pl-3" hide-details value></v-checkbox>
            </v-col>
            <v-col cols="10" class="pl-8">
              Workflow
            </v-col>
          </v-row>
        </v-col>
        <v-col class="pt-6">
          Connected Apps
        </v-col>
        <v-col class="pt-6">
          Status
        </v-col>
      </v-row>
    </v-card>
    <v-row>
      <v-col
        v-for="(item, n) in workflows"
        :key="n"
        cols="12"
        :sm="!isListView ? '4' : '12'"
        :class="isListView ? 'py-0' : ''"
      >
        <v-card class="pa-3 box_shadow--default">
          <v-row>
            <v-col v-if="isListView" cols="1">
              <v-checkbox
                class="mt-n1 pr-0 pl-3"
                hide-details
                value
              ></v-checkbox>
            </v-col>
            <v-col :cols="!isListView ? '11' : '4'" class="py-0">
              <h4>{{ item.title }}</h4>
              <p class="caption">{{ item.subscriber }} Total Subscribers</p>
            </v-col>
            <!--<v-col>-->
            <v-btn absolute top right icon>
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
            <!--</v-col>-->
            <v-col>
              <v-btn v-for="(app, i) in item.apps" :key="i" icon>
                <v-icon>{{ app }}</v-icon>
              </v-btn>
            </v-col>
            <v-col class="py-0 text-right">
              <v-switch
                v-model="item.isactive"
                color="primary"
                hide-details
                :label="item.isactive ? 'Active' : 'Inactive'"
                inset
              ></v-switch>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props: {
    views: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      workflows: [
        {
          title: 'Add form submissions to spreadsheet',
          subscriber: 0,
          apps: ['mdi-file-document', 'mdi-file-document', 'mdi-file'],
          isactive: true
        },
        {
          title: 'Add form submissions to Google Sheets and Slack/Gmail',
          subscriber: 0,
          apps: ['mdi-file-document', 'mdi-file-document', 'mdi-file'],
          isactive: false
        },
        {
          title: 'FB Lead Ads to database',
          subscriber: 0,
          apps: ['mdi-file-document', 'mdi-file-document', 'mdi-file'],
          isactive: true
        },
        {
          title: 'Add form submissions to spreadsheet',
          subscriber: 0,
          apps: ['mdi-file-document', 'mdi-file-document', 'mdi-file'],
          isactive: true
        },
        {
          title: 'Add form submissions to Google Sheets and Slack/Gmail',
          subscriber: 0,
          apps: ['mdi-file-document', 'mdi-file-document', 'mdi-file'],
          isactive: false
        },
        {
          title: 'FB Lead Ads to database',
          subscriber: 0,
          apps: ['mdi-file-document', 'mdi-file-document', 'mdi-file'],
          isactive: true
        },
        {
          title: 'Add form submissions to Google Sheets and Slack/Gmail',
          subscriber: 0,
          apps: ['mdi-file-document', 'mdi-file-document', 'mdi-file'],
          isactive: false
        },
        {
          title: 'FB Lead Ads to database',
          subscriber: 0,
          apps: ['mdi-file-document', 'mdi-file-document', 'mdi-file'],
          isactive: true
        }
      ]
    }
  },
  computed: {
    isListView() {
      return this.views
    }
  }
}
</script>
