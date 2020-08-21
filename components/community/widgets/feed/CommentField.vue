<template>
  <div>
    <v-textarea
      solo
      placeholder="Leave a comment..."
      rounded
      outlined
      flat
      dense
      hide-details
      class="input--height pb-4"
      rows="1"
      auto-grow
    >
      <template v-slot:prepend>
        <v-avatar size="40" color="gray" class="mt-n2 mr-1"></v-avatar>
      </template>
    </v-textarea>
  </div>
</template>

<script>
export default {}
</script>

<style>
#app .input--height .v-input__slot {
  position: relative;
  min-height: 40px;
  font-size: 0.9em;
}
</style>
