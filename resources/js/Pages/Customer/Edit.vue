<script setup>
    import AppLayout from '@/Layouts/AppLayout.vue';
    import Breadcrumb from '@/Components/Breadcrumb.vue';
    import SectionBorder from '@/Components/SectionBorder.vue';
    import EditCustomerForm from './Partials/EditCustomerForm.vue';

    const props = defineProps({
        data: Object,
    });

    const breadcrumbs = [
        { label: 'Customer', url: route('customers.index') },
        { label: props.data.salary_number, url: null },
        { label: 'Edit', url: null },
    ];
    </script>

    <template>
        <AppLayout title="Edit Customer">
            <template #header>
                <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                    Customer
                </h2>
                <Breadcrumb :links="breadcrumbs" />
            </template>

            <div class="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8">
                <EditCustomerForm :user="$page.props.data" />
            </div>
        </AppLayout>
    </template>
