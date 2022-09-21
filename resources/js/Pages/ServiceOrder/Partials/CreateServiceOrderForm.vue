<script setup>
import { useForm, usePage } from '@inertiajs/inertia-vue3';
import ActionMessage from '@/Components/ActionMessage.vue';
import Button from '@/Components/Button.vue';
import FormSection from '@/Components/FormSection.vue';
import Input from '@/Components/Input.vue';
import InputSelect from '@/Components/InputSelect.vue';
import InputError from '@/Components/InputError.vue';
import Checkbox from '@/Components/Checkbox.vue';
import Label from '@/Components/Label.vue';
import { ref } from '@vue/reactivity';

const selectedCustomer = ref(null);

const form = useForm({
    id: null,
    segment: null,
    operation: null,
    job_code: null,
    component_code: null,
    smu: null,
    warranty: false,
    warranty_text: null,
    pip_psp: null,
    job_control: null,
    business_area: null,
    customer_name: null,
    service_team: null,
    group_number: null,
    customer_no: null,
    make: null,
    model: null,
    serial_number: null,
    arrg_no: null,
    std_hours: 0,
    job_description: null,
    labor_hours: 0,
    date_sent: null,
    date_required: null,
    date_returned: null,
    date_received_back: null,
    date_segment_closed: null,
    receive_by: null,
    surplus_part_returned: false,
    sims_completed: false,
    note: null,
    deliver_to: null,
    return_to: null,
    signed_1: false,
    signed_2: false,
    status: 'todo',
    customer_id: null,
    supervisor_id: null,
    foreman_id: null,
    serviceman_id: null,
    new_customer: false,
});

const storeServiceOrder = () => {
    form.transform((data) => {
        return { ...data, customer_id: data.new_customer ? null : selectedCustomer.value?.id };
    }).post(route('service-orders.store'), {
        preserveScroll: true,
        onSuccess: () => form.reset(),
    });
};

const onSelectedCustomer = () => {
    form.customer_no = selectedCustomer.value?.salary_number;
    form.customer_name = selectedCustomer.value?.name;
};
</script>

<template>
    <FormSection @submitted="storeServiceOrder">
        <template #title>
            Create new Service Order
        </template>

        <template #description>
            Add new service order for your customer.
        </template>

        <template #form>

            <div class="col-span-6 sm:col-span-4">
                <Label for="id" value="Service Order Number" />
                <Input
                    id="id"
                    v-model="form.id"
                    type="text"
                    class="mt-1 block w-full"
                />
                <p class="text-xs mt-1 text-gray-500">will be generated automatically if empty.</p>
                <InputError :message="form.errors.id" class="mt-2" />
            </div>

            <div class="col-span-6 sm:col-span-4">
                <Label for="foreman_id" value="Foreman PIC*" class="capitalize" />
                <select v-model="form.foreman_id" id="foreman_id" class="border-gray-300 mt-1 block w-full focus:border-yellow-300 focus:ring focus:ring-yellow-200 focus:ring-opacity-50 rounded-md shadow-sm">
                    <option v-for="foreman in $page.props.foremen" :key="foreman.id" :value="foreman.id">{{ foreman.name + ' - ' + foreman.salary_number }}</option>
                </select>
                <InputError :message="form.errors.foreman_id" class="mt-2" />
            </div>

            <div class="col-span-6 sm:col-span-4">
                <Label for="segment" value="Segment*" />
                <Input
                    id="segment"
                    v-model="form.segment"
                    type="text"
                    class="mt-1 block w-full"
                />
                <InputError :message="form.errors.segment" class="mt-2" />
            </div>

            <div class="col-span-6 sm:col-span-4">
                <Label for="operation" value="operation" class="capitalize" />
                <Input
                    id="operation"
                    v-model="form.operation"
                    type="text"
                    class="mt-1 block w-full"
                />
                <InputError :message="form.errors.operation" class="mt-2" />
            </div>

            <div class="col-span-6 sm:col-span-4">
                <Label for="job_code" value="job code*" class="capitalize" />
                <Input
                    id="job_code"
                    v-model="form.job_code"
                    type="text"
                    class="mt-1 block w-full"
                />
                <InputError :message="form.errors.job_code" class="mt-2" />
            </div>

            <div class="col-span-6 sm:col-span-4">
                <Label for="component_code" value="component code" class="capitalize" />
                <Input
                    id="component_code"
                    v-model="form.component_code"
                    type="text"
                    class="mt-1 block w-full"
                />
                <InputError :message="form.errors.component_code" class="mt-2" />
            </div>

            <div class="col-span-6 sm:col-span-4">
                <Label for="smu" value="SMU" class="capitalize" />
                <Input
                    id="smu"
                    v-model="form.smu"
                    type="text"
                    class="mt-1 block w-full"
                />
                <InputError :message="form.errors.smu" class="mt-2" />
            </div>

            <div class="col-span-6 sm:col-span-4">
                <label class="flex items-center">
                    <Checkbox v-model:checked="form.warranty" name="warranty" />
                    <span class="ml-2 text-sm text-gray-600">Warranty?</span>
                </label>
                <InputError :message="form.errors.warranty" class="mt-2" />
            </div>

            <div class="col-span-6 sm:col-span-4" v-if="form.warranty">
                <Label for="warranty_text" value="Warranty" />
                <Input
                    id="warranty_text"
                    v-model="form.warranty_text"
                    type="text"
                    class="mt-1 block w-full"
                />
                <InputError :message="form.errors.warranty_text" class="mt-2" />
            </div>

            <div class="col-span-6 sm:col-span-4">
                <Label for="pip_psp" value="PIP/PSP" class="capitalize" />
                <Input
                    id="pip_psp"
                    v-model="form.pip_psp"
                    type="text"
                    class="mt-1 block w-full"
                />
                <InputError :message="form.errors.pip_psp" class="mt-2" />
            </div>

            <div class="col-span-6 sm:col-span-4">
                <Label for="job_control" value="Job Control" class="capitalize" />
                <Input
                    id="job_control"
                    v-model="form.job_control"
                    type="text"
                    class="mt-1 block w-full"
                />
                <InputError :message="form.errors.job_control" class="mt-2" />
            </div>

            <div class="col-span-6 sm:col-span-4">
                <Label for="business_area" value="Business Area" class="capitalize" />
                <Input
                    id="business_area"
                    v-model="form.business_area"
                    type="text"
                    class="mt-1 block w-full"
                />
                <InputError :message="form.errors.business_area" class="mt-2" />
            </div>

            <div class="col-span-6 sm:col-span-4">
                <label class="flex items-center">
                    <Checkbox v-model:checked="form.new_customer" />
                    <span class="ml-2 text-sm text-gray-600">New Customer?</span>
                </label>
            </div>

            <div class="col-span-6 sm:col-span-4" v-if="form.new_customer">
                <Label for="customer_no" value="Customer No*" />
                <Input
                    id="customer_no"
                    v-model="form.customer_no"
                    type="text"
                    class="mt-1 block w-full"
                />
                <InputError :message="form.errors.customer_no" class="mt-2" />
            </div>
            <div class="col-span-6 sm:col-span-4" v-else>
                <Label for="customer_no" value="Customer No*" class="capitalize" />
                <select v-model="selectedCustomer" @change="onSelectedCustomer" id="customer_no" class="border-gray-300 mt-1 block w-full focus:border-yellow-300 focus:ring focus:ring-yellow-200 focus:ring-opacity-50 rounded-md shadow-sm">
                    <option v-for="customer in $page.props.customers" :key="customer.id" :value="customer">{{ customer.name + ' - ' + customer.salary_number }}</option>
                </select>
                <InputError :message="form.errors.customer_no" class="mt-2" />
            </div>

            <div class="col-span-6 sm:col-span-4">
                <Label for="customer_name" value="Customer Name*" class="capitalize" />
                <Input
                    id="customer_name"
                    v-model="form.customer_name"
                    type="text"
                    :readonly="!form.new_customer"
                    :class="{'bg-gray-100': !form.new_customer}"
                    class="mt-1 block w-full"
                />
                <InputError :message="form.errors.customer_name" class="mt-2" />
            </div>

            <div class="col-span-6 sm:col-span-4">
                <Label for="service_team" value="Service Team*" class="capitalize" />
                <Input
                    id="service_team"
                    v-model="form.service_team"
                    type="text"
                    class="mt-1 block w-full"
                />
                <InputError :message="form.errors.service_team" class="mt-2" />
            </div>

            <div class="col-span-6 sm:col-span-4">
                <Label for="group_number" value="Group Number" class="capitalize" />
                <Input
                    id="group_number"
                    v-model="form.group_number"
                    type="text"
                    class="mt-1 block w-full"
                />
                <InputError :message="form.errors.group_number" class="mt-2" />
            </div>

            <div class="col-span-6 sm:col-span-4">
                <Label for="make" value="make" class="capitalize" />
                <Input
                    id="make"
                    v-model="form.make"
                    type="text"
                    class="mt-1 block w-full"
                />
                <InputError :message="form.errors.make" class="mt-2" />
            </div>

            <div class="col-span-6 sm:col-span-4">
                <Label for="model" value="model" class="capitalize" />
                <Input
                    id="model"
                    v-model="form.model"
                    type="text"
                    class="mt-1 block w-full"
                />
                <InputError :message="form.errors.model" class="mt-2" />
            </div>

            <div class="col-span-6 sm:col-span-4">
                <Label for="serial_number" value="serial number" class="capitalize" />
                <Input
                    id="serial_number"
                    v-model="form.serial_number"
                    type="text"
                    class="mt-1 block w-full"
                />
                <InputError :message="form.errors.serial_number" class="mt-2" />
            </div>

            <div class="col-span-6 sm:col-span-4">
                <Label for="arrg_no" value="ARRG. No" class="capitalize" />
                <Input
                    id="arrg_no"
                    v-model="form.arrg_no"
                    type="text"
                    class="mt-1 block w-full"
                />
                <InputError :message="form.errors.arrg_no" class="mt-2" />
            </div>

            <div class="col-span-6 sm:col-span-4">
                <Label for="std_hours" value="Std. Hours" class="capitalize" />
                <Input
                    id="std_hours"
                    v-model="form.std_hours"
                    type="number"
                    min="0"
                    class="mt-1 block w-full"
                />
                <InputError :message="form.errors.std_hours" class="mt-2" />
            </div>

            <div class="col-span-6 sm:col-span-4">
                <Label for="job_description" value="Job Description*" class="capitalize" />
                <Input
                    id="job_description"
                    v-model="form.job_description"
                    type="text"
                    class="mt-1 block w-full"
                />
                <InputError :message="form.errors.job_description" class="mt-2" />
            </div>

            <div class="col-span-6 sm:col-span-4">
                <Label for="labor_hours" value="Labor Hours" class="capitalize" />
                <Input
                    id="labor_hours"
                    v-model="form.labor_hours"
                    type="number"
                    min="0"
                    class="mt-1 block w-full"
                />
                <InputError :message="form.errors.labor_hours" class="mt-2" />
            </div>

            <div class="col-span-6 sm:col-span-4">
                <Label for="date_sent" value="date sent" class="capitalize" />
                <Input
                    id="date_sent"
                    v-model="form.date_sent"
                    type="date"
                    class="mt-1 block w-full"
                />
                <InputError :message="form.errors.date_sent" class="mt-2" />
            </div>

            <div class="col-span-6 sm:col-span-4">
                <Label for="date_required" value="date required" class="capitalize" />
                <Input
                    id="date_required"
                    v-model="form.date_required"
                    type="date"
                    class="mt-1 block w-full"
                />
                <InputError :message="form.errors.date_required" class="mt-2" />
            </div>

            <div class="col-span-6 sm:col-span-4">
                <Label for="date_returned" value="date returned" class="capitalize" />
                <Input
                    id="date_returned"
                    v-model="form.date_returned"
                    type="date"
                    class="mt-1 block w-full"
                />
                <InputError :message="form.errors.date_returned" class="mt-2" />
            </div>

            <div class="col-span-6 sm:col-span-4">
                <Label for="date_received_back" value="date received back" class="capitalize" />
                <Input
                    id="date_received_back"
                    v-model="form.date_received_back"
                    type="date"
                    class="mt-1 block w-full"
                />
                <InputError :message="form.errors.date_received_back" class="mt-2" />
            </div>

            <div class="col-span-6 sm:col-span-4">
                <Label for="date_segment_closed" value="date segment closed" class="capitalize" />
                <Input
                    id="date_segment_closed"
                    v-model="form.date_segment_closed"
                    type="date"
                    class="mt-1 block w-full"
                />
                <InputError :message="form.errors.date_segment_closed" class="mt-2" />
            </div>

            <div class="col-span-6 sm:col-span-4">
                <Label for="receive_by" value="receive by" class="capitalize" />
                <Input
                    id="receive_by"
                    v-model="form.receive_by"
                    type="text"
                    class="mt-1 block w-full"
                />
                <InputError :message="form.errors.receive_by" class="mt-2" />
            </div>

            <div class="col-span-6 sm:col-span-4">
                <label class="flex items-center">
                    <Checkbox v-model:checked="form.surplus_part_returned" name="surplus_part_returned" />
                    <span class="ml-2 text-sm text-gray-600">Surplus Part Returned?</span>
                </label>
                <InputError :message="form.errors.surplus_part_returned" class="mt-2" />
            </div>

            <div class="col-span-6 sm:col-span-4">
                <label class="flex items-center">
                    <Checkbox v-model:checked="form.sims_completed" name="sims_completed" />
                    <span class="ml-2 text-sm text-gray-600">SIMS Completed?</span>
                </label>
                <InputError :message="form.errors.sims_completed" class="mt-2" />
            </div>

            <div class="col-span-6 sm:col-span-4">
                <Label for="note" value="note" class="capitalize" />
                <Input
                    id="note"
                    v-model="form.note"
                    type="text"
                    class="mt-1 block w-full"
                />
                <InputError :message="form.errors.note" class="mt-2" />
            </div>

            <div class="col-span-6 sm:col-span-4">
                <Label for="deliver_to" value="deliver to" class="capitalize" />
                <Input
                    id="deliver_to"
                    v-model="form.deliver_to"
                    type="text"
                    class="mt-1 block w-full"
                />
                <InputError :message="form.errors.deliver_to" class="mt-2" />
            </div>

            <div class="col-span-6 sm:col-span-4">
                <Label for="return_to" value="return to" class="capitalize" />
                <Input
                    id="return_to"
                    v-model="form.return_to"
                    type="text"
                    class="mt-1 block w-full"
                />
                <InputError :message="form.errors.return_to" class="mt-2" />
            </div>

            <div class="col-span-6 sm:col-span-4">
                <label class="flex items-center">
                    <Checkbox v-model:checked="form.signed_1" name="signed_1" />
                    <span class="ml-2 text-sm text-gray-600">Signed?</span>
                </label>
                <InputError :message="form.errors.signed_1" class="mt-2" />
            </div>

            <div class="col-span-6 sm:col-span-4">
                <label class="flex items-center">
                    <Checkbox v-model:checked="form.signed_2" name="signed_2" />
                    <span class="ml-2 text-sm text-gray-600">Signed?</span>
                </label>
                <InputError :message="form.errors.signed_2" class="mt-2" />
            </div>

        </template>

        <template #actions>
            <ActionMessage :on="form.recentlySuccessful" class="mr-3">
                Saved.
            </ActionMessage>

            <Button :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                Save
            </Button>
        </template>
    </FormSection>
</template>
