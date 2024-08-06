<script setup lang="ts">
import EventCard from '@/components/EventCard.vue';
import CategoryCard from '@/components/CategoryCard.vue';
import type {Event} from '@/type';
import {computed, ref, watchEffect} from 'vue';
import EventService from '@/services/EventService';

const events = ref<Event[] | null>(null);

const props = defineProps<{ page: number, perPage: number }>()

const page = computed(() => props.page)
const perPage = computed(() => props.perPage)
const totalEvents = ref(0);
const hasNextPage = computed(() => {
  const totalPages = Math.ceil(totalEvents.value / perPage.value);
  return page.value < totalPages;
})

watchEffect(() => {
  EventService.getEvents(perPage.value, page.value).then(({data, headers}: { data: Event[], headers: any }) => {
    events.value = data;
    totalEvents.value = headers['x-total-count']
  }).catch((e) => {
    console.error(e);
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
      <div class="pagination">
        <RouterLink :to="{name: 'event-list-view', query: {page: page - 1, per_page: perPage}}" rel="prev" v-if="page != 1" id="page-prev">
          &#60; Prev Page
        </RouterLink>
        <RouterLink :to="{name: 'event-list-view', query: {page: page + 1, per_page: perPage}}" rel="next" v-if="hasNextPage"
                    id="page-next">
          Next Page &#62;
        </RouterLink>
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

.pagination {
  display: flex;
  width: 290px;
}

.pagination a {
  flex: 1;
  text-decoration: none;
  color: #2c3e50;
}

#page-prev {
  text-align: left;
}

#page-next {
  text-align: right;
}
</style>