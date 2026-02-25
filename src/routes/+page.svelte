<script lang="ts">
  import CTAHome from '$lib/components/CTAHome.svelte';
  import CamperHome from '$lib/components/elements/CamperHome.svelte';
  import ArticoliList from '../lib/components/ArticoliList.svelte';
  export let data;

  console.log('Data ricevuta in +page.svelte:', data);
</script>

<!-- Hero Section -->
<div
  class="from-secondary/1 via-secondary/5 to-secondary/1 relative isolate overflow-hidden bg-linear-to-b"
>
  <!-- Decorative Background -->
  <div class="absolute inset-0 -z-10 overflow-hidden">
    <svg
      class="stroke-secondary/5 absolute top-0 left-[50%] h-256 w-512 -translate-x-1/2"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="hero-pattern"
          width="200"
          height="200"
          x="50%"
          y="-1"
          patternUnits="userSpaceOnUse"
        >
          <path d="M100 200V.5M.5 .5H200" fill="none" stroke-width="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#hero-pattern)" />
    </svg>
    <div
      class="absolute top-0 right-0 left-1/2 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
      aria-hidden="true"
    >
      <div
        class="from-primary to-secondary aspect-801/1036 w-200.25 bg-linear-to-tr opacity-20"
        style="clip-path: polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)"
      ></div>
    </div>
  </div>

  <div class="mx-auto max-w-7xl px-6 pt-20 pb-24 lg:px-8">
    <div class="mx-auto max-w-2xl text-center">
      <h1 class="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
        <span class="text-secondary">Caravan Personalizzati</span>
        <br />su Misura
      </h1>
      <p class="mt-6 text-lg leading-8 text-gray-600 sm:text-xl">
        Costruzione artigianale di caravan su misura con <span class="text-primary font-semibold"
          >portata fino a 1500kg</span
        >. Qualità, esperienza e professionalità per le tue esigenze di trasporto.
      </p>
      <div class="mt-10 flex items-center justify-center gap-x-6">
        <a
          href="/caravan"
          class="bg-secondary hover:bg-secondary/90 rounded-xl px-6 py-3.5 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl"
        >
          Scopri i Caravan
        </a>
        <a
          href="/contatti"
          class="hover:ring-tertiary/50 rounded-xl bg-white px-6 py-3.5 text-base font-semibold text-gray-900 shadow-sm ring-1 ring-gray-900/10 transition-all duration-300 hover:bg-gray-50 hover:shadow-md"
        >
          Contattaci
        </a>
      </div>
    </div>
  </div>
  <CamperHome />
</div>

<CTAHome />

<!-- Latest Articoli Section -->
<section class="my-12">
  <div class="mx-auto max-w-7xl px-6 lg:px-8"><ArticoliList articoli={data.articoli} /></div>
</section>
