<template>
  <!-- Animation de loading cachée -->
  <div
    class="fixed inset-0 bg-gray-900/95 backdrop-blur-sm z-50 flex items-center justify-center"
  >
    <div class="text-center">
      <!-- Spinner principal -->
      <div class="relative w-20 h-20 mx-auto mb-6">
        <div
          class="absolute inset-0 border-4 border-gray-700 rounded-full"
        ></div>
        <div
          class="absolute inset-0 border-4 border-theme1 rounded-full border-t-transparent animate-spin"
        ></div>
        <div
          class="absolute inset-2 border-2 border-theme1/50 rounded-full border-b-transparent animate-spin-reverse"
        ></div>
      </div>

      <!-- Texte animé -->
      <div class="text-theme1 font-bold text-xl mb-2 animate-pulse">
        Chargement des animes...
      </div>

      <!-- Barre de progression -->
      <div class="w-64 h-2 bg-gray-700 rounded-full overflow-hidden">
        <div class="h-full bg-theme1 rounded-full animate-loading-bar"></div>
      </div>

      <!-- Points animés -->
      <div class="flex justify-center gap-2 mt-4">
        <div
          class="w-2 h-2 bg-theme1 rounded-full animate-bounce"
          style="animation-delay: 0s"
        ></div>
        <div
          class="w-2 h-2 bg-theme1 rounded-full animate-bounce"
          style="animation-delay: 0.2s"
        ></div>
        <div
          class="w-2 h-2 bg-theme1 rounded-full animate-bounce"
          style="animation-delay: 0.4s"
        ></div>
      </div>
    </div>
  </div>
</template>
<style>
/* Animation de la barre de progression */
@keyframes loading-bar {
  0% {
    width: 0%;
  }
  50% {
    width: 70%;
  }
  100% {
    width: 100%;
  }
}

.animate-loading-bar {
  animation: loading-bar 2.5s ease-in-out;
}

/* Animation spin inverse */
@keyframes spin-reverse {
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
  }
}

.animate-spin-reverse {
  animation: spin-reverse 1.5s linear infinite;
}
</style>
