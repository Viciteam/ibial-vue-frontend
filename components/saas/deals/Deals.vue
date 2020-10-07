<template>
  <div>
    <v-row class="d-flex flex-nowrap overflow-auto">
      <v-col v-for="(item, i) in deals" :key="i" class="stages__card">
        <v-card width="250" class="box_shadow--default pb-2" color="#F8F8F8">
          <div
            class="stages_card--header"
            :style="{ background: colors[i] }"
          ></div>
          <v-row>
            <v-col cols="10" class="pr-0 py-0 text-truncate">
              <v-card-title class="body-2 font-weight-bold">{{
                item.title
              }}</v-card-title>
            </v-col>
            <v-col cols="2" class="px-0">
              <v-btn icon small>
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </v-col>
          </v-row>
          <v-divider></v-divider>
          <v-btn text class="text-capitalize caption mx-2 mt-2">
            <v-icon left>mdi-plus</v-icon>
            Add Deal
          </v-btn>
          <v-card
            v-for="(deal, n) in item.deals"
            :key="n"
            class="ma-2 py-3 px-2"
            flat
            outlined
          >
            <p class="caption px-2 mb-0">{{ deal.title }}</p>
            <p class="caption px-2 py-1 mb-0 grey--text">${{ deal.amount }}</p>
            <v-row class="px-6"
              ><v-avatar
                v-for="(tag, t) in deal.tags"
                :key="t"
                color="primary"
                size="20"
                class="mr-1"
              >
                <span class="white--text caption">{{ tag }}</span>
              </v-avatar></v-row
            >
            <v-row class="caption grey--text">
              <v-col class="pb-0 pt-2">
                <v-icon small class="pl-2 pr-0" color="grey"
                  >mdi-calendar-blank-outline</v-icon
                >
                <span>{{ deal.date }}</span>
                <v-icon small class="pl-2" color="grey"
                  >mdi-comment-text</v-icon
                >
                <span>{{ deal.no_of_comments }}</span>
              </v-col>
            </v-row>
          </v-card>
        </v-card>
      </v-col>
      <v-col class="text-center stages__card">
        <div
          class="ma-3 pa-3 add__stage--btn medium_gray--text"
          @click="addStageModal = !addStageModal"
        >
          <p class="py-0 mb-0">
            <v-icon color="#A0A8B0" class="py-0">mdi-plus</v-icon>
          </p>
          <span class="body-2">Add a Stage</span>
        </div>
      </v-col>
    </v-row>
    <v-dialog v-model="addStageModal" width="400">
      <v-card>
        <v-card-title>Add a Stage</v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <v-text-field v-model="stagename" label="Title"></v-text-field>
        </v-card-text>
        <v-card-actions class="justify-space-between px-3 pb-3 pt-0">
          <v-btn text class="text-capitalize" @click="addStageModal = false"
            >Cancel</v-btn
          >
          <v-btn
            :disabled="stagename === ''"
            :loading="loading"
            class="text-capitalize"
            @click="AddStage"
            >Save</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: {
    deals: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      addStageModal: false,
      stagename: '',
      loading: false,
      colors: ['#9B51E0', '#2F80ED', '#37BEFF', '#00D169']
    }
  },
  methods: {
    async AddStage() {
      try {
        const data = {
          user_id: this.$auth.user.id,
          title: this.stagename
        }
        this.loading = true
        await this.$saasRepository.AddStage(data).then((response) => {
          //console.log(response)
          if (response.status === 'success') {
            this.loading = false
            const notif = {
              display: true,
              type: 'primary',
              message: 'Stage created successfully'
            }
            this.stagename = ''
            this.deals.push(response.dealstage)
            this.$store.dispatch('addNotifications', notif)
            this.addStageModal = false
          }
        })
        // eslint-disable-next-line no-empty
      } catch (error) {
        this.loading = false
        const notif = {
          display: true,
          type: 'error',
          message: 'Unable to create stage, please try again'
        }
        this.$store.dispatch('addNotifications', notif)
      }
    }
  }
}
</script>
<style scoped>
.stages__card {
  max-width: 275px;
}
.stages_card--header {
  height: 6px;
}
.add__stage--btn {
  border: 1px solid #a0a8b0;
  border-radius: 5px;
  border-style: dashed;
  width: 250px;
}
.add__stage--btn:hover {
  cursor: pointer;
}
</style>
