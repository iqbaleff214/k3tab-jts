<script setup>
import { Link } from '@inertiajs/inertia-vue3';

defineProps({
    links: Object,
    next: {
        type: String,
        default: ''
    },
    prev: {
        type: String,
        default: ''
    },
})
</script>

<template>
        <div class="flex-1 flex justify-between sm:hidden">
            <Link
                :href="prev"
                :disabled="!prev"
                class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
            >
                Previous
            </Link>
            <Link
                :href="next"
                :disabled="!next"
                class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
            >
                Next
            </Link>
        </div>
        <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
            <div>
                <!-- <Dropdown v-model="selectedCity1" :options="cities" optionLabel="name" optionValue="code" placeholder="Select a City" /> -->
            </div>
            <div>
                <nav
                    class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
                    aria-label="Pagination"
                >
                    <Link v-for="(link, idx) in links" :key="link"
                        :href="link.url"
                        :disable="link.url"
                        :class="{
                            'z-10 bg-orange-50 border-secondary text-primary': link.active,
                            'bg-white border-gray-300 text-gray-500 hover:bg-gray-50': !link.active
                        }"
                        class=" relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                    >
                        <span v-if="idx == 0">
                            <svg
                                class="h-5 w-5"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                        </span>
                        <span v-else-if="idx == (links.length - 1)">
                            <svg
                                class="h-5 w-5"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                        </span>
                        <span v-else v-text="link.label"></span>
                    </Link>
                </nav>
            </div>
        </div>
</template>
