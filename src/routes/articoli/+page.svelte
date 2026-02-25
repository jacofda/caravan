<script lang="ts">
  import type { PageData } from './$types';
  import PageHeader from '$lib/components/elements/PageHeader.svelte';
  import ArticoloCard from '$lib/components/elements/ArticoloCard.svelte';

  export let data: PageData;

  import { page } from '$app/stores';
  import { get } from 'svelte/store';
  import { goto } from '$app/navigation';

  // Derive activeFilter directly from $page.url.searchParams for reactivity
  $: activeFilter = $page.url.searchParams.get('activeFilter') || 'Tutti';

  function gotoFilter(filter: string) {
    const url = new URL(window.location.href);
    if (filter === 'Tutti') {
      url.searchParams.delete('activeFilter');
    } else {
      url.searchParams.set('activeFilter', filter);
    }
    goto(url.pathname + url.search, { replaceState: false });
  }

  // Hardcoded filters with color classes
  const filters = [
    {
      label: 'Tutti',
      color: 'from-secondary via-secondary/70 to-secondary bg-linear-to-r text-white',
    },
    { label: 'Articolo', color: 'bg-secondary text-white' },
    { label: 'Accessori', color: 'bg-tertiary text-white' },
    { label: 'Mezzi Speciali', color: 'bg-primary text-white' },
    { label: 'In Vendita', color: 'bg-quaternary text-white' },
  ];

  // Filter stories based on selected filter, reactive to $page
  $: filteredStories = (() => {
    if (activeFilter === 'Tutti') {
      return data.stories;
    }
    return data.stories.filter((s: any) => s.content.tag === activeFilter);
  })();
</script>

<PageHeader
  title="Articoli"
  subtitle="Scopri i nostri articoli e progetti speciali"
  breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Articoli' }]}
/>

<div class="container mx-auto px-4 py-16">
  <section class="pb-10">
    <!-- Filter buttons with gradient effects -->
    <div class="mb-12 flex flex-wrap justify-center gap-3">
      {#each filters as filter}
        <button
          class={`rounded-full px-8 py-3 font-semibold transition-all duration-300
            ${
              activeFilter === filter.label
                ? filter.color + ' scale-105 shadow-xl'
                : 'bg-white/80 text-gray-700 shadow backdrop-blur-sm hover:scale-105 hover:shadow-lg'
            }
          `}
          on:click={() => gotoFilter(filter.label)}
        >
          {filter.label}
        </button>
      {/each}
    </div>

    <!-- Articles Grid -->
    <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {#each filteredStories as story}
        <ArticoloCard
          {story}
          tagColor={filters.find((f) => f.label === (story.content.tag || 'Tutti'))?.color ||
            'bg-primary text-white'}
        />
      {/each}
    </div>

    {#if filteredStories.length === 0}
      <div class="py-12 text-center text-gray-500">
        <p class="text-xl">Nessun articolo trovato per questo filtro.</p>
      </div>
    {/if}
  </section>
</div>
