<template>
  <v-layout column class="fill-height middleContainer__width--max">
    <v-flex class="mx-2 px-2">
      <PostField class="mb-5" />
    </v-flex>
    <v-flex class="overflow-auto mx-2 px-2 flexContainer__width--max">
      <Feed />
    </v-flex>
  </v-layout>
</template>

<script>
import { Feed, PostField } from '~/components/community/widgets'

export default {
  layout: 'team',
  components: {
    Feed,
    PostField
  }
}
</script>

<style scoped>
.middleContainer__width--max {
  max-width: 54%;
  min-width: 54%;
}
/* width */
.flexContainer__width--max::-webkit-scrollbar {
  width: 7px;
}

/* Track */
.flexContainer__width--max::-webkit-scrollbar-track {
  background: transparent;
}

/* Handle */
.flexContainer__width--max::-webkit-scrollbar-thumb {
  background: #999;
  border-radius: 5px;
}

/* Handle on hover */
.flexContainer__width--max::-webkit-scrollbar-thumb:hover {
  background: #888;
}
</style>
<style>
.v-application--wrap {
  height: 100vh !important;
  padding-top: 158px;
  background: #f7f7f7;
}
</style>
