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
        user: Object
    });

    const form = useForm({
        id: props.user.id,
        name: props.user.name,
        salary_number: props.user.salary_number,
        role: props.user.role,
        address: props.user.address,
        phone: props.user.phone,
        superior_id: props.user.superior_id,
    });

    const optionRoles = [
        { value: 'superadmin', option: 'Superadmin', },
        { value: 'supervisor', option: 'Supervisor', },
        { value: 'sales_support', option: 'Sales Support', },
        { value: 'foreman', option: 'Foreman', },
        { value: 'serviceman', option: 'Serviceman', },
    ];

    const updateUser = () => {
        form.put(route('users.update', props.user.id));
    };

    onBeforeMount(() => {
        if (usePage().props.value.user.role != 'superadmin') {
            optionRoles.shift();
        }
    });
    </script>

    <template>
        <FormSection @submitted="updateUser">
            <template #title>
                Edit User
            </template>

            <template #description>
                Edit your subordinate data.
            </template>

            <template #form>

                <div class="col-span-6 sm:col-span-4">
                    <Label for="name" value="Name*" />
                    <Input
                        id="name"
                        v-model="form.name"
                        type="text"
                        class="mt-1 block w-full"
                    />
                    <InputError :message="form.errors.name" class="mt-2" />
                </div>

                <div class="col-span-6 sm:col-span-4">
                    <Label for="salary_number" value="Salary Number*" />
                    <Input
                        id="salary_number"
                        v-model="form.salary_number"
                        type="text"
                        class="mt-1 block w-full"
                    />
                    <InputError :message="form.errors.salary_number" class="mt-2" />
                </div>

                <div class="col-span-6 sm:col-span-4" v-if="['superadmin', 'supervisor'].includes($page.props.user.role) ">
                    <Label for="role" value="Role*" />
                    <InputSelect
                        id="role"
                        v-model="form.role"
                        :options="optionRoles"
                        class="mt-1 block w-full"
                    />
                    <InputError :message="form.errors.role" class="mt-2" />
                </div>

                <div class="col-span-6 sm:col-span-4">
                    <Label for="phone" value="Phone Number" />
                    <Input
                        id="phone"
                        v-model="form.phone"
                        type="text"
                        class="mt-1 block w-full"
                    />
                    <InputError :message="form.errors.phone" class="mt-2" />
                </div>

                <div class="col-span-6 sm:col-span-4">
                    <Label for="address" value="Address" />
                    <Input
                        id="address"
                        v-model="form.address"
                        type="text"
                        class="mt-1 block w-full"
                    />
                    <InputError :message="form.errors.address" class="mt-2" />
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
