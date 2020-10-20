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
                  <v-list-item
                    v-for="(item, i) in items"
                    :key="i"
                    @click="navigate(item.text)"
                  >
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
                  <v-list-item @click="navigate('Saved Offerings')">
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
                v-for="item in tags"
                :key="item"
                color="secondary_background"
                class="secondary--text"
                small
                @click="hashtags(item)"
                >{{ item }}</v-chip
              >
            </v-chip-group>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <MyStore v-if="nav === 'My Store'" />
            <Sales v-else-if="nav === 'Sales'" />
            <Purchases v-else-if="nav === 'Purchases'" />
            <Wallet v-else-if="nav === 'Wallet'" />
            <Referrals v-else-if="nav === 'Referrals'" />
            <SavedOfferings v-else-if="nav === 'Saved Offerings'" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { MyStore } from '~/components/marketplace'

export default {
  /*middleware: 'auth',*/
  components: {
    Sales: () => import('@/components/marketplace/Sales.vue'),
    Purchases: () => import('@/components/marketplace/Purchases.vue'),
    Wallet: () => import('@/components/marketplace/Wallet.vue'),
    Referrals: () => import('@/components/marketplace/Referrals.vue'),
    SavedOfferings: () => import('@/components/marketplace/SavedOfferings.vue'),
    MyStore
  },
  data() {
    return {
      sidebarMenu: 0,
      nav: 'My Store',
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
      tags: [
        '#Network&Communications',
        '#Marketing',
        '#Management',
        '#Printing&Prototyping',
        '#Design'
      ]
    }
  },
  methods: {
    navigate(text) {
      this.nav = text
    },
    hashtags(tags) {
      this.$router.push({ path: '/tags/', query: { tags: tags } })
    }
  }
}
</script>
