<script setup lang="ts">
import Logo from '../components/ui/Logo.vue';

</script>

<template>
  <footer class="relative bg-base-200 border-t border-base-content mt-16">
    <!-- Contenu principal -->
    <div class="max-w-7xl mx-auto px-6 py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- Logo et description -->
        <div class="md:col-span-2">
          <Logo />

          <p class="text-base-content my-4 max-w-md">
            Découvrez des animes selon votre humeur du moment. Une expérience personnalisée pour tous les otakus.
          </p>

          <!-- Stats -->
          <div class="flex items-center gap-6">
            <div class="text-center">
              <div class="text-primary font-bold text-lg">1.2K+</div>
              <div class="text-base-content/65 text-sm">Animes</div>
            </div>
            <div class="text-center">
              <div class="text-primary font-bold text-lg">5</div>
              <div class="text-base-content/65 text-sm">Moods</div>
            </div>
            <div class="text-center">
              <div class="text-primary font-bold text-lg">∞</div>
              <div class="text-base-content/65 text-sm">Découvertes</div>
            </div>
          </div>
        </div>

        <!-- Liens rapides -->
        <div>
          <h4 class="text-base-content font-semibold mb-4">Navigation</h4>
          <ul class="space-y-2">
            <li>
              <a href="#"
                class="text-base-content/65 hover:text-primary transition-colors duration-300 flex items-center gap-2">
                <span class="w-1 h-1 bg-primary rounded-full opacity-0 hover:opacity-100 transition-opacity"></span>
                Accueil
              </a>
            </li>
            <li>
              <a href="#"
                class="text-base-content/65 hover:text-primary transition-colors duration-300 flex items-center gap-2">
                <span class="w-1 h-1 bg-primary rounded-full opacity-0 hover:opacity-100 transition-opacity"></span>
                Mes Favoris
              </a>
            </li>
            <li>
              <a href="#"
                class="text-base-content/65 hover:text-primary transition-colors duration-300 flex items-center gap-2">
                <span class="w-1 h-1 bg-primary rounded-full opacity-0 hover:opacity-100 transition-opacity"></span>
                Découvrir
              </a>
            </li>
          </ul>
        </div>

        <!-- Technologies -->
        <div>
          <h4 class="text-base-content font-semibold mb-4">Technologies</h4>
          <div class="space-y-3">
            <div class="flex items-center gap-3">
              <div class="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                <span class="text-green-400 text-sm font-bold">V</span>
              </div>
              <span class="text-base-content/65">Vue 3</span>
            </div>
            <div class="flex items-center gap-3">
              <div class="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                <span class="text-blue-400 text-sm font-bold">T</span>
              </div>
              <span class="text-base-content/65">Tailwind CSS</span>
            </div>
            <div class="flex items-center gap-3">
              <div class="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                <span class="text-purple-400 text-sm font-bold">JS</span>
              </div>
              <span class="text-base-content/65">JavaScript</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Barre de séparation avec animation -->
    <div class="relative h-px bg-gray-800 overflow-hidden">
      <div class="absolute inset-0 bg-primary/30 transform -translate-x-full animate-slide-right"></div>
    </div>

    <!-- Copyright et crédits -->
    <div class="px-6 py-6">
      <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div class="flex items-center gap-4">
          <p class="text-info text-sm">
            © 2024 AnimeMood. Fait avec
            <span class="text-info animate-pulse">💜</span>
            par un développeur passionné
          </p>
        </div>

        <!-- Réseaux sociaux fictifs -->
        <div class="flex items-center gap-4">
          <span class="text-gray-500 text-sm">Suivez-nous :</span>
          <div class="flex gap-3">
            <button
              class="w-8 h-8 bg-primary-content hover:bg-primary text-primary hover:text-primary-content rounded-lg transition-all duration-300 flex items-center justify-center hover:scale-110">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </button>
            <button
              class="w-8 h-8 bg-primary-content hover:bg-primary text-primary hover:text-primary-content rounded-lg transition-all duration-300 flex items-center justify-center hover:scale-110">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
              </svg>
            </button>
            <button
              class="w-8 h-8 bg-primary-content hover:bg-primary text-primary hover:text-primary-content rounded-lg transition-all duration-300 flex items-center justify-center hover:scale-110">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Effet de particules flottantes -->
    <div class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
      <div class="absolute top-10 left-10 w-2 h-2 bg-primary/20 rounded-full animate-float-1"></div>
      <div class="absolute top-20 right-20 w-1 h-1 bg-primary/30 rounded-full animate-float-2"></div>
      <div class="absolute bottom-20 left-1/4 w-1.5 h-1.5 bg-primary/10 rounded-full animate-float-3"></div>
    </div>
  </footer>
</template>

<style scoped>
@keyframes float-1 {

  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }

  50% {
    transform: translateY(-20px) rotate(180deg);
  }
}

.animate-float-1 {
  animation: float-1 6s ease-in-out infinite;
}

@keyframes float-2 {

  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }

  50% {
    transform: translateY(-15px) rotate(-180deg);
  }
}

.animate-float-2 {
  animation: float-2 8s ease-in-out infinite 2s;
}

@keyframes float-3 {

  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }

  50% {
    transform: translateY(-10px) rotate(90deg);
  }
}

.animate-float-3 {
  animation: float-3 10s ease-in-out infinite 4s;
}
</style>