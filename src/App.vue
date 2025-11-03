<template>
  <div class="min-h-screen flex flex-col bg-base-100 relative overflow-hidden">
    <div class="relative z-10">
      <Header @show-fav="showFav = true, goHome = false" @go-home="goHome = true, showFav = false" />
      <main class="flex-1 container mx-auto p-4">
        <router-view />
      </main>
      <Footer />
    </div>
  </div>
</template>

<script setup>
import Header from './layouts/Header.vue'
import Footer from './layouts/Footer.vue'
</script>

<style>
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

@keyframes gradient-shift {

  0%,
  100% {
    background: linear-gradient(135deg,
        rgba(0, 255, 249, 0.05) 0%,
        transparent 50%,
        rgba(31, 41, 55, 0.5) 100%);
  }

  50% {
    background: linear-gradient(135deg,
        transparent 0%,
        rgba(0, 255, 249, 0.03) 50%,
        rgba(31, 41, 55, 0.3) 100%);
  }
}

.animate-gradient-shift {
  animation: gradient-shift 20s ease-in-out infinite;
}

@keyframes float {

  0%,
  100% {
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

/* Animation pulse lente */
@keyframes pulse-slow {

  0%,
  100% {
    opacity: 0.1;
    transform: scale(1);
  }

  50% {
    opacity: 0.3;
    transform: scale(1.05);
  }
}

.animate-pulse-slow {
  animation: pulse-slow 4s ease-in-out infinite;
}

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

@keyframes bounce-slow {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-10px);
  }
}

.animate-bounce-slow {
  animation: bounce-slow 3s ease-in-out infinite;
}

@keyframes pulse-glow {

  0%,
  100% {
    filter: drop-shadow(0 0 20px rgba(0, 255, 249, 0.3));
  }

  50% {
    filter: drop-shadow(0 0 40px rgba(0, 255, 249, 0.6));
  }
}

.animate-pulse-glow {
  animation: pulse-glow 2s ease-in-out infinite;
}

@keyframes glitch {

  0%,
  100% {
    transform: translate(0);
  }

  20% {
    transform: translate(-2px, 2px);
  }

  40% {
    transform: translate(-2px, -2px);
  }

  60% {
    transform: translate(2px, 2px);
  }

  80% {
    transform: translate(2px, -2px);
  }
}

.animate-glitch {
  animation: glitch 0.3s ease-in-out infinite alternate;
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.6s ease-out forwards;
  opacity: 0;
}

@keyframes slide-right {
  0% {
    transform: translateX(-100%);
  }

  100% {
    transform: translateX(100%);
  }
}

.animate-slide-right {
  animation: slide-right 3s ease-in-out infinite;
}
</style>