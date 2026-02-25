<script lang="ts">
  import type { PageData } from './$types';
  import PageHeader from '$lib/components/elements/PageHeader.svelte';
  import ArticoloCard from '$lib/components/elements/ArticoloCard.svelte';

  export let data: PageData;

  import { page } from '$app/stores';
  import { get } from 'svelte/store';
  import { goto } from '$app/navigation';

  // Derive activeFilter directly from $page.url.searchParams for reactivity
  $: activeFilter = $page.url.searchParams.get('activeFilter') || 'tutti';

  function gotoFilter(filter: string) {
    const url = new URL(window.location.href);
    if (filter === 'tutti') {
      url.searchParams.delete('activeFilter');
    } else {
      url.searchParams.set('activeFilter', filter);
    }
    goto(url.pathname + url.search, { replaceState: false });
  }

  // Get unique tags from all articles
  $: uniqueTags = Array.from(
    new Set(data.stories.map((story: any) => story.content.tag).filter(Boolean))
  );

  // Filter stories based on selected filter, reactive to $page
  $: filteredStories = (() => {
    if (activeFilter === 'tutti') {
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
      <button
        class={`rounded-full px-8 py-3 font-semibold transition-all duration-300 ${
          activeFilter === 'tutti'
            ? 'from-secondary via-secondary/50 to-secondary scale-105 bg-linear-to-r text-white shadow-xl'
            : 'bg-white/80 text-gray-700 shadow backdrop-blur-sm hover:scale-105 hover:shadow-lg'
        }`}
        on:click={() => gotoFilter('tutti')}
      >
        Tutti
      </button>
      {#each uniqueTags as tag}
        <button
          class={`rounded-full px-8 py-3 font-semibold transition-all duration-300 ${
            activeFilter === tag
              ? 'from-secondary via-secondary/50 to-secondary scale-105 bg-linear-to-r text-white shadow-xl'
              : 'bg-white/80 text-gray-700 shadow backdrop-blur-sm hover:scale-105 hover:shadow-lg'
          }`}
          on:click={() => gotoFilter(tag)}
        >
          {tag}
        </button>
      {/each}
    </div>

    <!-- Articles Grid -->
    <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {#each filteredStories as story}
        <ArticoloCard {story} />
      {/each}
    </div>

    {#if filteredStories.length === 0}
      <div class="py-12 text-center text-gray-500">
        <p class="text-xl">Nessun articolo trovato per questo filtro.</p>
      </div>
    {/if}
  </section>
</div>
