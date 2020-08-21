<template>
  <div>
    <!-- Need atleast one element inside <template> -->
    <v-container fluid class="mx-auto">
      <v-row>
        <v-col>
          <Header />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <Overview />
        </v-col>
        <v-col>
          <Featured class="mb-10" />
          <MyConnection />
        </v-col>
      </v-row>
    </v-container>
    <!-- 
      /components/Header
      /components/Overview
      /components/Featured
      /components/MyConnection
    -->
  </div>
</template>

<script>
import { Header, Overview, Featured, MyConnection } from '~/components/business'

export default {
  components: {
    Header,
    Overview,
    Featured,
    MyConnection
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
