<template>
    <div>
        <h1>Student View</h1>

        <div class="card-container">
            <StudentCard v-for="student in students" :key="student.id" :student="student"></StudentCard>
        </div>
    </div>
</template>

<script setup lang="ts">
import StudentCard from '@/components/StudentCard.vue';
import type { Student } from '@/type';
import StudentService from '@/services/StudentService';
import { onMounted, ref } from 'vue';

const students = ref<Student[] | null>(null);

onMounted(() => {
    StudentService.getStudents().then(({ data }: { data: Student[] }) => {
        students.value = data;
    });
})
</script>