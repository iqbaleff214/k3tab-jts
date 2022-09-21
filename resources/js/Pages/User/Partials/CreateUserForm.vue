<script setup>
    import { useForm, usePage } from '@inertiajs/inertia-vue3';
    import ActionMessage from '@/Components/ActionMessage.vue';
    import Button from '@/Components/Button.vue';
    import FormSection from '@/Components/FormSection.vue';
    import Input from '@/Components/Input.vue';
    import InputSelect from '@/Components/InputSelect.vue';
    import InputError from '@/Components/InputError.vue';
    import Label from '@/Components/Label.vue';

    const form = useForm({
        name: null,
        salary_number: null,
        role: null,
        address: null,
        phone: null,
        superior_id: null,
    });

    const optionRoles = [
        { value: 'supervisor', option: 'Supervisor', },
        { value: 'sales_support', option: 'Sales Support', },
        { value: 'foreman', option: 'Foreman', },
        { value: 'serviceman', option: 'Serviceman', },
    ];

    const storeUser = () => {
        form.transform((data) => {
            if (data.role == 'serviceman') return {...data, superior_id: null};

            const user = usePage().props.value.user;
            return {
                ...data,
                superior_id: user.role == 'superadmin' ? 2 : user.id,
            }
        }).post(route('users.store'), {
            preserveScroll: true,
            onSuccess: () => form.reset(),
        });
    };
    </script>

    <template>
        <FormSection @submitted="storeUser">
            <template #title>
                Create new User
            </template>

            <template #description>
                Add your new subordinate.
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

                <div class="col-span-6 sm:col-span-4">
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
