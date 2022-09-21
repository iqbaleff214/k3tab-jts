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

const columns = [
    'Date',
    'Note',
    'Serviceman',
];

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
    if (['serviceman', 'foreman'].includes(user.role)) {
        columns.push('Foreman Approved?');
        columns.push('Supervisor Approved?');
    } else if(['supervisor'].includes(user.role)) {
        columns.push('Approved?');
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
                                <td class="px-6 py-4">{{ card.special_note ?? '-' }}</td>
                                <td class="px-6 py-4">{{ card.reporter?.name ?? '-' }}</td>
                                <td class="px-6 py-4" v-if="['serviceman', 'foreman'].includes($page.props.user.role)">{{ card.is_approved ? 'Yes' : 'No' }}</td>
                                <td class="px-6 py-4" v-if="['serviceman', 'foreman', 'supervisor'].includes($page.props.user.role)">{{ card.is_accepted ? 'Yes' : 'No' }}</td>
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
                        <tr class="hover:bg-gray-50">
                            <th class="capitalize px-6 py-4 font-medium">service order no</th>
                            <td>{{ so?.service_order_no ?? '-' }}</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <th class="capitalize px-6 py-4 font-medium">status</th>
                            <td>{{ so?.service_order_status ?? '-' }}</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <th class="capitalize px-6 py-4 font-medium">supervisor</th>
                            <td>{{ so?.supervisor?.name ?? '-' }}</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <th class="capitalize px-6 py-4 font-medium">foreman PIC</th>
                            <td>{{ so?.foreman?.name ?? '-' }}</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <th class="capitalize px-6 py-4 font-medium">serviceman</th>
                            <td>{{ so?.serviceman?.name ?? '-' }}</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <th class="capitalize px-6 py-4 font-medium">segment</th>
                            <td>{{ so?.segment ?? '-' }}</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <th class="capitalize px-6 py-4 font-medium">operation</th>
                            <td>{{ so?.operation ?? '-' }}</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <th class="capitalize px-6 py-4 font-medium">job code</th>
                            <td>{{ so?.job_code ?? '-' }}</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <th class="capitalize px-6 py-4 font-medium">component code</th>
                            <td>{{ so?.component_code ?? '-' }}</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <th class="capitalize px-6 py-4 font-medium">smu</th>
                            <td>{{ so?.smu ?? '-' }}</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <th class="capitalize px-6 py-4 font-medium">warranty?</th>
                            <td>{{ so?.warranty ? 'Yes' : 'No' }}</td>
                        </tr>
                        <tr class="hover:bg-gray-50" v-if="so?.warranty">
                            <th class="capitalize px-6 py-4 font-medium">warranty</th>
                            <td>{{ so?.warranty_text ?? '-' }}</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <th class="capitalize px-6 py-4 font-medium">pip/psp</th>
                            <td>{{ so?.pip_psp ?? '-' }}</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <th class="capitalize px-6 py-4 font-medium">job control</th>
                            <td>{{ so?.job_control ?? '-' }}</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <th class="capitalize px-6 py-4 font-medium">business area</th>
                            <td>{{ so?.business_area ?? '-' }}</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <th class="capitalize px-6 py-4 font-medium">customer name</th>
                            <td>{{ so?.customer_name ?? '-' }}</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <th class="capitalize px-6 py-4 font-medium">service team</th>
                            <td>{{ so?.service_team ?? '-' }}</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <th class="capitalize px-6 py-4 font-medium">group number</th>
                            <td>{{ so?.group_number ?? '-' }}</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <th class="capitalize px-6 py-4 font-medium">customer no</th>
                            <td>{{ so?.customer_no ?? '-' }}</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <th class="capitalize px-6 py-4 font-medium">make</th>
                            <td>{{ so?.make ?? '-' }}</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <th class="capitalize px-6 py-4 font-medium">model</th>
                            <td>{{ so?.model ?? '-' }}</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <th class="capitalize px-6 py-4 font-medium">serial number</th>
                            <td>{{ so?.serial_number ?? '-' }}</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <th class="capitalize px-6 py-4 font-medium">arrg no</th>
                            <td>{{ so?.arrg_no ?? '-' }}</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <th class="capitalize px-6 py-4 font-medium">std hours</th>
                            <td>{{ so?.std_hours ?? '0' }} hours</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <th class="capitalize px-6 py-4 font-medium">job description</th>
                            <td>{{ so?.job_description ?? '-' }}</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <th class="capitalize px-6 py-4 font-medium">labor hours</th>
                            <td>{{ so?.labor_hours ?? '0' }} hours</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <th class="capitalize px-6 py-4 font-medium">date sent</th>
                            <td>{{ so?.date_sent ?? '-' }}</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <th class="capitalize px-6 py-4 font-medium">date required</th>
                            <td>{{ so?.date_required ?? '-' }}</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <th class="capitalize px-6 py-4 font-medium">date returned</th>
                            <td>{{ so?.date_returned ?? '-' }}</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <th class="capitalize px-6 py-4 font-medium">date received_back</th>
                            <td>{{ so?.date_received_back ?? '-' }}</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <th class="capitalize px-6 py-4 font-medium">date segment closed</th>
                            <td>{{ so?.date_segment_closed ?? '-' }}</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <th class="capitalize px-6 py-4 font-medium">receive by</th>
                            <td>{{ so?.receive_by ?? '-' }}</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <th class="capitalize px-6 py-4 font-medium">surplus part returned</th>
                            <td>{{ so?.surplus_part_returned ? 'Yes' : 'No' }}</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <th class="capitalize px-6 py-4 font-medium">sims completed</th>
                            <td>{{ so?.sims_completed ? 'Yes' : 'No' }}</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <th class="capitalize px-6 py-4 font-medium">note</th>
                            <td>{{ so?.note ?? '-' }}</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <th class="capitalize px-6 py-4 font-medium">deliver to</th>
                            <td>{{ so?.deliver_to ?? '-' }}</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <th class="capitalize px-6 py-4 font-medium">return to</th>
                            <td>{{ so?.return_to ?? '-' }}</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <th class="capitalize px-6 py-4 font-medium">signed 1?</th>
                            <td>{{ so?.signed_1 ? 'Yes' : 'No' }}</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <th class="capitalize px-6 py-4 font-medium">signed 2?</th>
                            <td>{{ so?.signed_2 ? 'Yes' : 'No' }}</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <th class="capitalize px-6 py-4 font-medium">servicemen</th>
                            <td>
                                <ul>
                                    <li v-for="serviceman in so.servicemen" :key="serviceman.id">
                                        {{ serviceman.name }}
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
