<template>
  <div class="pt-5">
    <v-row>
      <v-col cols="12" class="text-right">
        <v-btn color="white" class="text-capitalize box_shadow--default">
          <v-icon left>mdi-sort-variant</v-icon>
          Sort by <span class="font-weight-bold">&nbsp;Best selling</span>
        </v-btn>
        <v-btn color="white" class="text-capitalize ml-3 box_shadow--default">
          <v-icon left>mdi-grid-large</v-icon>
          <span class="font-weight-bold">Grid view</span>
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="4" class="text-center">
        <div
          class="ma-3 px-12 title font-weight-bold dark_gray--text new__offering--btn create-offering"
          @click="newOffering"
        >
          + Create A New Offering
        </div>
      </v-col>
      <v-col v-for="item in items" :key="item.id" cols="12" sm="4">
        <Offering :data="item" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Offering from '~/components/business/Offering.vue'

export default {
  components: {
    Offering
  },
  data() {
    return {
      /**
       * all the datas here
       */
      items: [
        {
          id: 0,
          tags: ['#NetworkSystems', '#DevsOfVietnam'],
          title: 'KeepSolid VPN Unlimited: Lifetime Subscription',
          subtitle: 'Three plans available',
          likes: '16',
          price: 'from $50'
        },
        {
          id: 1,
          tags: ['#SampleLongProductName'],
          title: 'Full Video Production, Strategy and Marketing...',
          subtitle: 'We offer script writing, video edting and photo...',
          likes: '100',
          price: 'from $100'
        },
        {
          id: 2,
          tags: ['#SampleProduct', '#ShortName'],
          title: 'BuildBubbles',
          subtitle:
            'Turn your wordpress something articles into podcasts with just one click',
          likes: '',
          price: '$60'
        }
      ],
      response: null,
      products: null
    }
  },
  computed: {
    /**
     * all the computed here
     */
  },
  watch: {
    /**
     * all the watchers here
     */
  },
  mounted() {
    /**
     * all the mounted here
     */
    this.getProducts()
  },
  methods: {
    /**
     * all the methods here
     */
    newOffering() {
      console.log('new offer..')
    },
    async getProducts() {
      console.log('TEST')
      try {
        this.response = await this.$productRepository.GetProducts()
        this.products = this.response.data
        // eslint-disable-next-line no-empty
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
<style scoped>
.new__offering--btn {
  border: 5px solid #a0a8b0;
  border-style: dashed;
  height: 90%;
  background: #dfdfe1;
  padding-top: 40%;
}
.new__offering--btn:hover {
  cursor: pointer;
}
.create-offering {
  min-height: 342px;
}
</style>
