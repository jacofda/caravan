<script lang="ts">
  import type { PageData } from './$types';
  import PageHeader from '$lib/components/elements/PageHeader.svelte';
  import { richTextResolver } from '@storyblok/richtext';

  export let data: PageData;

  const resolver = richTextResolver();
</script>

<svelte:head>
  <title>{data.caravan.name} - Caravan - Valugana | Officine Meccanica Giacomella</title>
  <meta
    name="description"
    content={`Scopri il caravan ${data.caravan.name} e le sue caratteristiche.`}
  />
  <meta name="keywords" content={`caravan, trasporti, ${data.caravan.name}, veicoli`} />
</svelte:head>

<PageHeader
  title={data.caravan.name}
  breadcrumbs={[
    { label: 'Home', href: '/' },
    { label: 'Caravan', href: '/caravan' },
    { label: data.caravan.name },
  ]}
/>

<div class="container mx-auto px-4 py-16">
  <main class="grid grid-cols-1 gap-8 lg:grid-cols-2">
    <div class="space-y-6">
      <!-- <div class="mx-auto max-w-md overflow-hidden rounded-lg bg-gray-50 shadow-lg">
        <img
          src={`/src/lib/assets/${data.caravan.content.pic}.png`}
          alt={data.caravan.name}
          class="mx-auto h-auto w-full object-cover"
        />
      </div> -->

      <!-- Description -->
      {#if data.caravan.content.descrizione}
        <div class="mx-auto max-w-2xl rounded-lg bg-white p-4 shadow-lg">
          <div class="prose prose-gray max-w-none text-base leading-relaxed text-gray-700">
            {@html resolver.render(data.caravan.content.descrizione)}
          </div>
        </div>
      {/if}

      <!-- Ruote and Numero Assi -->
      <!-- <div class="flex justify-center gap-4 text-lg">
        <div class="border-secondary h-28 min-w-38 rounded-lg border-2 bg-white text-center">
          <div class="flex h-[50%] items-center justify-center font-semibold text-gray-900">
            {data.trailer.content.ruote}
          </div>
          <div
            class="from-secondary via-secondary/50 to-secondary mb-2 flex h-[50%] items-center justify-center bg-linear-to-br text-white"
          >
            Ruote
          </div>
        </div>
        <div class="border-primary h-28 min-w-38 rounded-lg border-2 bg-white text-center">
          <div class="flex h-[50%] items-center justify-center text-lg font-semibold text-gray-900">
            {data.trailer.content.numero_assi}
          </div>

          <div
            class="from-primary via-primary/50 to-primary mb-2 flex h-[50%] items-center justify-center bg-linear-to-br text-black"
          >
            Numero Assi
          </div>
        </div>
      </div> -->
    </div>

    <!-- Right Section - Table -->
    <div class="overflow-hidden rounded-lg bg-white shadow-lg">
      <!-- Gradient Title Header -->
      <div
        class="from-secondary via-secondary/50 to-secondary relative overflow-hidden bg-linear-to-r p-6"
      >
        <div
          class="absolute inset-0 bg-linear-to-br from-transparent via-white/10 to-transparent"
        ></div>
        <div class="relative">
          <h2 class="text-2xl font-bold text-white drop-shadow-md">
            {data.caravan.name}
          </h2>
          <div class="mt-2 flex items-center gap-2">
            <!-- <span
              class="rounded-full bg-white/30 px-3 py-1 text-sm font-semibold text-white backdrop-blur-sm"
            >
              {data.trailer.content.numero_assi}
              {Number(data.trailer.content.numero_assi) === 1 ? 'Asse' : 'Assi'}
            </span> -->
            <!-- {#if Number(data.trailer.content.numero_assi) > 1}
              <div class="flex w-full flex-1 flex-col gap-1">
                <div
                  class="h-1 w-full rounded-full bg-linear-to-r from-white/50 to-transparent"
                ></div>
                <div
                  class="h-1 w-full rounded-full bg-linear-to-r from-white/50 to-transparent"
                ></div>
              </div>
            {:else}
              <div
                class="h-1 flex-1 rounded-full bg-linear-to-r from-white/50 to-transparent"
              ></div>
            {/if} -->
          </div>
        </div>
      </div>

      <table class="w-full">
        <tbody class="divide-y divide-gray-200">
          {#each Object.entries(data.caravan.content) as [key, value]}
            {#if !key.startsWith('_') && key !== 'component' && key !== 'name'}
              <tr class="transition-colors hover:bg-gray-50">
                <td class="p-6 font-medium text-gray-700 capitalize">
                  {key.replace(/_/g, ' ')}
                </td>
                <td class="p-6 text-gray-900">
                  {value}
                </td>
              </tr>
            {/if}
          {/each}
        </tbody>
      </table>
    </div>

    <div class="col-span-full"></div>
  </main>
</div>
