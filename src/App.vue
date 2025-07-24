<template>
  <div class="min-h-screen flex flex-col bg-gray-900 relative overflow-hidden">
    <!-- Animation d'arrière-plan -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <!-- Particules flottantes -->
      <div 
        v-for="i in 15" 
        :key="`particle-${i}`"
        class="absolute w-2 h-2 bg-theme1/20 rounded-full animate-float"
        :style="{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 10}s`,
          animationDuration: `${8 + Math.random() * 4}s`
        }"
      ></div>
      
      <!-- Cercles géométriques -->
      <div 
        v-for="i in 8" 
        :key="`circle-${i}`"
        class="absolute border border-theme1/10 rounded-full animate-pulse-slow"
        :style="{
          width: `${100 + Math.random() * 200}px`,
          height: `${100 + Math.random() * 200}px`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 5}s`,
          animationDuration: `${4 + Math.random() * 3}s`
        }"
      ></div>
      
      <!-- Lignes diagonales subtiles -->
      <div class="absolute top-0 left-0 w-full h-full">
        <div 
          v-for="i in 6" 
          :key="`line-${i}`"
          class="absolute bg-theme1/5 animate-slide-diagonal"
          :style="{
            width: '2px',
            height: '100px',
            left: `${i * 20}%`,
            top: '-50px',
            transform: 'rotate(45deg)',
            animationDelay: `${i * 2}s`,
            animationDuration: '15s'
          }"
        ></div>
      </div>
      
      <!-- Gradient animé en overlay -->
      <div class="absolute inset-0 bg-gradient-to-br from-theme1/5 via-transparent to-gray-900/50 animate-gradient-shift"></div>
    </div>

    <!-- Contenu principal -->
    <div class="relative z-10">
      <Header @show-fav="showFav = true,goHome=false" @go-home="goHome = true,showFav=false" />
      <main class="flex-1 container mx-auto p-4">
        <router-view/>
      </main>
      <Footer />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Header from './layouts/Header.vue'
import Footer from './layouts/Footer.vue'
import MoodSelector from './components/sections/MoodSelector.vue'
import AnimeList from './components/sections/AnimeList.vue'
import Favorites from './pages/Favorites.vue'

const currentMood = ref(null)
const showFav = ref(false)

const goHome = () => {
  currentMood.value = null
  showFav.value = false
}
</script>

<style scoped>
/* Animation des particules flottantes */
@keyframes float {
  0%, 100% {
    transform: translateY(0px) translateX(0px);
    opacity: 0.3;
  }
  25% {
    transform: translateY(-20px) translateX(10px);
    opacity: 0.7;
  }
  50% {
    transform: translateY(-10px) translateX(-15px);
    opacity: 0.5;
  }
  75% {
    transform: translateY(-30px) translateX(5px);
    opacity: 0.8;
  }
}

.animate-float {
  animation: float linear infinite;
}

/* Animation pulse lente pour les cercles */
@keyframes pulse-slow {
  0%, 100% {
    opacity: 0.1;
    transform: scale(1);
  }
  50% {
    opacity: 0.3;
    transform: scale(1.1);
  }
}

.animate-pulse-slow {
  animation: pulse-slow ease-in-out infinite;
}

/* Animation des lignes diagonales */
@keyframes slide-diagonal {
  0% {
    transform: translateY(-100vh) translateX(-100px) rotate(45deg);
    opacity: 0;
  }
  10% {
    opacity: 0.3;
  }
  90% {
    opacity: 0.3;
  }
  100% {
    transform: translateY(100vh) translateX(100px) rotate(45deg);
    opacity: 0;
  }
}

.animate-slide-diagonal {
  animation: slide-diagonal linear infinite;
}

/* Animation du gradient */
@keyframes gradient-shift {
  0%, 100% {
    background: linear-gradient(135deg, rgba(0, 255, 249, 0.05) 0%, transparent 50%, rgba(31, 41, 55, 0.5) 100%);
  }
  50% {
    background: linear-gradient(135deg, transparent 0%, rgba(0, 255, 249, 0.03) 50%, rgba(31, 41, 55, 0.3) 100%);
  }
}

.animate-gradient-shift {
  animation: gradient-shift 20s ease-in-out infinite;
}

/* Couleurs theme1 personnalisées */
.bg-theme1\/20 {
  background-color: rgba(0, 255, 249, 0.2);
}

.bg-theme1\/10 {
  background-color: rgba(0, 255, 249, 0.1);
}

.bg-theme1\/5 {
  background-color: rgba(0, 255, 249, 0.05);
}

.border-theme1\/10 {
  border-color: rgba(0, 255, 249, 0.1);
}

.from-theme1\/5 {
  --tw-gradient-from: rgba(0, 255, 249, 0.05);
}
</style>