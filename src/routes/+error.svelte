<script lang="ts">
  import { page } from '$app/stores';
</script>

<svelte:head>
  <title>{$page.status} | Caravan OMG</title>
</svelte:head>

<section
  class="from-secondary/5 via-secondary/10 to-secondary/5 relative w-full overflow-hidden bg-linear-to-br"
>
  <!-- Decorative grid pattern -->
  <div class="absolute inset-0 -z-10 overflow-hidden">
    <svg
      class="stroke-secondary/15 absolute top-0 left-[50%] h-full w-full -translate-x-1/2"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="error-pattern"
          width="200"
          height="200"
          x="50%"
          y="0"
          patternUnits="userSpaceOnUse"
        >
          <path d="M100 200V.5M.5 .5H200" fill="none" stroke-width="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#error-pattern)" />
    </svg>
    <div
      class="absolute top-0 right-0 left-1/2 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl"
      aria-hidden="true"
    >
      <div
        class="from-primary to-secondary aspect-801/1036 w-200.25 bg-linear-to-tr opacity-10"
        style="clip-path: polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)"
      ></div>
    </div>
  </div>

  <div
    class="relative mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center px-6 py-24 text-center"
  >
    <p class="text-secondary text-8xl font-bold tracking-tight sm:text-9xl">{$page.status}</p>
    <p class="mt-6 text-lg leading-5">
      <span class="text-2xl">{$page.error?.message ?? 'Si è verificato un errore.'}</span>
      <br /><br />
      La pagina che cerchi non esiste o è stata spostata. Controlla l'URL o torna alla home.
    </p>
    <div class="mt-10">
      <a
        href="/"
        class="bg-secondary hover:bg-secondary/90 rounded-xl px-6 py-3.5 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl"
      >
        Torna alla home
      </a>
    </div>
  </div>
</section>
