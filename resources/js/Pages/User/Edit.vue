<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import Breadcrumb from '@/Components/Breadcrumb.vue';
import SectionBorder from '@/Components/SectionBorder.vue';
import EditUserForm from './Partials/EditUserForm.vue';

const props = defineProps({
    data: Object,
});

const breadcrumbs = [
    { label: 'User Management', url: route('users.index') },
    { label: props.data.salary_number, url: null },
    { label: 'Edit', url: null },
];
</script>

<template>
    <AppLayout title="New User">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                User Management
            </h2>
            <Breadcrumb :links="breadcrumbs" />
        </template>

        <div class="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8">
            <EditUserForm :user="$page.props.data" />
        </div>
    </AppLayout>
</template>
