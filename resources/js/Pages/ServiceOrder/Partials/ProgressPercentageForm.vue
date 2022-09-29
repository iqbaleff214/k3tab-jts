<script setup>
    import { onBeforeMount, onMounted, ref } from 'vue';
    import { useForm, usePage } from '@inertiajs/inertia-vue3';
    import ActionMessage from '@/Components/ActionMessage.vue';
    import Button from '@/Components/Button.vue';
    import FormSection from '@/Components/FormSection.vue';
    import Input from '@/Components/Input.vue';
    import InputSelect from '@/Components/InputSelect.vue';
    import InputError from '@/Components/InputError.vue';
    import Label from '@/Components/Label.vue';

    const props = defineProps({
        serviceOrder: Object,
    });

    const selected = ref(null);

    const form = useForm({
        id: props.serviceOrder?.id,
        segment: props.serviceOrder?.segment,
        operation: props.serviceOrder?.operation,
        job_code: props.serviceOrder?.job_code,
        component_code: props.serviceOrder?.component_code,
        smu: props.serviceOrder?.smu,
        warranty: props.serviceOrder?.warranty,
        warranty_text: props.serviceOrder?.warranty_text,
        pip_psp: props.serviceOrder?.pip_psp,
        job_control: props.serviceOrder?.job_control,
        business_area: props.serviceOrder?.business_area,
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
        date_required: props.serviceOrder?.date_required,
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
    });

    const updateServiceOrder = () => {
        form.put(route('service-orders.update', props.serviceOrder.id), {
            preserveScroll: true,
            preserveState: true,
        });
    };

    </script>

    <template>
        <FormSection @submitted="updateServiceOrder">
            <template #title>
                Work Progress
            </template>

            <template #description>
                Manually adjust your service order work progress.
            </template>

            <template #form>

            <div class="col-span-6 sm:col-span-6">
                <Label for="progress_percentage" :value="`Progress Percentage`" />
                <Input
                    id="progress_percentage"
                    v-model="form.progress_percentage"
                    type="number"
                    min="0"
                    max="100"
                    class="mt-1 block w-full mb-4"
                />
                <input type="range" min="0" max="100" v-model="form.progress_percentage" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700">
                <p class="text-sm mt-1 text-red-500" v-if="Object.keys(form.errors).length > 0">Save the Edit Service Order form first.</p>
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
