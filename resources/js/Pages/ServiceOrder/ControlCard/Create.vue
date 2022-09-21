<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import Breadcrumb from '@/Components/Breadcrumb.vue';
import SectionBorder from '@/Components/SectionBorder.vue';
import CreateControlCardFormVue from './Partials/CreateControlCardForm.vue';

const props = defineProps({
    so: Object,
});

const breadcrumbs = [
    { label: 'Service Order', url: route('service-orders.index') },
    { label: props.so?.service_order_no, url: null },
    { label: 'Control Card', url: route('control-cards.index', props.so.id) },
    { label: 'Create', url: null },
];
</script>

<template>
    <AppLayout title="New Control Card Note">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Control Card
            </h2>
            <Breadcrumb :links="breadcrumbs" />
        </template>

        <div class="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8">
            <CreateControlCardFormVue :so="so" />
        </div>
    </AppLayout>
</template>
