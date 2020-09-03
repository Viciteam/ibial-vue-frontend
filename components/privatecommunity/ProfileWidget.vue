<template>
  <v-card class="mx-auto box_shadow--default pb-3">
    <v-avatar height="100" width="100%" color="primary" tile></v-avatar>
    <v-avatar class="profile ml-6 mt-n8 pa-1" color="white" size="80">
      <v-img
        height="100%"
        src="https://pickaface.net/gallery/avatar/unr_test_161024_0535_9lih90.png"
      ></v-img>
    </v-avatar>
    <v-row>
      <v-col class="py-0">
        <v-list-item color="rgba(0, 0, 0, .4)" class="pl-6">
          <v-list-item-content>
            <v-list-item-title class="black--text body-1 font-weight-bold"
              >Business Name</v-list-item-title
            >
          </v-list-item-content>
          <v-list-item-action>
            <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon v-bind="attrs" v-on="on">
                  <v-icon>mdi-chevron-down</v-icon>
                </v-btn>
              </template>
              <span class="caption">Switch Profile</span>
            </v-tooltip>
          </v-list-item-action>
        </v-list-item>
        <v-list-item class="pl-6">
          <v-list-item-content class="py-0">
            <v-list-item-subtitle
              ><span class="font-weight-bold">8</span>
              Connections</v-list-item-subtitle
            >
            <v-list-item-subtitle
              ><span class="font-weight-bold">2</span>
              Offerings</v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>
        <v-list-item link class="pl-6">
          <v-list-item-content>
            <v-list-item-title class="primary--text"
              >View Profile</v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>
      </v-col>
    </v-row>
  </v-card>
</template>
