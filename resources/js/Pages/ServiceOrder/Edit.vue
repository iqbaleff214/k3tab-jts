<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import Breadcrumb from '@/Components/Breadcrumb.vue';
import SectionBorder from '@/Components/SectionBorder.vue';
import EditServiceOrderForm from './Partials/EditServiceOrderForm.vue';
import ServicemenForm from './Partials/ServicemenForm.vue';
import ProgressPercentageForm from './Partials/ProgressPercentageForm.vue';

const props = defineProps({
    data: Object,
});

const breadcrumbs = [
    { label: 'Service Order', url: route('service-orders.index') },
    { label: props.data.service_order_no, url: null },
    { label: 'Edit', url: null },
];
</script>

<template>
    <AppLayout title="Edit ServiceOrder">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Service Order
            </h2>
            <Breadcrumb :links="breadcrumbs" />
        </template>

        <div class="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8">
            <EditServiceOrderForm :serviceOrder="$page.props.data" v-if="['supervisor'].includes($page.props.user.role)" />
            <div v-else>
                <div class="mb-4" v-if="data.status == 'in_progress'">
                    <ProgressPercentageForm :serviceOrder="$page.props.data" />

                    <SectionBorder />
                </div>

                <ServicemenForm :serviceOrder="$page.props.data" :user="$page.props.servicemen" />
            </div>
        </div>
    </AppLayout>
</template>
