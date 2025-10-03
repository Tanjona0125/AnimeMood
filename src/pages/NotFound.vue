<template>
  <div class="min-h-screen bg-gray-900 p-6 relative flex items-center justify-center">
    <!-- Bordures décoratives -->
    <div class="absolute inset-4 border-2 border-theme1/20 rounded-3xl pointer-events-none">
      <div class="absolute -top-1 -left-1 w-6 h-6 border-l-2 border-t-2 border-theme1 rounded-tl-lg"></div>
      <div class="absolute -top-1 -right-1 w-6 h-6 border-r-2 border-t-2 border-theme1 rounded-tr-lg"></div>
      <div class="absolute -bottom-1 -left-1 w-6 h-6 border-l-2 border-b-2 border-theme1 rounded-bl-lg"></div>
      <div class="absolute -bottom-1 -right-1 w-6 h-6 border-r-2 border-b-2 border-theme1 rounded-br-lg"></div>
    </div>

    <!-- Animation d'arrière-plan -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <!-- Particules flottantes -->
      <div 
        v-for="i in 10" 
        :key="`particle-${i}`"
        class="absolute w-2 h-2 bg-theme1/10 rounded-full animate-float"
        :style="{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 8}s`,
          animationDuration: `${6 + Math.random() * 4}s`
        }"
      ></div>
      
      <!-- Cercles brisés -->
      <div 
        v-for="i in 5" 
        :key="`circle-${i}`"
        class="absolute border-2 border-dashed border-theme1/20 rounded-full animate-pulse-slow"
        :style="{
          width: `${80 + Math.random() * 120}px`,
          height: `${80 + Math.random() * 120}px`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 3}s`
        }"
      ></div>
    </div>

    <!-- Contenu principal -->
    <div class="relative z-10 text-center max-w-2xl mx-auto">
      <!-- Numéro 404 animé -->
      <div class="relative mb-8">
        <h1 class="text-9xl md:text-[12rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-theme1 to-theme1/50 animate-pulse-glow">
          404
        </h1>
        <!-- Effet de glitch -->
        <div class="absolute inset-0 text-9xl md:text-[12rem] font-black text-theme1/20 animate-glitch">
          404
        </div>
      </div>

      <!-- Icône et message principal -->
      <div class="mb-8 space-y-4">
        <div class="text-8xl animate-bounce-slow mb-6">
          🎭
        </div>
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
          Oops ! Page introuvable
        </h2>
        <p class="text-xl text-gray-400 mb-2">
          Cette page semble avoir disparu dans une autre dimension...
        </p>
        <p class="text-lg text-gray-500">
          Comme un anime qui n'existe que dans nos rêves ! 🌙
        </p>
      </div>

      <!-- Suggestions avec bordures -->
      <div class="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-theme1/30 transition-colors mb-8">
        <h3 class="text-xl font-semibold text-white mb-6 flex items-center justify-center gap-3">
          <div class="w-1 h-6 bg-theme1 rounded-full"></div>
          Que voulez-vous faire ?
        </h3>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <!-- Retour à l'accueil -->
          <router-link to="/"
            class="group flex items-center gap-4 p-4 bg-theme1 text-black font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-theme1/20"
          >
            <svg class="w-6 h-6 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <div class="text-left">
              <div class="font-bold">Retour à l'accueil</div>
              <div class="text-sm opacity-80">Découvrir des animes</div>
            </div>
          </router-link>

          <!-- Voir les favoris -->
          <router-link
            to="/favorites"
            class="group flex items-center gap-4 p-4 bg-gray-700 text-white font-semibold rounded-xl border border-gray-600 hover:border-theme1 hover:bg-gray-600 transition-all duration-300 hover:scale-105"
          >
            <svg class="w-6 h-6 group-hover:text-theme1 transition-colors" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
            </svg>
            <div class="text-left">
              <div class="font-bold group-hover:text-theme1 transition-colors">Mes favoris</div>
              <div class="text-sm text-gray-400">Revoir mes animes</div>
            </div>
          </router-link>
        </div>
      </div>

      <!-- Suggestions d'animes populaires -->
      <div class="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-theme1/30 transition-colors">
        <h3 class="text-lg font-semibold text-white mb-4 flex items-center justify-center gap-3">
          <div class="w-1 h-5 bg-theme1 rounded-full"></div>
          Ou découvrez ces animes populaires
        </h3>
        
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div 
            v-for="anime in popularAnimes" 
            :key="anime.id"
            class="group cursor-pointer"
            @click="$emit('view-anime', anime)"
          >
            <div class="bg-gray-700 rounded-xl p-3 hover:bg-gray-600 transition-colors border border-gray-600 hover:border-theme1/50">
              <img 
                :src="anime.image" 
                :alt="anime.title"
                class="w-full h-24 object-cover rounded-lg mb-2 group-hover:scale-105 transition-transform"
              />
              <h4 class="text-white text-sm font-medium group-hover:text-theme1 transition-colors truncate">
                {{ anime.title }}
              </h4>
              <p class="text-gray-400 text-xs">{{ anime.rating }}/5 ⭐</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Message d'encouragement -->
      <div class="mt-8 p-4 bg-theme1/10 border border-theme1/30 rounded-xl">
        <p class="text-theme1 font-medium">
          💡 Astuce : Utilisez la navigation pour explorer notre collection d'animes !
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
// Émissions
defineEmits(['go-home', 'show-favorites', 'view-anime'])

// Animes populaires suggérés
const popularAnimes = [
  { 
    id: 1, 
    title: 'Attack on Titan', 
    rating: 4.8, 
    image: '/placeholder.svg?height=100&width=80' 
  },
  { 
    id: 2, 
    title: 'Demon Slayer', 
    rating: 4.7, 
    image: '/placeholder.svg?height=100&width=80' 
  },
  { 
    id: 3, 
    title: 'Your Name', 
    rating: 4.9, 
    image: '/placeholder.svg?height=100&width=80' 
  },
  { 
    id: 4, 
    title: 'Spirited Away', 
    rating: 4.8, 
    image: '/placeholder.svg?height=100&width=80' 
  }
];
</script>