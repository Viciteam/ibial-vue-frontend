<template>
  <v-card flat color="transparent">
    <v-card class="box-shadow--default pa-4 mb-7">
      <v-card-title>
        <span class="text-h4-v3 font-weight-semi-bold">
          Lorem Ipsum (title)
        </span>
        <v-spacer />
        <v-btn icon>
          <v-icon color="medium_gray">mdi-bookmark-outline</v-icon>
        </v-btn>
        <v-btn icon class="ml-3">
          <v-icon color="medium_gray">mdi-share-variant</v-icon>
        </v-btn>
      </v-card-title>

      <v-row no-gutters align="center" class="mb-5">
        <div>
          <Tags v-for="(item, i) in tags" :key="i" :tags="item" />
        </div>

        <v-spacer />

        <span class="mr-3 text-subtitle-1 black--text">
          <img src="/icons/review/happy.svg" width="20" class="mb-n1" />
          16 Reviews
        </span>
      </v-row>

      <ProductMedia />

      <v-card flat>
        <v-card-title class="text-h6 font-weight-semi-bold">
          Description
        </v-card-title>

        <v-card-text class="text-subtitle-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet
          sollicitudin ultricies porttitor odio velit, quam tellus enim.
          Sollicitudin aliquam ac, vel, malesuada vitae. Ultrices orci massa
          placerat nunc imperdiet vel.
        </v-card-text>

        <v-card-text>
          <v-list-item v-for="i in 3" :key="i" dense class="px-0">
            <v-icon color="primary" class="mr-2">mdi-check</v-icon>
            <span>quam tellus enim. Sollicitudin aliquam ac</span>
          </v-list-item>
        </v-card-text>
      </v-card>

      <PricingComparison />

      <v-divider class="my-7 mx-4"></v-divider>

      <ProductSellerInfo class="mb-4" />
    </v-card>

    <PostReview class="my-4" />

    <ReviewSummary class="mb-4" />

    <Feed />

    <MoreOffering />
  </v-card>
</template>

<script>
import Tags from './Tags'
import ProductMedia from './ProductMedia'
import PricingComparison from './PricingComparison'
import ProductSellerInfo from './ProductSellerInfo'
import PostReview from './PostReview'
import ReviewSummary from './ReviewSummary'
import MoreOffering from './MoreOffering'
import { Feed } from '~/components/community/widgets'

export default {
  components: {
    Tags,
    ProductMedia,
    PricingComparison,
    ProductSellerInfo,
    PostReview,
    ReviewSummary,
    Feed,
    MoreOffering
  },
  data() {
    return {
      tags: [
        {
          name: '#NetworkSystems'
        },
        {
          name: '#NetworkSystems'
        },
        {
          name: '#NetworkSystems'
        }
      ]
    }
  }
}
</script>
