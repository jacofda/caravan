<script lang="ts">
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

<!-- CTA Section -->
<div
  class="from-primary/10 via-secondary/10 to-tertiary/10 relative isolate overflow-hidden bg-linear-to-br py-16 sm:py-24"
>
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div
      class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2 lg:items-center"
    >
      <div class="max-w-xl lg:max-w-lg">
        <h2 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Pronto per il tuo <span class="text-primary">rimorchio personalizzato?</span>
        </h2>
        <p class="mt-4 text-lg leading-8 text-gray-600">
          Con oltre {Math.round((new Date().getFullYear() - 1963) / 10) * 10} anni di esperienza nella
          costruzione di rimorchi su misura, siamo il partner ideale per realizzare il tuo progetto. Dalla
          progettazione alla consegna, seguiamo ogni fase con la massima attenzione.
        </p>
        <div class="mt-8 flex gap-x-4">
          <a
            href="/contatti"
            class="bg-secondary hover:bg-secondary/90 rounded-xl px-6 py-3.5 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            Contattaci Ora
          </a>
          <a
            href="/caravan"
            class="rounded-xl bg-white px-6 py-3.5 text-base font-semibold text-gray-900 shadow-sm ring-1 ring-gray-900/10 transition-all duration-300 hover:bg-gray-50 hover:shadow-md"
          >
            Vedi i Modelli
          </a>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
        <div class="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-900/5">
          <div class="text-primary text-4xl font-bold">1500kg</div>
          <div class="mt-2 text-sm font-semibold text-gray-900">Portata Massima</div>
          <div class="mt-1 text-xs text-gray-600">Robustezza garantita</div>
        </div>
        <div class="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-900/5">
          <div class="text-secondary text-4xl font-bold">100%</div>
          <div class="mt-2 text-sm font-semibold text-gray-900">Su Misura</div>
          <div class="mt-1 text-xs text-gray-600">Personalizzazione totale</div>
        </div>
        <div class="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-900/5">
          <div class="text-tertiary text-4xl font-bold">
            <svg
              class="h-10 w-10"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
              />
            </svg>
          </div>
          <div class="mt-2 text-sm font-semibold text-gray-900">Qualità</div>
          <div class="mt-1 text-xs text-gray-600">Materiali certificati</div>
        </div>
        <div class="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-900/5">
          <div class="text-4xl font-bold text-gray-900">
            <svg
              class="text-primary h-10 w-10"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
              />
            </svg>
          </div>
          <div class="mt-2 text-sm font-semibold text-gray-900">Esperienza</div>
          <div class="mt-1 text-xs text-gray-600">Artigiani esperti</div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Latest Articoli Section -->
<section class="my-12">
  <div class="mx-auto max-w-7xl px-6 lg:px-8"><ArticoliList articoli={data.articoli} /></div>
</section>
