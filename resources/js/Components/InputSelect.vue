<script setup>
import { onMounted, ref } from 'vue';

defineProps({
    modelValue: String,
    options: Object,
});

defineEmits(['update:modelValue']);

const input = ref(null);

onMounted(() => {
    if (input.value.hasAttribute('autofocus')) {
        input.value.focus();
    }
});

defineExpose({ focus: () => input.value.focus() });
</script>

<template>
    <select ref="input" :value="modelValue" @change="$emit('update:modelValue', $event.target.value)" class="border-gray-300 focus:border-yellow-300 focus:ring focus:ring-yellow-200 focus:ring-opacity-50 rounded-md shadow-sm">
        <option v-for="option in options" :key="option.value ?? option" :value="option.value ?? option">{{ option.option ?? option.value ?? option }}</option>
    </select>
</template>
