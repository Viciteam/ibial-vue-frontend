<template>
  <v-dialog v-model="viewMembersModal" width="500">
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        text
        color="primary"
        class="text-capitalize mt-2 ml-n3"
        dark
        v-bind="attrs"
        v-on="on"
      >
        View All Members (20)
      </v-btn>
    </template>
    <v-card>
      <v-card-title class="">
        <v-row no-gutters class="mb-12" style="margin-bottom: 0 !important;">
          <v-col md="10">
            All Members
          </v-col>
          <v-col md="2">
            <v-icon @click="viewMembersModal = false">mdi-close</v-icon>
          </v-col>
        </v-row>
      </v-card-title>
      <v-card-text>
        <v-col>
          <label for="">Invite More</label>
          <v-row no-gutters class="mb-12" style="margin-bottom: 0 !important;">
            <v-col md="10">
              <v-combobox
                v-model="select"
                :items="items"
                placeholder="Team member's email address"
                multiple
                chips
              ></v-combobox>
            </v-col>
            <v-col md="2">
              <v-btn color="green darken-1" @click="inviteByEmail">
                Invite
              </v-btn>
            </v-col>
          </v-row>
          <div class="suggest_title">Suggest People</div>
          <div class="list_of_people">
            <div class="lop_inner">
              <div class="lop_item">
                <v-list-item v-for="(index, nkey) in allMembers" :key="nkey">
                  <v-row
                    no-gutters
                    class="mb-12"
                    style="margin-bottom: 5px !important;"
                  >
                    <v-col md="2">
                      <div class="lop_image">img</div>
                    </v-col>
                    <v-col md="8">
                      <div class="lop_name">{{ index.user_id }}</div>
                    </v-col>
                    <v-col md="2">
                      <v-btn elevation="0" icon @click="removeMember(index.id)">
                        <v-icon>mdi-minus-circle-outline</v-icon>
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-list-item>
              </div>
            </div>
          </div>
        </v-col>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      allMembers: null
    }
  },
  mounted() {
    this.getMembers(), this.removeMember()
  },
  methods: {
    async removeMember(inkey) {
      try {
        this.$teamsRepository.removeMember(inkey)
        this.getMembership = await this.$teamsRepository.pullMembers(1) // dynamic replace as per clicked team member
        this.allMembers = this.getMembership.data
      } catch (error) {
        console.log(error)
      }
    },
    async getMembers() {
      try {
        this.getMembership = await this.$teamsRepository.pullMembers(1) // dynamic replace as per clicked team member
        this.allMembers = this.getMembership.data
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style scoped></style>
