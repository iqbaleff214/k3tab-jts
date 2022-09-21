<script setup>
import { Link } from '@inertiajs/inertia-vue3';
</script>

<template>
    <div class="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800">
        <h5 class="text-xl font-semibold leading-none text-gray-900 dark:text-white mb-8">Service Order Summary</h5>
        <dl class="grid grid-cols-2 gap-8 p-4 mx-auto max-w-screen-xl text-gray-900 sm:grid-cols-3 xl:grid-cols-3 dark:text-white sm:p-8">
            <div class="flex flex-col justify-center items-center">
                <dt class="mb-2 text-3xl font-extrabold" v-text="$page.props.so?.todo"></dt>
                <dd class="font-light text-orange-500 dark:text-gray-400">
                    <Link :href="route('service-orders.index', { status: 'todo' })" >TO DO</Link>
                </dd>
            </div>
            <div class="flex flex-col justify-center items-center">
                <dt class="mb-2 text-3xl font-extrabold" v-text="$page.props.so?.in_progress"></dt>
                <dd class="font-light text-orange-500 dark:text-gray-400">
                    <Link :href="route('service-orders.index', { status: 'in_progress' })" >IN PROGRESS</Link>
                </dd>
            </div>
            <div class="flex flex-col justify-center items-center">
                <dt class="mb-2 text-3xl font-extrabold" v-text="$page.props.so?.done"></dt>
                <dd class="font-light text-orange-500 dark:text-gray-400">
                    <Link :href="route('service-orders.index', { status: 'done' })" >DONE</Link>
                </dd>
            </div>
        </dl>
    </div>
</template>
