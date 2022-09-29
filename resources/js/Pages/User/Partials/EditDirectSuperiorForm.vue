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

    const selected = ref(null);

    const form = useForm({
        id: props.user.id,
        name: props.user.name,
        salary_number: props.user.salary_number,
        role: props.user.role,
        address: props.user.address,
        phone: props.user.phone,
        superior_id: props.user.superior_id,
    });

    const updateUser = () => {
        form.put(route('users.update', props.user.id));
    };

    const onSelected = (event) => changeSuperior(event.target.value);

    const changeSuperior = (id) => {
        if (form.role == 'serviceman') {
            const foreman = usePage().props.value.foremen.find(f => f.id == id);
            selected.value = foreman;
        } else {
            const supervisor = usePage().props.value.supervisors.find(s => s.id == id);
            selected.value = supervisor;
        }
    }

    onBeforeMount(() => {
        changeSuperior(props.user.superior_id);
    })
    </script>

    <template>
        <FormSection @submitted="updateUser">
            <template #title>
                Edit Direct Superior
            </template>

            <template #description>
                Select your subordinate's direct superior.
            </template>

            <template #form>

                <div class="col-span-6 sm:col-span-6">
                    <Label for="name" value="Name" />
                    <select v-if="form.role == 'serviceman'" @change="onSelected($event)" v-model="form.superior_id" id="superior_id" class="border-gray-300 mt-1 block w-full focus:border-yellow-300 focus:ring focus:ring-yellow-200 focus:ring-opacity-50 rounded-md shadow-sm">
                        <option v-for="foreman in $page.props.foremen" :key="foreman.id" :value="foreman.id">{{ foreman.name }}</option>
                    </select>
                    <select v-else @change="onSelected($event)" v-model="form.superior_id" id="superior_id" class="border-gray-300 mt-1 block w-full focus:border-yellow-300 focus:ring focus:ring-yellow-200 focus:ring-opacity-50 rounded-md shadow-sm">
                        <option v-for="supervisor in $page.props.supervisors" :key="supervisor.id" :value="supervisor.id">{{ supervisor.name }}</option>
                    </select>
                    <InputError :message="form.errors.name" class="mt-2" />
                </div>

                <div class="col-span-6 sm:col-span-6">
                    <Label for="salary_number" value="Salary Number" />
                    <Input
                        id="salary_number"
                        :value="selected?.salary_number"
                        disabled
                        type="text"
                        class="mt-1 block w-full bg-gray-100"
                    />
                </div>

                <div class="col-span-6 sm:col-span-6">
                    <Label for="role" value="Role" />
                    <Input
                        id="role"
                        :value="selected?.role"
                        disabled
                        type="text"
                        class="mt-1 block w-full bg-gray-100 capitalize"
                    />
                </div>

                <div class="col-span-6 sm:col-span-6">
                    <Label for="phone" value="Phone Number" />
                    <Input
                        id="phone"
                        :value="selected?.phone"
                        disabled
                        type="text"
                        class="mt-1 block w-full bg-gray-100"
                    />
                </div>

                <div class="col-span-6 sm:col-span-6">
                    <Label for="address" value="Address" />
                    <Input
                        id="address"
                        :value="selected?.address"
                        disabled
                        type="text"
                        class="mt-1 block w-full bg-gray-100"
                    />
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
