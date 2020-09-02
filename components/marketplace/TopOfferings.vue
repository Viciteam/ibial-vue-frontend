<template>
  <div>
    <v-row>
      <v-col>
        <v-row>
          <v-col>
            <span class="headline">Top Offerings</span>
          </v-col>
        </v-row>
        <v-row>
          <v-col
            v-for="item in offerings"
            :key="item.id"
            cols="12"
            :sm="!isListView ? '4' : '12'"
          >
            <v-card class="pa-0 box_shadow--default">
              <v-btn
                depressed
                small
                absolute
                top
                right
                fab
                color="white"
                class="mt-5 mr-n4"
              >
                <v-icon>mdi-bookmark-outline</v-icon>
              </v-btn>

              <v-row>
                <v-col :cols="!isListView ? '12' : '4'" class="py-0">
                  <v-avatar
                    class="justify-right"
                    tile
                    color="primary"
                    width="100%"
                    :height="!isListView ? '150' : '100%'"
                  >
                  </v-avatar>
                </v-col>
                <v-col :cols="!isListView ? '12' : '5'">
                  <div :class="!isListView ? 'py-3 px-5' : 'px-0'">
                    <span
                      class="mt-2 caption font-weight-medium medium_gray--text"
                    >
                      #NetworkSystems
                    </span>
                    <span
                      class="pl-2 mt-2 caption font-weight-medium medium_gray--text"
                    >
                      #DevsOfVietnam
                    </span>
                    <v-card-text class="pa-0 title font-weight-medium">
                      {{ item.title }}
                    </v-card-text>
                    <v-card-text class="pt-2 pl-0 text--primary">{{
                      item.subtitle
                    }}</v-card-text>
                    <span class="text--primary">Seller:</span>
                    <span class="text--primary font-weight-medium">{{
                      item.seller
                    }}</span>
                  </div>
                  <v-row class="px-5">
                    <v-col class="font-weight-medium medium_gray--text">
                      {{
                        item.likes == '' ? 'No reviews yet' : '😀 ' + item.likes
                      }}
                    </v-col>
                    <v-col class="text-right font-weight-medium">
                      {{ item.price }}
                    </v-col>
                  </v-row>
                </v-col>
                <v-col
                  :style="isListView ? 'border-left: 1px solid #0000001f' : ''"
                  :cols="!isListView ? '12' : '3'"
                >
                  <v-divider v-if="!isListView"></v-divider>
                  <v-row>
                    <v-col
                      :class="
                        !isListView ? 'text-right mr-6' : 'text-center mt-6'
                      "
                    >
                      <v-btn text color="primary" class="text-capitalize">
                        Add to Cart
                      </v-btn>
                      <v-btn
                        rounded
                        outlined
                        center
                        color="primary"
                        class="text-capitalize"
                      >
                        Buy now
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
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
      offerings: [
        {
          id: 1,
          title: 'Lorem Ipsum',
          subtitle:
            'Instantly turn your WordPress articles into podcasts with no mics or studios...',
          seller: 'Company C',
          likes: '16',
          price: 'from $100'
        },
        {
          id: 2,
          title: 'Lorem Ipsum',
          subtitle:
            'Instantly turn your WordPress articles into podcasts with no mics or studios...',
          seller: 'Company C',
          likes: '16',
          price: 'from $100'
        },
        {
          id: 3,
          title: 'Lorem Ipsum',
          subtitle:
            'Instantly turn your WordPress articles into podcasts with no mics or studios...',
          seller: 'Company C',
          likes: '16',
          price: 'from $100'
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
