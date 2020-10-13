<template>
  <v-card flat color="transparent">
    <v-card-title class="text-h6 font-weight-semi-bold">
      More offerings from Company C
    </v-card-title>

    <v-slide-group class="slide-group--container">
      <v-slide-item v-for="n in 15" :key="n">
        <v-card class="ma-2 box-shadow--default" width="330" max-width="330">
          <v-img
            class="white--text align-end"
            height="200px"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            lazy-src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          >
          </v-img>

          <OfferingTags class="pa-4" />

          <v-card-title class="py-0 text-h6 black--text font-weight-semi-bold">
            Lorem Ipsum
          </v-card-title>

          <v-card-text class="text--primary mt-2">
            <div>
              Instantly turn your WordPress articles into podcasts with no mics
              or studios...
            </div>

            <div class="mt-3">
              <span class="medium_gray--text mr-1">
                Seller:
              </span>
              <span class="black--text font-weight-semi-bold">
                <v-badge
                  color="transparent"
                  icon="mdi-checkbox-marked-circle-outline"
                  class="badge-icon--color"
                >
                  Company C
                </v-badge>
              </span>
            </div>

            <v-row no-gutters class="mt-4">
              <span class="mr-3 text-subtitle-2 medium_gray--text">
                <img src="/icons/review/happy.svg" width="20" class="mb-n1" />
                16
              </span>

              <v-spacer />

              <span class="black--text font-weight-semi-bold text-subtitle-1">
                from $100
              </span>
            </v-row>
          </v-card-text>

          <v-divider class="mx-4" />

          <v-card-actions class="pa-4">
            <v-spacer />
            <v-btn
              large
              text
              rounded
              color="primary"
              class="px-3 text-capitalize"
            >
              Add to Cart
            </v-btn>
            <v-btn
              large
              depressed
              rounded
              outlined
              color="primary"
              class="px-6 text-capitalize"
            >
              Buy Now
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-slide-item>
    </v-slide-group>
  </v-card>
</template>

<script>
import OfferingTags from './OfferingTags'

export default {
  components: {
    OfferingTags
  }
}
</script>

<style>
#app .slide-group--container .v-slide-group__prev {
  position: absolute;
  height: 100%;
  z-index: 9;
  background: rgb(203 203 203 / 50%);
}
#app .slide-group--container .v-slide-group__prev--disabled {
  display: none;
}
#app .slide-group--container .v-slide-group__next {
  position: absolute;
  right: 0;
  height: 100%;
  z-index: 9;
  background: rgb(203 203 203 / 50%);
}
#app .slide-group--container .v-slide-group__next--disabled {
  display: none;
}
</style>
