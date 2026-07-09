<script lang="ts">
  import type { PageData } from './$types';
  import PageHeader from '$lib/components/elements/PageHeader.svelte';
  import UsatoCard from '$lib/components/elements/UsatoCard.svelte';

  export let data: PageData;
</script>

<svelte:head>
  <title>Usato - Officine Meccaniche Giacomella</title>
  <meta
    name="description"
    content="Caravan, camper e mezzi usati disponibili presso le Officine Meccaniche Giacomella in Valsugana."
  />
  <meta name="keywords" content="usato, caravan usate, camper usati, occasioni, giacomella, OMG" />
</svelte:head>

<PageHeader
  title="Usato"
  subtitle="Caravan, camper e mezzi usati disponibili"
  breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Usato' }]}
/>

<div class="container mx-auto px-4 py-16">
  <section class="pb-10">
    <!-- Grid degli annunci attivi -->
    <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {#each data.stories as story}
        <UsatoCard {story} />
      {/each}
    </div>

    {#if data.stories.length === 0}
      <div class="py-12 text-center text-gray-500">
        <svg
          class="mx-auto mb-6 h-16 w-16 text-gray-300"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <path d="M18 19V9a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v8a2 2 0 0 0 2 2h2" />
          <path d="M2 9h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2" />
          <path d="M22 17v1a1 1 0 0 1-1 1H10v-9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v9" />
          <circle cx="8" cy="19" r="2" />
        </svg>
        <p class="text-xl font-semibold text-gray-700">
          Al momento non abbiamo mezzi usati da proporre.
        </p>
        <p class="mt-2 text-base">
          Torna a trovarci presto: il nostro parco mezzi si aggiorna di frequente. Nel frattempo,
          contattaci pure per comunicarci ciò che stai cercando.
        </p>
      </div>
    {/if}
  </section>
</div>
