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
import { computed, ref } from '@vue/runtime-core';
import { Link } from '@inertiajs/inertia-vue3';
import { Inertia } from '@inertiajs/inertia';

const props = defineProps({
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

const openDeleteModal = () => showDeleteModal.value = true;
const closeDeleteModal = () => showDeleteModal.value = false;

const columns = [
    'Name',
    'Role',
    'Phone',
    'Direct Superior',
];

const breadcrumbs = [
    { label: 'User Management', url: null },
];

const onSearch = (keyword) => {
    Inertia.get(route("users.index"), { search: keyword }, { preserveState: true, preserveScroll: true });
}

const deleteSelected = () => {
    Inertia.delete(route('users.destroy-bulk', selected.value), {
        preserveScroll: true,
        preserveState: true,
        onSuccess: () => {
            closeDeleteModal();
            resetSelected();
        },
    });
}

</script>

<template>
    <AppLayout title="User Management">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                User Management
            </h2>
            <Breadcrumb :links="breadcrumbs" />
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                    <Table :columns="columns" :checkbox="['superadmin', 'supervisor'].includes($page.props.user.role)" :action="['superadmin', 'supervisor'].includes($page.props.user.role)" @selectAllToggle="selectAll" :checkboxState="isSelectedAll">
                        <template #header>
                            <div class="flex items-center justify-between">
                                <TableSearch placeholder="Name or Salary Number" :search="search" @search="onSearch" />
                                <div class="flex flex-row space-x-2" v-if="['superadmin', 'supervisor'].includes($page.props.user.role)">
                                    <Link :href="route('users.create')">
                                        <Button>Create</Button>
                                    </Link>
                                    <SecondaryButton :disabled="selected.length == 0" @click="openDeleteModal">Delete</SecondaryButton>
                                </div>
                            </div>
                        </template>

                        <template #tbody>
                            <tr v-for="user in data.data" :key="user" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td class="w-4 p-4" v-if="['superadmin', 'supervisor'].includes($page.props.user.role)">
                                    <div class="flex items-center">
                                        <input
                                            :id="`checkbox-table-${user.id}`"
                                            :value="user.id"
                                            v-model="selected"
                                            type="checkbox"
                                            class="w-4 h-4 text-yellow-600 bg-gray-100 border-gray-300 rounded focus:ring-yellow-500 dark:focus:ring-yellow-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                        <label :for="`checkbox-table-${user.id}`" class="sr-only">checkbox</label>
                                    </div>
                                </td>
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                    {{ user.name }} <span class="text-gray-400" v-if="user.id == $page.props.user.id">(You)</span>
                                    <span class="text-xs block text-gray-500" v-text="user.salary_number"></span>
                                </th>
                                <td class="px-6 py-4 capitalize">{{ user.role.replace('_', ' ') }}</td>
                                <td class="px-6 py-4">{{ user.phone ?? '-' }}</td>
                                <td class="px-6 py-4 font-medium text-gray-900 dark:text-white">
                                    {{ user.superior?.name ?? '-' }} <span class="text-gray-400" v-if="user.superior?.id == $page.props.user.id">(You)</span>
                                    <span class="text-xs block text-gray-500" v-if="user.superior" v-text="user.superior?.salary_number"></span>
                                </td>
                                <td class="px-6 py-4 text-right" v-if="['superadmin', 'supervisor'].includes($page.props.user.role)">
                                    <Link class="font-medium text-yellow-600 dark:text-yellow-500 hover:underline" :href="route('users.edit', user.id)">
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
