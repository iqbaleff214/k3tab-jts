<script setup>
import { Link } from '@inertiajs/inertia-vue3';
import { ref } from '@vue/reactivity';
import DialogModal from '@/Components/DialogModal.vue';
import SecondaryButton from '@/Components/SecondaryButton.vue';

const imageExt = /(\.jpg|\.jpeg|\.png|\.gif)$/i;

const selectedServiceOrder = ref({});
const showDetailModal = ref(false);

const openDetailModal = (so) => {
    showDetailModal.value = true;
    selectedServiceOrder.value = so;
}
const closeDetailModal = () => showDetailModal.value = false;
</script>

<template>
    <div class="p-4 w-full bg-white rounded-lg border shadow-xl sm:p-8">
        <div class="flex justify-between items-center mb-4">
            <h5 class="text-xl font-semibold leading-none text-gray-900 dark:text-white">Currently Progressing</h5>
            <Link :href="route('service-orders.index', { status: 'in_progress' })" class="text-sm font-medium text-yellow-600 hover:underline dark:text-yellow-500">
                View all
            </Link>
        </div>
        <div class="flow-root">
            <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
                <li class="py-3 sm:py-4" v-for="so in $page.props.service_order.in_progress" :key="so.id">
                    <div class="flex items-center space-x-4">
                        <div class="flex-1 min-w-0">
                            <p class="text-sm font-medium cursor-pointer text-yellow-600 truncate dark:text-white" @click="openDetailModal(so)">
                                {{ so.service_order_no }}
                            </p>
                            <div class="w-full bg-gray-200 h-4 mt-2 rounded-full dark:bg-gray-700">
                                <div class="bg-orange-500 text-xs h-4 font-medium text-orange-100 text-center p-0.5 leading-none rounded-full" :style="{width: `${so.progress_percentage}%`}"> {{ so.progress_percentage }}%</div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>

    <!-- Detail confirmation modal -->
    <DialogModal :show="showDetailModal" @close="closeDetailModal">
        <template #title>
            Work Progress
        </template>

        <template #content>
            <div>
                <ol class="relative border-l border-gray-200 dark:border-gray-700" v-if="['customer', 'sales_support'].includes($page.props.user.role)">
                    <li class="mb-10 ml-4" v-for="timeline in selectedServiceOrder?.control_card_accepted" :key="timeline.id">
                        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{{ new Date(timeline.created_at).toLocaleString('id-ID') }}</time>
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{{ timeline?.special_note }}</h3>
                        <p class="text-base font-normal text-gray-500 dark:text-gray-400">{{ timeline?.reporter?.name }}</p>
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
                        <p class="text-base font-normal text-gray-500 dark:text-gray-400">{{ timeline?.reporter?.name }}</p>
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
        </template>

        <template #footer>
            <SecondaryButton @click="closeDetailModal">
                Close
            </SecondaryButton>
        </template>
    </DialogModal>
</template>
