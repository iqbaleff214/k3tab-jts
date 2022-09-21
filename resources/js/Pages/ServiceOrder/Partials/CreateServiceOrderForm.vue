<script setup>
import { useForm } from '@inertiajs/inertia-vue3';
import ActionMessage from '@/Components/ActionMessage.vue';
import Button from '@/Components/Button.vue';
import FormSection from '@/Components/FormSection.vue';
import Input from '@/Components/Input.vue';
import InputSelect from '@/Components/InputSelect.vue';
import InputError from '@/Components/InputError.vue';
import Checkbox from '@/Components/Checkbox.vue';
import Label from '@/Components/Label.vue';

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
    form.post(route('service-orders.store'), {
        preserveScroll: true,
        onSuccess: () => form.reset(),
    });
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
