<template>
  <div class="grid grid-cols-3 gap-4 max-w-md mx-auto mb-8">
    <button
      v-for="m in moods"
      :key="m.key"
      @click="$emit('select', m.key)"
      class="flex flex-col items-center p-4 bg-base-200 rounded-xl shadow-lg hover:bg-base-300 hover:scale-105 transition-all duration-300 border border-base-content hover:border-primary hover:text-primary cursor-pointer"
    >
      <span class="text-3xl mb-2">{{ m.icon }}</span>
      <span class="text-sm font-medium transition-colors">{{ m.label }}</span>
    </button>
  </div>
</template>

<script setup>
const moods = [
  { key: 'chill', label: 'Chill', icon: '😎' },
  { key: 'nostalgique', label: 'Nostalgique', icon: '🥺' },
  { key: 'romantic', label: 'romantic', icon: '💖' },
  { key: 'hype', label: 'Hype', icon: '🔥' },
  { key: 'mindblown', label: 'Mind-blown', icon: '🤯' },
  { key: 'cute', label: 'Cute', icon: '🐱' },
];
defineEmits(['select']);
</script>