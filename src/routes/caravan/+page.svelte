<script lang="ts">
  function getCaravanImage(slug: string, name: string) {
    const images = {
      duemme_46,
      family_40,
      lusy_46,
      nomad_46,
      norma_60,
      regina_60,
      singol_40,
    };
    const slugToKey: Record<string, keyof typeof images> = {
      'duemme-46': 'duemme_46',
      'family-40': 'family_40',
      'lusy-46': 'lusy_46',
      'nomad-46': 'nomad_46',
      'norma-60': 'norma_60',
      'regina-60': 'regina_60',
      'singol-40': 'singol_40',
    };
    const key = slugToKey[slug];
    const img = key ? images[key] : undefined;
    if (img) {
      return `<img src="${img}" alt="${name}" class="w-full object-cover mr-4" />`;
    }
    return '';
  }
  import type { PageData } from './$types';
  import PageHeader from '$lib/components/elements/PageHeader.svelte';
  import { richTextResolver } from '@storyblok/richtext';

  import duemme_46 from '$lib/assets/caravan/duemme-46.jpg';
  import family_40 from '$lib/assets/caravan/family-40.jpg';
  import lusy_46 from '$lib/assets/caravan/lusy-46.jpg';
  import nomad_46 from '$lib/assets/caravan/nomad-46.jpg';
  import norma_60 from '$lib/assets/caravan/norma-60.jpg';
  import regina_60 from '$lib/assets/caravan/regina-60.jpg';
  import singol_40 from '$lib/assets/caravan/singol-40.jpg';

  const resolver = richTextResolver();
  export let data: PageData;
</script>

<svelte:head>
  <title>Caravan - Gamma completa | Valugana | Officine Meccanica Giacomella</title>
  <meta
    name="description"
    content="Scopri la gamma completa di caravan professionali disponibili sul nostro sito."
  />
  <meta name="keywords" content="caravan, trasporti, professionali, gamma, veicoli" />
</svelte:head>

<PageHeader
  title="I Nostri Caravan"
  subtitle="Scopri la gamma completa di caravan professionali"
  breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Caravan' }]}
/>

<div class="via-secondary/5 relative bg-linear-to-b from-white to-white py-16">
  <div class="absolute inset-0 -z-10 overflow-hidden">
    <svg
      class="stroke-secondary/20 absolute top-0 left-[50%] h-full w-full -translate-x-1/2"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="caravan-pattern"
          width="200"
          height="200"
          x="50%"
          y="0"
          patternUnits="userSpaceOnUse"
        >
          <path d="M100 200V.5M.5 .5H200" fill="none" stroke-width="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#caravan-pattern)" />
    </svg>
  </div>

  <div class="relative container mx-auto px-4">
    <!-- Caravan grid - 2 cards per row on large screens -->
    <div class="grid grid-cols-1 gap-16 lg:grid-cols-2">
      {#each data.stories as story}
        <div
          class="hover:border-primary/70 hover:shadow-primary/30 group flex flex-col items-stretch overflow-hidden rounded-xl border-2 border-transparent bg-white shadow-lg transition-shadow hover:shadow-xl md:flex-row"
        >
          <div class="flex items-center justify-center bg-gray-50 p-6 md:w-1/3">
            <a
              href={`/caravan/${story.slug}`}
              class="focus:ring-primary/60 block rounded-lg focus:ring-2 focus:outline-none"
            >
              {@html getCaravanImage(story.slug, story.name)}
            </a>
          </div>
          <div class="flex flex-col justify-between p-6 md:w-2/3">
            <div>
              <a
                href={`/caravan/${story.slug}`}
                class="focus:ring-primary/60 rounded focus:ring-2 focus:outline-none"
              >
                <h3
                  class="text-primary/90 group-hover:text-primary mb-2 text-2xl font-bold transition-colors"
                >
                  {story.name}
                </h3>
              </a>
              <p class="mb-4 text-gray-600">{@html resolver.render(story.content.descrizione)}</p>
              <div class="mb-4 flex flex-wrap gap-4">
                {#if story.content.misure}
                  <div class="rounded bg-gray-100 px-3 py-1 text-sm text-gray-700">
                    <span class="font-semibold">Misure:</span>
                    {story.content.misure}
                  </div>
                {/if}
                {#if story.content.posti_letto}
                  <div class="rounded bg-gray-100 px-3 py-1 text-sm text-gray-700">
                    <span class="font-semibold">Posti letto:</span>
                    {story.content.posti_letto}
                  </div>
                {/if}
              </div>
            </div>
            <div class="mt-4 flex gap-2">
              <a
                href={`/caravan/${story.slug}`}
                class="bg-secondary hover:bg-secondary/90 rounded-xl px-4 py-2.5 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl"
                title={`Vedi ${story.name}`}>Vedi caravan</a
              >
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>
