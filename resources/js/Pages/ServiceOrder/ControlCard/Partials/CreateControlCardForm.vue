<script setup>
import { useForm, usePage } from '@inertiajs/inertia-vue3';
import ActionMessage from '@/Components/ActionMessage.vue';
import Button from '@/Components/Button.vue';
import FormSection from '@/Components/FormSection.vue';
import Input from '@/Components/Input.vue';
import InputSelect from '@/Components/InputSelect.vue';
import InputError from '@/Components/InputError.vue';
import Label from '@/Components/Label.vue';

const props = defineProps({
    so: Object,
});

const form = useForm({
    date: new Date().toISOString().slice(0, 10),
    special_note: null,
    is_approved: false,
    service_order_id: props.so.id,
    serviceman_id: props.so.serviceman_id,
});

const storeControlCard = () => {
    form.post(route('control-cards.store', props.so.id), {
        preserveScroll: true,
        onSuccess: () => form.reset(),
    });
};
</script>

<template>
    <FormSection @submitted="storeControlCard">
        <template #title>
            Create new control card's note
        </template>

        <template #description>
            Add your new progress on service order.
        </template>

        <template #form>

            <div class="col-span-6 sm:col-span-4">
                <Label for="date" value="Date*" />
                <Input
                    id="date"
                    v-model="form.date"
                    type="date"
                    class="mt-1 block w-full bg-gray-100"
                    readonly
                />
                <InputError :message="form.errors.date" class="mt-2" />
            </div>

            <div class="col-span-6 sm:col-span-4">
                <Label for="special_note" value="Note*" />
                <Input
                    id="special_note"
                    v-model="form.special_note"
                    type="text"
                    class="mt-1 block w-full"
                />
                <InputError :message="form.errors.special_note" class="mt-2" />
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
