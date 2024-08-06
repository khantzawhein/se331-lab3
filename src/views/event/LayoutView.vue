<script setup lang="ts">
import {onMounted, ref} from "vue";
import type {Event} from "@/type";
import EventService from "@/services/EventService";

const props = defineProps<{ id: string }>();

const event = ref<Event | null>(null);
onMounted(async () => {
  try {
    event.value = (await EventService.getEvent(parseInt(props.id))).data
  } catch (e) {
    console.error(e)
  }
})
</script>

<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <nav>
      <router-link :to="{name: 'event-detail-view'}">Details</router-link>
      <router-link :to="{name: 'event-register-view'}">Register</router-link>
      <router-link :to="{name: 'event-edit-view'}">Edit</router-link>
    </nav>
    <RouterView :event="event"></RouterView>
  </div>
</template>

<style scoped>

</style>