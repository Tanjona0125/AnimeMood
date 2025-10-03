<template>
    <div class='bg-base-300 rounded-2xl p-6 border border-primary/80 hover:border-primary/30 transition-colors'>
        <h2 v-if="title" class="text-xl font-bold text-base-content mb-4 flex items-center gap-3">
            <div class="w-1 h-5 bg-primary rounded-full"></div>
            {{title}}
        </h2>
        <div class="space-y-4">
            <slot></slot>
        </div>
    </div>
</template>
<script setup>
    const props = defineProps({
        title: String,
    });
    
</script>