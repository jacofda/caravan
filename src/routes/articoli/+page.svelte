<script lang="ts">
  import type { PageData } from './$types';
  import PageHeader from '$lib/components/elements/PageHeader.svelte';
  import ArticoloCard from '$lib/components/elements/ArticoloCard.svelte';

  export let data: PageData;

  // Hardcoded filters with color classes (used for tag coloring)
  const filters = [
    {
      label: 'Tutti',
      color: 'from-secondary via-secondary/70 to-secondary bg-linear-to-r text-white',
    },
    { label: 'Articolo', color: 'bg-secondary text-white' },
    { label: 'Mezzi Speciali', color: 'bg-primary text-white' },
  ];

  $: filteredStories = data.stories;
</script>

<PageHeader
  title="Articoli"
  subtitle="Scopri i nostri articoli e progetti speciali"
  breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Articoli' }]}
/>

<div class="container mx-auto px-4 py-16">
  <section class="pb-10">
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
