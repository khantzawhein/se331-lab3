<template>
    <div class="event-class">
        <div class="event-card">
            <p>{{ event.category }}</p>
            <p>{{ event.organizer }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Event } from '@/type'
defineProps<{ event: Event }>()
</script>

<style scoped>
.event-card {
    padding: 20px;
    width: 250px;
    cursor: pointer;
    border: 1px solid #39495c;
    margin-bottom: 18px;
}

.event-card p {
    text-align: right;
    margin: 10px;
}

.event-card:hover {
    transform: scale(1.01);
    box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style>