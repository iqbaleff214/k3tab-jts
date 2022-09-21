<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import Welcome from '@/Components/Welcome.vue';
import Dashboard1 from './Dashboard/Dashboard1.vue';
import Dashboard2 from './Dashboard/Dashboard2.vue';
</script>

<template>
    <AppLayout title="Dashboard">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Dashboard
            </h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg mb-6">
                    <Dashboard1 />
                </div>

                <Dashboard2 />
            </div>
        </div>
    </AppLayout>
</template>
