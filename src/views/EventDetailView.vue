<script setup lang="ts">
import {onMounted, ref} from "vue";
import type {Event} from "@/type";
import EventService from "@/services/EventService";

const props = defineProps<{ id: number }>();

const event = ref<Event | null>(null);
onMounted(async () => {
  try {
    event.value = (await EventService.getEvent(props.id)).data
  } catch (e) {
    console.error(e)
  }
})
</script>

<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <p>{{ event.time }}</p> on {{ event.date }} @ {{ event.location }}
    <p>{{ event.description }}</p>
  </div>
</template>

<style scoped>

</style>