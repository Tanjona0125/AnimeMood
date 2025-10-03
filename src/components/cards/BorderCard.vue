<template>
    <div class="min-h-screen bg-base-200 p-6 relative rounded-xl">
        <div class="absolute inset-4 border-2 border-primary/20 rounded-3xl pointer-events-none">
            <div class="absolute -top-1 -left-1 w-6 h-6 border-l-2 border-t-2 border-primary rounded-tl-lg"></div>
            <div class="absolute -top-1 -right-1 w-6 h-6 border-r-2 border-t-2 border-primary rounded-tr-lg"></div>
            <div class="absolute -bottom-1 -left-1 w-6 h-6 border-l-2 border-b-2 border-primary rounded-bl-lg"></div>
            <div class="absolute -bottom-1 -right-1 w-6 h-6 border-r-2 border-b-2 border-primary rounded-br-lg"></div>
        </div>
        <div class="relative z-10 max-w-6xl mx-auto py-4">
            <div v-if="title" class="max-w-7xl mx-auto">
                <div class="flex items-center gap-4 mb-2">
                    <div class="w-2 h-8 bg-primary rounded-full"></div>
                    <h2 class="text-3xl font-bold text-neutral-content">
                        {{title}}
                    </h2>
                </div>
            </div>
            <slot></slot>
        </div>
    </div>
</template>
<script setup>
    const props = defineProps({
        title:String,
    });
</script>