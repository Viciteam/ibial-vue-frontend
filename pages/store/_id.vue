<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="3">
        <v-row>
          <v-col>
            <v-btn
              class="text-capitalize white--text py-7 box_shadow--default"
              color="primary"
              rounded
              width="100%"
            >
              <v-icon color="#ffffff">mdi-plus</v-icon>
              <span class="text-capitalize pl-2">Create Offering</span>
            </v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-card class="box_shadow--default">
              <v-list flat>
                <v-list-item-group v-model="sidebarMenu" color="primary">
                  <v-list-item v-for="(item, i) in items" :key="i">
                    <v-list-item-icon class="pl-3">
                      <v-icon v-text="item.icon"></v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title v-text="item.text"></v-list-item-title>
                    </v-list-item-content>
                    <v-list-item-action>
                      <span class="primary--text">{{ item.count }}</span>
                    </v-list-item-action>
                  </v-list-item>
                  <v-divider></v-divider>
                  <v-list-item>
                    <v-list-item-icon class="pl-3">
                      <v-icon>mdi-bookmark-outline</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title>Saved Offerings</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" sm="9">
        <v-row>
          <v-col>
            <v-chip-group column>
              <v-chip
                v-for="item in chips"
                :key="item"
                color="secondary_background"
                class="secondary--text"
                small
                >{{ item }}</v-chip
              >
            </v-chip-group>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <ToggleViews />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { ToggleViews } from '~/components/marketplace'

export default {
  /*middleware: 'auth',*/
  components: {
    ToggleViews
  },
  data() {
    return {
      sidebarMenu: '',
      items: [
        {
          icon: 'mdi-moon-full',
          text: 'My Store',
          count: ''
        },
        {
          icon: 'mdi-shopping-outline',
          text: 'Sales',
          count: ''
        },
        {
          icon: 'mdi-cart-outline',
          text: 'Purchases',
          count: '2'
        },
        {
          icon: 'mdi-wallet-outline',
          text: 'Wallet',
          count: ''
        },
        {
          icon: 'mdi-account-supervisor-outline',
          text: 'Referrals',
          count: ''
        }
      ],
      chips: [
        '#Network&Communications',
        '#Marketing',
        '#Management',
        '#Printing&Prototyping',
        '#Design'
      ]
    }
  }
}
</script>
