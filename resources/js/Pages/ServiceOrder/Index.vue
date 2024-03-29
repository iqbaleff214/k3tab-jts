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
import Checkbox from '@/Components/Checkbox.vue';
import { computed, onBeforeMount, ref } from '@vue/runtime-core';
import { Link, usePage } from '@inertiajs/inertia-vue3';
import { Inertia } from '@inertiajs/inertia';

const props = defineProps({
    data: Object,
    search: String,
    status: String,
});

const selected = ref([]);
const isSelectedAll = computed(() => selected.value.length == props.data.data.length);

const showTimeline = ref(true);

const selectedServiceOrder = ref({});
const showDetailModal = ref(false);

const openDetailModal = (so) => {
    showDetailModal.value = true;
    selectedServiceOrder.value = so;
}
const closeDetailModal = () => showDetailModal.value = false;

const resetSelected = () => selected.value.length = 0;
const selectAll = (isChecked) => {
    if (isChecked) {
        selected.value = props.data.data.map(item => item.id);
    } else {
        resetSelected();
    }
}

const showDoneModal = ref(false);
const showDeleteModal = ref(false);

const openDoneModal = () => showDoneModal.value = true;
const closeDoneModal = () => showDoneModal.value = false;
const openDeleteModal = () => showDeleteModal.value = true;
const closeDeleteModal = () => showDeleteModal.value = false;

const columns = ref([
    'Service Order No',
    'Customer',
    'Serviceman',
    'Status',
    'Approved Progress',
]);

const statuses = [
    { name: 'To Do', value: 'todo' },
    { name: 'In Progress', value: 'in_progress' },
    { name: 'Done', value: 'done' },
];

const breadcrumbs = [
    { label: 'Service Order', url: null },
];

const imageExt = /(\.jpg|\.jpeg|\.png|\.gif)$/i;

onBeforeMount(() => {
    const user = usePage().props.value.user;
    if (['customer'].includes(user.role)) {
        columns.value = [
            'Service Order No',
            'Serial Number',
            'Equipment Number',
            'Sales Model',
            'Status',
            'Progress',
        ];
    }
});

const onSearch = (keyword) => {
    Inertia.get(route("service-orders.index"), { search: keyword, status: props.status }, { preserveState: true, preserveScroll: true });
}

const onSelectStatus = (e) => {
    Inertia.get(route("service-orders.index"), { search: props.search, status:e.target.value }, { preserveState: true, preserveScroll: true });
}

const deleteSelected = () => {
    Inertia.delete(route('service-orders.destroy', selected.value), {
        preserveScroll: true,
        preserveState: true,
        onSuccess: () => {
            closeDeleteModal();
            resetSelected();
        },
    });
}

const markAsDoneSelected = () => {
    Inertia.put(route('service-orders.done'), { data: selected.value }, {
        preserveScroll: true,
        preserveState: true,
        onSuccess: () => {
            closeDoneModal();
            resetSelected();
        },
    })
}
</script>

<template>
    <AppLayout title="Service Order">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Service Order
            </h2>
            <Breadcrumb :links="breadcrumbs" />
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                    <Table :columns="columns" :checkbox="['supervisor'].includes($page.props.user.role)" :action="['foreman'].includes($page.props.user.role)" @selectAllToggle="selectAll" :checkboxState="isSelectedAll">
                        <template #header>
                            <div class="flex items-center justify-between">
                                <div class="flex flex-row space-x2">
                                    <TableSearch placeholder="SO No or Customer" :search="search" @search="onSearch" />
                                    <select v-model="status" @change="onSelectStatus($event)" id="group" class="border-gray-300 mt-1 block w-3/4 hidden md:block text-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm">
                                        <option value="">All Status</option>
                                        <option v-for="status in statuses" :key="status.value" :value="status.value">{{ status.name }}</option>
                                    </select>
                                </div>
                                <div class="flex flex-row space-x-2" v-if="['supervisor'].includes($page.props.user.role)">
                                    <Link :href="route('service-orders.create')">
                                        <Button>Create</Button>
                                    </Link>
                                    <SecondaryButton :disabled="selected.length == 0" v-if="['supervisor', 'foreman', 'serviceman'].includes($page.props.user.role)" @click="openDoneModal">Mark As Done</SecondaryButton>
                                </div>
                            </div>
                        </template>

                        <template #tbody>
                            <tr v-for="so in data.data" :key="so" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td class="w-4 p-4" v-if="['supervisor'].includes($page.props.user.role)">
                                    <div class="flex items-center">
                                        <input
                                            :id="`checkbox-table-${so.id}`"
                                            :value="so.id"
                                            v-model="selected"
                                            type="checkbox"
                                            class="w-4 h-4 text-yellow-600 bg-gray-100 border-gray-300 rounded focus:ring-yellow-500 dark:focus:ring-yellow-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                        <label :for="`checkbox-table-${so.id}`" class="sr-only">checkbox</label>
                                    </div>
                                </td>
                                <th scope="row" class="px-6 py-4 font-medium text-orange-500 cursor-pointer dark:text-white whitespace-nowrap">
                                    <span v-text="so.service_order_no" @click="openDetailModal(so)"></span>
                                </th>
                                <td class="px-6 py-4" v-if="['customer'].includes($page.props.user.role)">{{ so.serial_number ?? '-' }}</td>
                                <td class="px-6 py-4" v-else>{{ so.customer_name ?? '-' }}</td>

                                <td class="px-6 py-4" v-if="['customer'].includes($page.props.user.role)">{{ so.operation ?? '-' }}</td>

                                <td class="px-6 py-4" v-if="['customer'].includes($page.props.user.role)">{{ so.model ?? '-' }}</td>
                                <td class="px-6 py-4" v-else>{{ so.serviceman ? so.serviceman?.name : '-' }}</td>

                                <td class="px-6 py-4">{{ so.service_order_status }}</td>
                                <td class="px-6 py-4" v-if="['customer', 'sales_support'].includes($page.props.user.role)">
                                    <div class="flex justify-between mb-1">
                                        <span class="text-xs font-medium text-gray-700 dark:text-white">Last updated: {{ new Date(so.updated_at).toLocaleString('id-ID') }}</span>
                                        <span class="text-sm font-medium text-gray-700 dark:text-white">{{ `${so.progress_percentage}%` }}</span>
                                    </div>
                                    <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                        <div
                                            :class="{
                                                'bg-red-500': so.progress_percentage < 20 && so.progress_percentage >= 0,
                                                'bg-orange-500': so.progress_percentage < 60 && so.progress_percentage >= 20,
                                                'bg-yellow-400': so.progress_percentage < 80 && so.progress_percentage >= 60,
                                                'bg-green-500': so.progress_percentage < 100 && so.progress_percentage >= 80,
                                            }"
                                            class="h-2.5 rounded-full shim-green" :style="{width: `${so.progress_percentage}%`}"></div>
                                    </div>
                                </td>
                                <td class="px-6 py-4" v-else-if="$page.props.user.role == 'supervisor'">{{ `${so.control_card_accepted?.length}/${so.control_card_approved?.length}` }}</td>
                                <td class="px-6 py-4" v-else>{{ `${so.control_card_accepted?.length}/${so.control_card?.length}` }}</td>
                                <td class="px-6 py-4 text-right" v-if="['foreman'].includes($page.props.user.role)">
                                    <Link class="font-medium text-yellow-600 dark:text-yellow-500 hover:underline" :href="route('service-orders.edit', so.id)">
                                        Edit
                                    </Link>
                                </td>
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

        <!-- Detail confirmation modal -->
        <DialogModal :show="showDetailModal" @close="closeDetailModal">
            <template #title>
                <div class="flex items-center justify-between">
                    <div>
                        Detail Service Order
                    </div>
                    <label class="flex items-center">
                        <Checkbox v-model:checked="showTimeline" name="timeline" />
                        <span class="ml-2 text-sm text-gray-600">Work Progress Only</span>
                    </label>
                </div>
            </template>

            <template #content>
                <div v-if="showTimeline">
                    <ol class="relative border-l border-gray-200 dark:border-gray-700" v-if="['customer', 'sales_support'].includes($page.props.user.role)">
                        <li class="mb-10 ml-4" v-for="timeline in selectedServiceOrder?.control_card_accepted" :key="timeline.id">
                            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{{ new Date(timeline.created_at).toLocaleString('id-ID') }}</time>
                            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{{ timeline?.special_note }}</h3>
                            <p class="text-base font-normal text-gray-500 dark:text-gray-400">{{ timeline?.comment }}</p>
                            <p class="text-xs font-normal text-gray-400 dark:text-gray-400">Reported by: {{ timeline?.reporter?.name }}</p>
                            <div v-if="timeline.attachments?.length">
                                <img :src="timeline.attachments[0].path" alt="Attachment" class="w-full my-2 rounded-lg" v-if="imageExt.exec(timeline.attachments[0].path)">
                                <a :href="timeline.attachments[0].path" class="text-xs text-orange-500" target="_blank" v-else>Open Attachment in New Tab</a>
                            </div>
                        </li>
                    </ol>
                    <ol class="relative border-l border-gray-200 dark:border-gray-700" v-else>
                        <li class="mb-10 ml-4" v-for="timeline in selectedServiceOrder?.control_card" :key="timeline.id">
                            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{{ new Date(timeline.created_at).toLocaleString('id-ID') }}</time>
                            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{{ timeline?.special_note }}</h3>
                            <p class="text-base font-normal text-gray-500 dark:text-gray-400">{{ timeline?.comment }}</p>
                            <p class="text-xs font-normal text-gray-400 dark:text-gray-400">Reported by: {{ timeline?.reporter?.name }}</p>
                            <div v-if="timeline.attachments?.length">
                                <img :src="timeline.attachments[0].path" alt="Attachment" class="w-full my-2 rounded-lg" v-if="imageExt.exec(timeline.attachments[0].path)">
                                <a :href="timeline.attachments[0].path" class="text-xs text-orange-500" target="_blank" v-else>Open Attachment in New Tab</a>
                            </div>
                            <p>
                                <span class="bg-gray-100 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-200 dark:text-gray-900" :class="{
                                    'bg-yellow-100 text-yellow-800 dark:bg-yellow-200 dark:text-yellow-900': timeline?.is_approved
                                }">Approved by Foreman</span>
                                <span class="bg-gray-100 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-200 dark:text-gray-900" :class="{
                                    'bg-yellow-100 text-yellow-800 dark:bg-yellow-200 dark:text-yellow-900': timeline?.is_accepted
                                }">Approved by Supervisor</span>
                            </p>
                        </li>
                    </ol>
                </div>
                <table class="w-full overflow-x-scroll text-sm text-left mt-4 text-gray-500 dark:text-gray-400" v-else>
                    <tbody>
                        <tr class="hover:bg-gray-50" v-if="$page.props.user.role != 'customer'">
                            <th class="capitalize px-2 py-6 font-bold" width="25%">foreman</th>
                            <td width="25%">{{ selectedServiceOrder?.foreman?.name ?? '-' }}</td>
                            <th class="capitalize px-2 py-6 font-bold" width="25%">customer name</th>
                            <td width="25%">
                                {{ selectedServiceOrder?.customer_name ?? '-' }}
                                <div v-text="selectedServiceOrder?.customer_no" class="text-xs"></div>
                            </td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <th class="capitalize px-2 py-6 font-bold" width="25%">service order</th>
                            <td width="25%">{{ selectedServiceOrder?.service_order_no ?? '-' }}</td>
                            <th class="capitalize px-2 py-6 font-bold" width="25%">job description</th>
                            <td width="25%">{{ selectedServiceOrder?.job_description ?? '-' }}</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <th class="capitalize px-2 py-6 font-bold">sales model</th>
                            <td>{{ selectedServiceOrder?.model ?? '-' }}</td>
                            <th class="capitalize px-2 py-6 font-bold">serial number</th>
                            <td>{{ selectedServiceOrder?.serial_number ?? '-' }}</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <th class="capitalize px-2 py-6 font-bold">arr. no</th>
                            <td>{{ selectedServiceOrder?.arrg_no ?? '-' }}</td>
                            <th class="capitalize px-2 py-6 font-bold">SMU</th>
                            <td>{{ selectedServiceOrder?.smu ?? '-' }}</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <th class="capitalize px-2 py-6 font-bold">equipment number</th>
                            <td>{{ selectedServiceOrder?.operation ?? '-' }}</td>
                            <th class="capitalize px-2 py-6 font-bold">component name</th>
                            <td>{{ selectedServiceOrder?.component_code ?? '-' }}</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <th class="capitalize px-2 py-6 font-bold">segment</th>
                            <td>{{ selectedServiceOrder?.segment ?? '-' }}</td>
                            <th class="capitalize px-2 py-6 font-bold">warranty?</th>
                            <td>{{ selectedServiceOrder?.warranty ? 'Yes' : 'No' }}</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <th class="capitalize px-2 py-6 font-bold">job code</th>
                            <td colspan="3">{{ selectedServiceOrder?.job_code ?? '-' }}</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <th class="capitalize px-2 py-6 font-bold">PIP/PSP</th>
                            <td colspan="3">{{ selectedServiceOrder?.pip_psp ?? '-' }}</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <th class="capitalize px-2 py-6 font-bold">service team</th>
                            <td colspan="3">{{ selectedServiceOrder?.service_team ?? '-' }}</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <th class="capitalize px-2 py-6 font-bold">section</th>
                            <td colspan="3">{{ selectedServiceOrder?.business_area ?? '-' }}</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <th class="capitalize px-2 py-6 font-bold">std hours</th>
                            <td colspan="3">{{ selectedServiceOrder?.std_hours ?? '0' }} hours</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <th class="capitalize px-2 py-6 font-bold">date received</th>
                            <td colspan="3">{{ selectedServiceOrder?.date_required ?? '-' }}</td>
                        </tr>
                        <tr class="hover:bg-gray-50" v-if="$page.props.user.role != 'customer'">
                            <th class="capitalize px-2 py-6 font-bold">servicemen</th>
                            <td colspan="3">
                                <ul class="w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                    <li v-for="serviceman in selectedServiceOrder.servicemen" :key="serviceman.id" class="py-2 px-4 w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
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
                <Link :href="route('control-cards.index', selectedServiceOrder.id)">
                    <Button class="ml-3">
                        Control Card
                    </Button>
                </Link>
            </template>
        </DialogModal>

        <!-- Done confirmation modal -->
        <DialogModal :show="showDoneModal" @close="closeDoneModal">
            <template #title>
                Mark as Done
            </template>

            <template #content>
                Are you sure you want to mark as done the selected service orders? You selected {{ selected.length }} service orders.
            </template>

            <template #footer>
                <SecondaryButton @click="closeDoneModal">
                    Cancel
                </SecondaryButton>

                <DangerButton
                    class="ml-3"
                    @click="markAsDoneSelected">
                    Mark As Done
                </DangerButton>
            </template>
        </DialogModal>

        <!-- Delete confirmation modal -->
        <DialogModal :show="showDeleteModal" @close="closeDeleteModal">
            <template #title>
                Delete Account
            </template>

            <template #content>
                Are you sure you want to delete the selected accounts? Once the accounts are deleted, all of their resources and data will be permanently deleted. You selected {{ selected.length }} accounts.
            </template>

            <template #footer>
                <SecondaryButton @click="closeDeleteModal">
                    Cancel
                </SecondaryButton>

                <DangerButton
                    class="ml-3"
                    @click="deleteSelected">
                    Delete Accounts
                </DangerButton>
            </template>
        </DialogModal>
    </AppLayout>
</template>
