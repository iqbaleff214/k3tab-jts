<script setup>
import { onBeforeMount, onMounted, ref } from 'vue';
import { useForm, usePage } from '@inertiajs/inertia-vue3';
import ActionMessage from '@/Components/ActionMessage.vue';
import Button from '@/Components/Button.vue';
import FormSection from '@/Components/FormSection.vue';
import Input from '@/Components/Input.vue';
import InputSelect from '@/Components/InputSelect.vue';
import Checkbox from '@/Components/Checkbox.vue';
import InputError from '@/Components/InputError.vue';
import Label from '@/Components/Label.vue';

const props = defineProps({
    serviceOrder: Object
});

const selectedCustomer = ref(null);

const serviceTeams = [
    { value: 'Field', option: 'Field' },
    { value: 'Workshop', option: 'Workshop' },
];

const form = useForm({
    id: props.serviceOrder?.id,
    segment: props.serviceOrder?.segment,
    operation: props.serviceOrder?.operation, // equipment number
    job_code: props.serviceOrder?.job_code,
    component_code: props.serviceOrder?.component_code,
    smu: props.serviceOrder?.smu,
    warranty: props.serviceOrder?.warranty,
    warranty_text: props.serviceOrder?.warranty_text,
    pip_psp: props.serviceOrder?.pip_psp,
    job_control: props.serviceOrder?.job_control,
    business_area: props.serviceOrder?.business_area, // section
    customer_name: props.serviceOrder?.customer_name,
    service_team: props.serviceOrder?.service_team,
    group_number: props.serviceOrder?.group_number,
    customer_no: props.serviceOrder?.customer_no,
    make: props.serviceOrder?.make,
    model: props.serviceOrder?.model,
    serial_number: props.serviceOrder?.serial_number,
    arrg_no: props.serviceOrder?.arrg_no,
    std_hours: props.serviceOrder?.std_hours,
    job_description: props.serviceOrder?.job_description,
    labor_hours: props.serviceOrder?.labor_hours,
    date_sent: props.serviceOrder?.date_sent,
    date_required: props.serviceOrder?.date_required, // date received
    date_returned: props.serviceOrder?.date_returned,
    date_received_back: props.serviceOrder?.date_received_back,
    date_segment_closed: props.serviceOrder?.date_segment_closed,
    receive_by: props.serviceOrder?.receive_by,
    surplus_part_returned: props.serviceOrder?.surplus_part_returned,
    sims_completed: props.serviceOrder?.sims_completed,
    note: props.serviceOrder?.note,
    deliver_to: props.serviceOrder?.deliver_to,
    return_to: props.serviceOrder?.return_to,
    signed_1: props.serviceOrder?.signed_1,
    signed_2: props.serviceOrder?.signed_2,
    status: props.serviceOrder?.status,
    progress_percentage: props.serviceOrder?.progress_percentage,
    customer_id: props.serviceOrder?.customer_id,
    supervisor_id: props.serviceOrder?.supervisor_id,
    foreman_id: props.serviceOrder?.foreman_id,
    serviceman_id: props.serviceOrder?.serviceman_id,
    new_customer: props.serviceOrder?.customer_id == null,
});

const updateServiceOrder = () => {
    form.transform((data) => {
        return { ...data, customer_id: data.new_customer ? null : selectedCustomer.value?.id };
    }).put(route('service-orders.update', props.serviceOrder.id), {
        preserveState: true,
        preserveScroll: true,
    });
};

const onSelectedCustomer = () => {
    form.customer_no = selectedCustomer.value?.salary_number;
    form.customer_name = selectedCustomer.value?.name;
};

onBeforeMount(() => {
    const customers = usePage().props.value.customers;
    selectedCustomer.value = customers.find(customer => customer.id == form.customer_id)
})

</script>

<template>
    <FormSection @submitted="updateServiceOrder">
        <template #title>
            Edit Service Order
        </template>

        <template #description>
            Edit your service order data.
        </template>

        <template #form>

            <div class="col-span-6 sm:col-span-3">
                <Label for="foreman_id" value="Foreman PIC*" />
                <Input
                    id="foreman_id"
                    :value="props.serviceOrder?.foreman?.name"
                    type="text"
                    class="mt-1 block w-full bg-gray-100"
                    disabled
                />
                <InputError :message="form.errors.foreman_id" class="mt-2" />
            </div>

            <div class="col-span-6 sm:col-span-3">
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

            <div class="col-span-6 sm:col-span-3">
                <Label for="new_customer" value="New Customer?" class="capitalize" />
                <label class="flex items-center mt-3">
                    <Checkbox v-model:checked="form.new_customer" />
                    <span class="ml-2 text-sm text-gray-600">{{ form.new_customer ? 'Yes' : 'No' }}</span>
                </label>
            </div>

            <div class="col-span-6 sm:col-span-3" v-if="form.new_customer">
                <Label for="customer_no" value="Customer No*" />
                <Input
                    id="customer_no"
                    v-model="form.customer_no"
                    type="text"
                    class="mt-1 block w-full"
                />
                <InputError :message="form.errors.customer_no" class="mt-2" />
            </div>
            <div class="col-span-6 sm:col-span-3" v-else>
                <Label for="customer_no" value="Customer No*" class="capitalize" />
                <select v-model="selectedCustomer" @change="onSelectedCustomer" id="customer_no" class="border-gray-300 mt-1 block w-full focus:border-yellow-300 focus:ring focus:ring-yellow-200 focus:ring-opacity-50 rounded-md shadow-sm">
                    <option v-for="customer in $page.props.customers" :key="customer.id" :value="customer">{{ customer.name + ' - ' + customer.salary_number }}</option>
                </select>
                <InputError :message="form.errors.customer_no" class="mt-2" />
            </div>

            <div class="col-span-6 sm:col-span-3">
                <Label for="id" value="Service Order" />
                <Input
                    id="id"
                    :value="props.serviceOrder?.service_order_no"
                    type="text"
                    class="mt-1 block w-full bg-gray-100"
                    disabled
                />
                <InputError :message="form.errors.id" class="mt-2" />
            </div>

            <div class="col-span-6 sm:col-span-3">
                <Label for="job_description" value="Job Description*" class="capitalize" />
                <Input
                    id="job_description"
                    v-model="form.job_description"
                    type="text"
                    class="mt-1 block w-full"
                />
                <InputError :message="form.errors.job_description" class="mt-2" />
            </div>

            <div class="col-span-6 sm:col-span-3">
                <Label for="model" value="Sales model*" class="capitalize" />
                <Input
                    id="model"
                    v-model="form.model"
                    type="text"
                    class="mt-1 block w-full"
                />
                <InputError :message="form.errors.model" class="mt-2" />
            </div>

            <div class="col-span-6 sm:col-span-3">
                <Label for="serial_number" value="serial number*" class="capitalize" />
                <Input
                    id="serial_number"
                    v-model="form.serial_number"
                    type="text"
                    class="mt-1 block w-full"
                />
                <InputError :message="form.errors.serial_number" class="mt-2" />
            </div>

            <div class="col-span-6 sm:col-span-3">
                <Label for="arrg_no" value="Arr. No" class="capitalize" />
                <Input
                    id="arrg_no"
                    v-model="form.arrg_no"
                    type="text"
                    class="mt-1 block w-full"
                />
                <InputError :message="form.errors.arrg_no" class="mt-2" />
            </div>

            <div class="col-span-6 sm:col-span-3">
                <Label for="smu" value="SMU" class="capitalize" />
                <Input
                    id="smu"
                    v-model="form.smu"
                    type="text"
                    class="mt-1 block w-full"
                />
                <InputError :message="form.errors.smu" class="mt-2" />
            </div>

            <div class="col-span-6 sm:col-span-3">
                <Label for="operation" value="Equipment Number" class="capitalize" />
                <Input
                    id="operation"
                    v-model="form.operation"
                    type="text"
                    class="mt-1 block w-full"
                />
                <InputError :message="form.errors.operation" class="mt-2" />
            </div>

            <div class="col-span-6 sm:col-span-3">
                <Label for="component_code" value="component name" class="capitalize" />
                <Input
                    id="component_code"
                    v-model="form.component_code"
                    type="text"
                    class="mt-1 block w-full"
                />
                <InputError :message="form.errors.component_code" class="mt-2" />
            </div>

            <div class="col-span-6 sm:col-span-3">
                <Label for="segment" value="Segment*" />
                <Input
                id="segment"
                v-model="form.segment"
                type="text"
                class="mt-1 block w-full"
                />
                <InputError :message="form.errors.segment" class="mt-2" />
            </div>

            <div class="col-span-6 sm:col-span-3">
                <Label for="warranty" value="Warranty?" />
                <label class="flex items-center mt-3">
                    <Checkbox v-model:checked="form.warranty" name="warranty" />
                    <span class="ml-2 text-sm text-gray-600">{{ form.warranty ? 'Yes' : 'No' }}</span>
                </label>
                <InputError :message="form.errors.warranty" class="mt-2" />
            </div>

            <div class="col-span-6 sm:col-span-6">
                <Label for="job_code" value="job code*" class="capitalize" />
                <Input
                    id="job_code"
                    v-model="form.job_code"
                    type="text"
                    class="mt-1 block w-full"
                />
                <InputError :message="form.errors.job_code" class="mt-2" />
            </div>

            <div class="col-span-6 sm:col-span-6">
                <Label for="pip_psp" value="PIP/PSP" class="capitalize" />
                <Input
                    id="pip_psp"
                    v-model="form.pip_psp"
                    type="text"
                    class="mt-1 block w-full"
                />
                <InputError :message="form.errors.pip_psp" class="mt-2" />
            </div>

            <div class="col-span-6 sm:col-span-6">
                <Label for="service_team" value="Service Team*" class="capitalize" />
                <InputSelect
                    id="service_team"
                    v-model="form.service_team"
                    :options="serviceTeams"
                    class="mt-1 block w-full"
                />
                <InputError :message="form.errors.service_team" class="mt-2" />
            </div>

            <div class="col-span-6 sm:col-span-6">
                <Label for="business_area" value="Section" class="capitalize" />
                <Input
                    id="business_area"
                    v-model="form.business_area"
                    type="text"
                    class="mt-1 block w-full"
                />
                <InputError :message="form.errors.business_area" class="mt-2" />
            </div>

            <div class="col-span-6 sm:col-span-6">
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

            <div class="col-span-6 sm:col-span-6">
                <Label for="date_required" value="date received" class="capitalize" />
                <Input
                    id="date_required"
                    v-model="form.date_required"
                    type="date"
                    class="mt-1 block w-full"
                />
                <InputError :message="form.errors.date_required" class="mt-2" />
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
