<template>
    <!-- Animation d'arrière-plan -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <!-- Particules flottantes -->
      <div v-for="i in 15" :key="`particle-${i}`" class="absolute w-2 h-2 bg-primary/20 rounded-full animate-float"
        :style="{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 10}s`,
          animationDuration: `${8 + Math.random() * 4}s`
        }"></div>

      <!-- Cercles géométriques -->
      <div v-for="i in 8" :key="`circle-${i}`" class="absolute border border-primary/10 rounded-full animate-pulse-slow"
        :style="{
          width: `${100 + Math.random() * 200}px`,
          height: `${100 + Math.random() * 200}px`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 5}s`,
          animationDuration: `${4 + Math.random() * 3}s`
        }"></div>

      <!-- Lignes diagonales subtiles -->
      <div class="absolute top-0 left-0 w-full h-full">
        <div v-for="i in 6" :key="`line-${i}`" class="absolute bg-primary/5 animate-slide-diagonal" :style="{
          width: '2px',
          height: '100px',
          left: `${i * 20}%`,
          top: '-50px',
          transform: 'rotate(45deg)',
          animationDelay: `${i * 2}s`,
          animationDuration: '15s'
        }"></div>
      </div>

      <!-- Gradient animé en overlay -->
      <div class="absolute inset-0 bg-gradient-to-br from-base-100 via-transparent to-base-100/50"></div>
    </div>
</template>