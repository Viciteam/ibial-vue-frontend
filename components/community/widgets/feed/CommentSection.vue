<template>
  <v-card flat class="py-2">
    <v-list-item class="pa-0">
      <v-list-item-avatar
        class="align-self-start mt-n1"
        color="gray"
        size="40"
      ></v-list-item-avatar>

      <v-list-item-content class="pa-0">
        <v-list-item-title class="body-2 font-weight-bold black--text">
          John White
          <span class="medium_gray--text caption ml-2">30 mins ago</span>
        </v-list-item-title>

        <div class="body-2 black--text">
          by Kurt asdasdasdasdasdsad asd as as as d asd asd asd asd as das dasd
          asd as d asd asd asd aw rqwtrqtwgegarqw by Kurt asdasdasdasdasdsad asd
          as as as d asd asd asd asd as das dasd asd as d asd asd asd aw
          rqwtrqtwgegarqw by Kurt asdasdasdasdasdsad asd as as as d asd asd asd
          asd as das dasd asd as d asd asd asd aw rqwtrqtwgegarqw
        </div>
      </v-list-item-content>
    </v-list-item>

    <v-card flat class="pl-14">
      <PostReactions :imported="'comment'" class="py-3" />

      <CommentField />
    </v-card>
  </v-card>
</template>

<script>
import { CommentField, PostReactions } from './index'

export default {
  components: {
    /**
     * all the components here
     */
    CommentField,
    PostReactions
  },
  data() {
    return {
      /**
       * all the datas here
       */
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
  },
  methods: {
    /**
     * all the methods here
     */
  }
}
</script>
