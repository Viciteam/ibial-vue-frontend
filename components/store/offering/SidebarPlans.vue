<template>
  <v-card class="box-shadow--default px-4 pb-4 pt-2">
    <v-card-title
      class="text-center d-block text-h6 font-weight-semi-bold pb-0"
    >
      Plans
    </v-card-title>

    <span
      class="primary--text font-weight-bold text-caption text-center d-block mb-4"
    >
      Compare pricing
    </span>

    <v-expansion-panels flat>
      <v-expansion-panel
        v-for="(item, i) in plans"
        :key="i"
        class="idle_expansion-panels mt-2 rounded-lg overflow-hidden"
        active-class="isActive_expansion-panels"
      >
        <v-expansion-panel-header
          expand-icon=""
          class="font-weight-semi-bold text-subtitle-1 px-4 light_gray isActive__expansion-panel-header"
        >
          {{ item.title }}
        </v-expansion-panel-header>
        <v-expansion-panel-content class="mx-n1">
          <div class="d-flex text-caption">
            <div>
              {{ item.desc }}
            </div>
            <v-spacer></v-spacer>
            <div class="font-weight-semi-bold text-h4-v2 pl-3">
              {{ item.price }}
            </div>
          </div>
          <div
            class="text-caption d-block text-truncate mt-2 medium_gray--text"
          >
            <v-icon size="16" color="medium_gray">mdi-clock-outline</v-icon>
            <span>
              {{ item.delivery_time }}
            </span>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>

    <v-btn
      color="primary"
      class="text-capitalize mx-auto d-block mt-8"
      rounded
      width="90%"
      depressed
    >
      Select Plan
    </v-btn>

    <v-btn
      color="primary"
      class="text-capitalize mx-auto d-block mt-2"
      text
      width="90%"
      depressed
      rounded
    >
      Add To Cart
    </v-btn>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      plans: [
        {
          title: 'This is the basic package',
          desc:
            ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum arcu, sed id morbi.',
          price: '$10',
          delivery_time: '24 hrs delivery = 30 days refund period'
        },
        {
          title: 'This is the standard package',
          desc:
            ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum arcu, sed id morbi.',
          price: '$50',
          delivery_time: '24 hrs delivery = 30 days refund period'
        },
        {
          title: 'This is the premium package',
          desc:
            ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum arcu, sed id morbi.',
          price: '$100',
          delivery_time: '24 hrs delivery = 30 days refund period'
        },
        {
          title: 'This is another package',
          desc:
            ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum arcu, sed id morbi.',
          price: '$500',
          delivery_time: '24 hrs delivery = 30 days refund period'
        }
      ]
    }
  }
}
</script>

<style scoped>
.isActive_expansion-panels {
  border: solid 2px #4db7a1 !important;
}
.isActive_expansion-panels .isActive__expansion-panel-header {
  background-color: transparent !important;
}
.idle_expansion-panels {
  border-width: 2px !important;
  border-color: transparent;
}
</style>
