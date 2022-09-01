<script setup>
defineProps({
    checkbox: {
        type: Boolean,
        default: false
    },
    action: {
        type: Boolean,
        default: false
    },
    columns: Array,
    checkboxState: {
        type: Boolean,
        default: false,
    },
});
</script>

<template>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div class="p-4">
            <slot name="header"></slot>
        </div>
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="p-4" v-if="checkbox">
                        <div class="flex items-center">
                            <input
                                @change="$emit('selectAllToggle', $event.target.checked)"
                                id="checkbox-all-search"
                                type="checkbox"
                                :checked="checkboxState"
                                class="w-4 h-4 text-yellow-600 bg-gray-100 border-gray-300 rounded focus:ring-yellow-500 dark:focus:ring-yellow-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label for="checkbox-all-search" class="sr-only">checkbox</label>
                        </div>
                    </th>
                    <th scope="col" class="px-6 py-3" v-for="column in columns" :key="column">{{ column }}</th>
                    <th scope="col" class="px-6 py-3" v-if="action">
                        <span class="sr-only">Edit</span>
                    </th>
                </tr>
            </thead>
            <tbody>
                <slot name="tbody"></slot>
            </tbody>
        </table>
        <div class="p-4">
            <slot name="footer"></slot>
        </div>
    </div>
</template>
