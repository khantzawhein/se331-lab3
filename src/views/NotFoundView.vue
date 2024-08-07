<script setup lang="ts">
const props = withDefaults(defineProps<{ resource: string }>(), {
  resource: 'page'

})
</script>

<template>
  <h1>Oops!</h1>
  <h3>The {{ resource }} you're looking for is not here.</h3>
  <router-link :to="{name: 'event-list-view'}">
    Back to Home Page
  </router-link>
</template>

<style scoped>

</style>