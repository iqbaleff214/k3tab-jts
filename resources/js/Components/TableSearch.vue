<script setup>
import { ref } from "@vue/reactivity";
import { onBeforeMount } from "@vue/runtime-core";

const props = defineProps({
    placeholder: {
        type: String,
        default: 'Search...',
    },
    search: String,
});


const searchVal = ref(null);
const emit = defineEmits(['search']);

const submitSearch = () => {
    emit('search', searchVal.value);
}

onBeforeMount(() => {
    searchVal.value = props.search;
});

</script>

<template>
    <form method="post" @submit.prevent="submitSearch">
        <label for="table-search" class="sr-only">Search</label>
        <div class="relative mt-1">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                    class="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        fill-rule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clip-rule="evenodd"></path>
                </svg>
            </div>
            <input
                type="text"
                id="table-search"
                v-model="searchVal"
                @input="submitSearch"
                autocomplete="off"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-min-50 mr-4 pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500"
                :placeholder="placeholder"/>
        </div>
    </form>
</template>
