<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import Breadcrumb from '@/Components/Breadcrumb.vue';
import Button from '@/Components/Button.vue';
import SecondaryButton from '@/Components/SecondaryButton.vue';
import DangerButton from '@/Components/DangerButton.vue';
import Table from '@/Components/Table.vue';
import TableSearch from '@/Components/TableSearch.vue';
import Pagination from '@/Components/Pagination.vue';
import DialogModal from '@/Components/DialogModal.vue';
import { computed, onBeforeMount, ref } from '@vue/runtime-core';
import { Link, usePage } from '@inertiajs/inertia-vue3';
import { Inertia } from '@inertiajs/inertia';

const props = defineProps({
    so: Object,
    data: Object,
    search: String,
});

const selected = ref([]);
const isSelectedAll = computed(() => selected.value.length == props.data.data.length);

const resetSelected = () => selected.value.length = 0;
const selectAll = (isChecked) => {
    if (isChecked) {
        selected.value = props.data.data.map(item => item.id);
    } else {
        resetSelected();
    }
}

const showDeleteModal = ref(false);
const showStatusModal = ref(false);
const showDetailModal = ref(false);

const openDetailModal = () => showDetailModal.value = true;
const closeDetailModal = () => showDetailModal.value = false;
const openDeleteModal = () => showDeleteModal.value = true;
const closeDeleteModal = () => showDeleteModal.value = false;
const openStatusModal = () => showStatusModal.value = true;
const closeStatusModal = () => showStatusModal.value = false;

const columns = ref([
    'Date',
    'Note',
    'Reporter',
    'Comment',
]);

const imageExt = /(\.jpg|\.jpeg|\.png|\.gif)$/i;

const breadcrumbs = [
    { label: 'Service Order', url: route('service-orders.index') },
    { label: props.so?.service_order_no, url: null },
    { label: 'Control Card', url: null },
];

const onSearch = (keyword) => {
    Inertia.get(route("control-cards.index", props.so.id), { search: keyword }, { preserveState: true, preserveScroll: true });
}

const deleteSelected = () => {
    Inertia.delete(route('control-cards.destroy', { service_order: props.so.id, control_card: selected.value, data: selected.value }), {
        preserveScroll: true,
        preserveState: true,
        onSuccess: () => {
            closeDeleteModal();
            resetSelected();
        },
    });
}

const approveSelected = () => {
    Inertia.put(route('control-cards.approve'), { data: selected.value }, {
        preserveScroll: true,
        preserveState: true,
        onSuccess: () => {
            closeStatusModal();
            resetSelected();
        },
    })
}

onBeforeMount(() => {
    const user = usePage().props.value.user;
    if (['serviceman', 'foreman', 'supervisor'].includes(user.role)) {
        columns.value.push('Approval');
    }
});

</script>

<template>
    <AppLayout title="Control Card">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Control Card
            </h2>
            <Breadcrumb :links="breadcrumbs" />
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                    <Table :columns="columns" :checkbox="['foreman', 'supervisor', 'serviceman'].includes($page.props.user.role)" :action="[].includes($page.props.user.role)" @selectAllToggle="selectAll" :checkboxState="isSelectedAll">
                        <template #header>
                            <div class="flex items-center justify-between">
                                <TableSearch placeholder="Note" :search="search" @search="onSearch" />
                                <div class="flex flex-row space-x-2">
                                    <SecondaryButton @click="openDetailModal">Detail</SecondaryButton>
                                    <Link :href="route('control-cards.create', so.id)" v-if="['serviceman'].includes($page.props.user.role) && $page.props.so.serviceman_id == $page.props.user.id && $page.props.so.status != 'done'">
                                        <Button>Create</Button>
                                    </Link>
                                    <SecondaryButton v-if="['foreman', 'supervisor', 'serviceman'].includes($page.props.user.role)" :disabled="selected.length == 0" @click="openDeleteModal">Delete</SecondaryButton>
                                    <SecondaryButton v-if="['foreman', 'supervisor'].includes($page.props.user.role)" :disabled="selected.length == 0" @click="openStatusModal">Approve</SecondaryButton>
                                </div>
                            </div>
                        </template>

                        <template #tbody>
                            <tr v-for="card in data.data" :key="card" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td class="w-4 p-4" v-if="['foreman', 'supervisor', 'serviceman'].includes($page.props.user.role)">
                                    <div class="flex items-center">
                                        <input
                                            :id="`checkbox-table-${card.id}`"
                                            :value="card.id"
                                            v-model="selected"
                                            type="checkbox"
                                            class="w-4 h-4 text-yellow-600 bg-gray-100 border-gray-300 rounded focus:ring-yellow-500 dark:focus:ring-yellow-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                        <label :for="`checkbox-table-${card.id}`" class="sr-only">checkbox</label>
                                    </div>
                                </td>
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                    {{ new Date(card.created_at).toLocaleString('id-ID') }}
                                </th>
                                <td class="px-6 py-4">
                                    {{ card.special_note ?? '-' }}
                                    <div v-if="card.attachments.length">
                                        <a :href="card.attachments[0].path" class="text-orange-500 text-xs mt-2" target="_blank">Open Attachment</a>
                                    </div>
                                </td>
                                <td class="px-6 py-4">{{ card.reporter?.name ?? '-' }}</td>
                                <td class="px-6 py-4">{{ card.comment ?? '-' }}</td>
                                <td class="px-6 py-4" v-if="['serviceman', 'foreman', 'supervisor'].includes($page.props.user.role)">
                                    <span class="bg-gray-100 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-200 dark:text-gray-900" :class="{
                                        'bg-yellow-100 text-yellow-800 dark:bg-yellow-200 dark:text-yellow-900': card?.is_approved
                                    }" v-if="$page.props.user.role != 'supervisor'">Foreman</span>
                                    <span class="bg-gray-100 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-200 dark:text-gray-900" :class="{
                                        'bg-yellow-100 text-yellow-800 dark:bg-yellow-200 dark:text-yellow-900': card?.is_accepted
                                    }">Supervisor</span>
                                </td>
                                <!-- <td class="px-6 py-4 text-right" v-if="['serviceman'].includes($page.props.user.role) && card.serviceman_id == $page.props.user.id">
                                    <Link class="font-medium text-yellow-600 dark:text-yellow-500 hover:underline" :href="route('control-cards.edit', { service_order: so.id, control_card: card.id })">
                                        Edit
                                    </Link>
                                </td> -->
                            </tr>
                        </template>

                        <template #footer>
                            <Pagination :links="data.links" :next="data.next_page_url" :prev="data.prev_page_url">
                            </Pagination>
                        </template>
                    </Table>
                </div>
            </div>
        </div>

        <!-- Status confirmation modal -->
        <DialogModal :show="showStatusModal" @close="closeStatusModal">
            <template #title>
                Approve Note
            </template>

            <template #content>
                Are you sure you want to approve the selected notes? You selected {{ selected.length }} notes.
            </template>

            <template #footer>
                <SecondaryButton @click="closeStatusModal">
                    Cancel
                </SecondaryButton>

                <DangerButton
                    class="ml-3"
                    @click="approveSelected">
                    Approve
                </DangerButton>
            </template>
        </DialogModal>

        <!-- Detail confirmation modal -->
        <DialogModal :show="showDetailModal" @close="closeDetailModal">
            <template #title>
                Detail Service Order
            </template>

            <template #content>
                <table class="w-full overflow-x-scroll text-sm text-left mt-4 text-gray-500 dark:text-gray-400">
                    <tbody>
                        <tr class="hover:bg-gray-50" v-if="$page.props.user.role != 'customer'">
                            <th class="capitalize px-2 py-6 font-bold" width="25%">foreman</th>
                            <td width="25%">{{ so?.foreman?.name ?? '-' }}</td>
                            <th class="capitalize px-2 py-6 font-bold" width="25%">customer name</th>
                            <td width="25%">
                                {{ so?.customer_name ?? '-' }}
                                <div v-text="so?.customer_no" class="text-xs"></div>
                            </td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <th class="capitalize px-2 py-6 font-bold" width="25%">service order</th>
                            <td width="25%">{{ so?.service_order_no ?? '-' }}</td>
                            <th class="capitalize px-2 py-6 font-bold" width="25%">job description</th>
                            <td width="25%">{{ so?.job_description ?? '-' }}</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <th class="capitalize px-2 py-6 font-bold">sales model</th>
                            <td>{{ so?.model ?? '-' }}</td>
                            <th class="capitalize px-2 py-6 font-bold">serial number</th>
                            <td>{{ so?.serial_number ?? '-' }}</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <th class="capitalize px-2 py-6 font-bold">arr. no</th>
                            <td>{{ so?.arrg_no ?? '-' }}</td>
                            <th class="capitalize px-2 py-6 font-bold">SMU</th>
                            <td>{{ so?.smu ?? '-' }}</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <th class="capitalize px-2 py-6 font-bold">equipment number</th>
                            <td>{{ so?.operation ?? '-' }}</td>
                            <th class="capitalize px-2 py-6 font-bold">component name</th>
                            <td>{{ so?.component_code ?? '-' }}</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <th class="capitalize px-2 py-6 font-bold">segment</th>
                            <td>{{ so?.segment ?? '-' }}</td>
                            <th class="capitalize px-2 py-6 font-bold">warranty?</th>
                            <td>{{ so?.warranty ? 'Yes' : 'No' }}</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <th class="capitalize px-2 py-6 font-bold">job code</th>
                            <td colspan="3">{{ so?.job_code ?? '-' }}</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <th class="capitalize px-2 py-6 font-bold">PIP/PSP</th>
                            <td colspan="3">{{ so?.pip_psp ?? '-' }}</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <th class="capitalize px-2 py-6 font-bold">service team</th>
                            <td colspan="3">{{ so?.service_team ?? '-' }}</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <th class="capitalize px-2 py-6 font-bold">section</th>
                            <td colspan="3">{{ so?.business_area ?? '-' }}</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <th class="capitalize px-2 py-6 font-bold">std hours</th>
                            <td colspan="3">{{ so?.std_hours ?? '0' }} hours</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <th class="capitalize px-2 py-6 font-bold">date received</th>
                            <td colspan="3">{{ so?.date_required ?? '-' }}</td>
                        </tr>
                        <tr class="hover:bg-gray-50" v-if="$page.props.user.role != 'customer'">
                            <th class="capitalize px-2 py-6 font-bold">servicemen</th>
                            <td colspan="3">
                                <ul class="w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                    <li v-for="serviceman in so.servicemen" :key="serviceman.id" class="py-2 px-4 w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
                                        <div class="flex items-center justify-between">
                                            <div>
                                                <span v-text="serviceman.salary_number" class="mr-4 font-semibold text-orange-500"></span> {{ serviceman.name }}
                                            </div>
                                            <span class="text-gray-500 text-xs" v-if="serviceman.servicemen?.created_at">{{ new Date(serviceman.servicemen?.created_at).toLocaleString('id-ID') }}</span>
                                        </div>
                                    </li>
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </template>

            <template #footer>
                <SecondaryButton @click="closeDetailModal">
                    Close
                </SecondaryButton>
            </template>
        </DialogModal>

        <!-- Delete confirmation modal -->
        <DialogModal :show="showDeleteModal" @close="closeDeleteModal">
            <template #title>
                Delete Note
            </template>

            <template #content>
                Are you sure you want to delete the selected notes? Once the notes are deleted, all of their resources and data will be permanently deleted. You selected {{ selected.length }} notes.
            </template>

            <template #footer>
                <SecondaryButton @click="closeDeleteModal">
                    Cancel
                </SecondaryButton>

                <DangerButton
                    class="ml-3"
                    @click="deleteSelected">
                    Delete Notes
                </DangerButton>
            </template>
        </DialogModal>
    </AppLayout>
</template>
