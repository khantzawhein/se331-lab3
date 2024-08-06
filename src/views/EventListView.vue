<script setup lang="ts">
import EventCard from '@/components/EventCard.vue';
import CategoryCard from '@/components/CategoryCard.vue';
import type { Event } from '@/type';
import { ref, onMounted } from 'vue';
import EventService from '@/services/EventService';
const events = ref<Event[] | null>(null);

onMounted(() => {
  EventService.getEvents().then(({ data }: { data: Event[] }) => {
    events.value = data;
  });
})

</script>

<template>
  <h1>Events for Good</h1>
  <div class="home">
    <div class="events">
      <div class="event-item" v-for="event in events" :key="event.id">
        <EventCard :event="event"></EventCard>
        <CategoryCard :event="event"></CategoryCard>
      </div>
    </div>
  </div>
</template>


<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1 {
  text-align: center;
}

.event-item {
  display: flex;
  align-items: center;
}
</style>