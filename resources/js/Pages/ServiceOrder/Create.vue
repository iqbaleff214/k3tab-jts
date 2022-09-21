<script setup>
    import AppLayout from '@/Layouts/AppLayout.vue';
    import Breadcrumb from '@/Components/Breadcrumb.vue';
    import SectionBorder from '@/Components/SectionBorder.vue';
    import CreateServiceOrderFormVue from './Partials/CreateServiceOrderForm.vue';

    const breadcrumbs = [
        { label: 'Service Order', url: route('service-orders.index') },
        { label: 'Create', url: null },
    ];
    </script>

    <template>
        <AppLayout title="New ServiceOrder">
            <template #header>
                <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                    Service Order
                </h2>
                <Breadcrumb :links="breadcrumbs" />
            </template>

            <div class="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8">
                <CreateServiceOrderFormVue />
            </div>
        </AppLayout>
    </template>
