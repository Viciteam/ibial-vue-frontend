<template>
  <v-dialog v-model="addPeopleModal" width="500">
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        text
        color="primary"
        class="text-capitalize mt-2 ml-n3"
        dark
        v-bind="attrs"
        v-on="on"
      >
        Add Members
      </v-btn>
    </template>
    <v-card>
      <v-card-title class="">
        Invite your Team
        <v-icon @click="addPeopleModal = false">mdi-close</v-icon>
      </v-card-title>
      <v-card-text>
        <v-col>
          <label for="">By Email</label>
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
                <v-list-item v-for="index in 10" :key="index">
                  <v-row
                    no-gutters
                    class="mb-12"
                    style="margin-bottom: 5px !important;"
                  >
                    <v-col md="2">
                      <div class="lop_image">img</div>
                    </v-col>
                    <v-col md="8">
                      <div class="lop_name">John Dow</div>
                    </v-col>
                    <v-col md="2">
                      <v-btn elevation="0" icon @click="addPerson(index, 1, 1)">
                        <v-icon>mdi-plus-circle-outline</v-icon>
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-list-item>
              </div>
            </div>
          </div>
          <label for="">Invitation Link</label>
          <v-row no-gutters class="mb-12">
            <v-col md="12">
              <v-text-field
                class="byemailfield"
                placeholder="link here"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-col>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    inviteByEmail: function() {
      // this.feed = this.$teamsRepository.invitePeopleByID(1)
    },
    async addPerson(user_id, team_id, project_id) {
      try {
        this.getInfo = await this.$teamsRepository.invitePeopleByID(
          user_id,
          team_id,
          project_id
        )
        console.log(this.getInfo)
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style scoped>
.fixed-bar {
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  z-index: 2;
}
.roomCard__container {
  padding-bottom: 52px;
}
</style>
