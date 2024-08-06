import {createRouter, createWebHistory} from 'vue-router'
import EventListView from '../views/EventListView.vue'
import AboutView from '../views/AboutView.vue'
import StudentView from '../views/StudentView.vue'
import EventDetailView from "@/views/event/DetailView.vue";
import RegisterView from "@/views/event/RegisterView.vue";
import EditView from '@/views/event/EditView.vue';
import LayoutView from '@/views/event/LayoutView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'event-list-view',
            component: EventListView,
            props: (route) => ({
                page: parseInt(route.query?.page?.toString() || '1'),
                perPage: parseInt(route.query?.per_page?.toString() || '2')
            })
        },
        {
            path: '/event/:id',
            name: 'event-layout-view',
            component: LayoutView,
            props: true,
            children: [
                {
                    path: '',
                    name: 'event-detail-view',
                    component: EventDetailView,
                    props: true
                },
                {
                    path: 'register',
                    name: 'event-register-view',
                    component: RegisterView,
                    props: true
                },
                {
                    path: 'edit',
                    name: 'event-edit-view',
                    component: EditView,
                    props: true
                }
            ]
        },
        {
            path: '/students',
            name: 'students',
            component: StudentView
        },
        {
            path: '/about',
            name: 'about',
            component: AboutView
        }
    ]
})

export default router
