<script lang="ts">
  import type { PageData } from './$types';
  import PageHeader from '$lib/components/elements/PageHeader.svelte';
  import { richTextResolver } from '@storyblok/richtext';
  import Gallery from '$lib/components/Gallery.svelte';
  import { sbImg } from '$lib/storyblok';
  import ContactCTA from '$lib/components/elements/ContactCTA.svelte';

  export let data: PageData;

  const resolver = richTextResolver();

  // Annuncio non più attivo = venduto.
  $: venduto = !data.usato.content.attivo;

  const MIN_DESC = 120;
  const base = data.usato.content.sottotitolo
    ? `${data.usato.content.titolo} - ${data.usato.content.sottotitolo}`
    : data.usato.content.titolo;
  const fallback = ' | Scopri dettagli, immagini e informazioni complete sul nostro sito Caravan.';
  const seoDescription = base.length >= MIN_DESC ? base : (base + fallback).slice(0, 160);
</script>

<svelte:head>
  <title>{data.usato.content.titolo}{venduto ? ' (Venduto)' : ''} - Usato</title>
  <meta name="description" content={seoDescription} />
  <meta
    name="keywords"
    content="usato, occasioni, caravan usate, camper usati, {data.usato.content.titolo}"
  />

  <!-- Open Graph (Facebook) -->
  <meta property="og:type" content="article" />
  <meta property="og:title" content={data.usato.content.titolo} />
  <meta property="og:description" content={seoDescription} />
  {#if data.usato.content.immagine?.filename}
    <meta property="og:image" content={sbImg(data.usato.content.immagine.filename, 1200, 630)} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta
      property="og:image:alt"
      content={data.usato.content.immagine.alt || data.usato.content.titolo}
    />
  {/if}

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={data.usato.content.titolo} />
  <meta name="twitter:description" content={seoDescription} />
  {#if data.usato.content.immagine?.filename}
    <meta name="twitter:image" content={sbImg(data.usato.content.immagine.filename, 1200, 630)} />
    <meta
      name="twitter:image:alt"
      content={data.usato.content.immagine.alt || data.usato.content.titolo}
    />
  {/if}
</svelte:head>

<PageHeader
  title={data.usato.content.titolo}
  breadcrumbs={[
    { label: 'Home', href: '/' },
    { label: 'Usato', href: '/usato' },
    { label: data.usato.content.titolo },
  ]}
/>

<div class="container mx-auto px-4 pt-8 pb-16 lg:pt-16">
  <div class="grid grid-cols-12 lg:gap-8">
    <main class="col-span-12 min-w-0 overflow-hidden lg:col-span-9">
      {#if venduto}
        <div
          class="mb-8 flex items-center gap-3 rounded-xl border-l-4 border-red-600 bg-red-50 px-5 py-4 text-red-800"
        >
          <svg class="h-6 w-6 flex-none" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path
              fill-rule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z"
              clip-rule="evenodd"
            />
          </svg>
          <p class="font-semibold">Questo mezzo è stato venduto e non è più disponibile.</p>
        </div>
      {/if}

      {#if data.usato.content.sottotitolo}
        <h2 class="mb-8 text-2xl font-semibold text-gray-600">
          {data.usato.content.sottotitolo}
        </h2>
      {/if}

      {#if data.usato.content.marca || data.usato.content.anno}
        <div class="mb-8 flex flex-wrap gap-3">
          {#if data.usato.content.marca}
            <div class="flex items-center gap-2 rounded-xl bg-gray-100 px-4 py-2">
              <svg
                class="text-secondary h-5 w-5 flex-none"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.5 3A2.5 2.5 0 003 5.5v2.879a2.5 2.5 0 00.732 1.767l6.5 6.5a2.5 2.5 0 003.536 0l2.878-2.878a2.5 2.5 0 000-3.536l-6.5-6.5A2.5 2.5 0 008.38 3H5.5zM6 7a1 1 0 100-2 1 1 0 000 2z"
                  clip-rule="evenodd"
                />
              </svg>
              <span class="text-sm text-gray-500">Marca</span>
              <span class="font-semibold text-gray-900">{data.usato.content.marca}</span>
            </div>
          {/if}
          {#if data.usato.content.anno}
            <div class="flex items-center gap-2 rounded-xl bg-gray-100 px-4 py-2">
              <svg
                class="text-secondary h-5 w-5 flex-none"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z"
                  clip-rule="evenodd"
                />
              </svg>
              <span class="text-sm text-gray-500">Anno</span>
              <span class="font-semibold text-gray-900">{data.usato.content.anno}</span>
            </div>
          {/if}
        </div>
      {/if}

      {#if data.usato.content.immagine?.filename}
        <div class="relative mb-8 overflow-hidden rounded-xl">
          <img
            src={sbImg(data.usato.content.immagine.filename, 900, 450)}
            alt={data.usato.content.immagine.alt || data.usato.content.titolo}
            class={`aspect-2/1 h-auto w-full object-cover ${venduto ? 'grayscale' : ''}`}
          />
          {#if venduto}
            <div class="absolute inset-0 flex items-center justify-center bg-black/30">
              <span
                class="-rotate-12 rounded-xl bg-red-600 px-8 py-3 text-3xl font-extrabold tracking-wider text-white uppercase shadow-2xl md:text-4xl"
              >
                Venduto
              </span>
            </div>
          {/if}
        </div>
      {/if}

      {#if data.usato.content.descrizione}
        <div class=" mb-8 rounded-xl px-2 lg:py-8">
          <div
            class="prose prose-gray html max-w-none overflow-x-auto text-base leading-relaxed text-gray-700 [&_img]:max-w-full [&_pre]:overflow-x-auto [&_table]:w-full"
          >
            {@html resolver.render(data.usato.content.descrizione)}
          </div>
        </div>
      {/if}

      {#if data.usato.content.galleria && data.usato.content.galleria.length > 0}
        <div class="mb-8">
          <Gallery
            images={data.usato.content.galleria.map((img) => ({
              filename: img.filename,
              alt: img.alt || data.usato.content.titolo,
            }))}
          />
        </div>
      {/if}

      <div class="mt-12 mb-12 flex lg:mb-0">
        <a
          href="/usato"
          class="bg-secondary rounded-xl px-8 py-3 font-semibold text-white shadow-xl transition-all duration-300 hover:scale-105"
        >
          ← Torna all'Usato
        </a>
      </div>
    </main>

    <aside
      class="col-span-12 flex flex-col gap-6 lg:sticky lg:top-12 lg:col-span-3 lg:self-start lg:pt-16"
    >
      {#if data.latestUsati.length > 0}
        <div class="overflow-hidden rounded-xl bg-white shadow-lg">
          <div class="bg-secondary px-5 py-3">
            <h3 class="text-lg font-bold text-white">Altri Usati</h3>
          </div>
          <div class="divide-y divide-gray-100 p-4">
            {#each data.latestUsati as story}
              <a href="/usato/{story.slug}" class="group flex gap-3 py-3">
                {#if story.content.immagine?.filename}
                  <img
                    src={sbImg(story.content.immagine.filename, 120, 80)}
                    alt={story.content.immagine.alt || story.content.titolo}
                    class="h-16 w-20 shrink-0 rounded object-cover"
                  />
                {/if}
                <div>
                  <p
                    class="group-hover:text-secondary line-clamp-2 text-sm font-semibold text-gray-800 transition-colors"
                  >
                    {story.content.titolo}
                  </p>
                  {#if story.published_at}
                    <span class="mt-1 inline-block text-xs text-gray-400">
                      {new Date(story.published_at).toLocaleDateString('it-IT', {
                        day: '2-digit',
                        month: 'short',
                        year: 'numeric',
                      })}
                    </span>
                  {/if}
                </div>
              </a>
            {/each}
          </div>
        </div>
      {/if}
    </aside>
  </div>
</div>
<ContactCTA />
