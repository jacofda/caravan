<script lang="ts">
  import { sbImg } from '$lib/storyblok';

  export let story: any;
</script>

<a
  href="/usato/{story.slug}"
  class="group overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
>
  <!-- Image -->
  <div class="group relative h-72 bg-gray-200 md:h-60">
    {#if story.content.immagine?.filename}
      <img
        src={sbImg(story.content.immagine.filename, 600, 300)}
        alt={story.content.immagine.alt || story.content.titolo}
        class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
      />
    {/if}
    {#if story.content.anno}
      <div
        class="bg-secondary absolute top-4 right-4 rounded-xl px-4 py-2 text-sm font-semibold text-white shadow-lg"
      >
        {story.content.anno}
      </div>
    {/if}
  </div>

  <!-- Content -->
  <div class="p-6">
    {#if story.content.marca}
      <p class="text-secondary mb-1 text-sm font-semibold tracking-wide uppercase">
        {story.content.marca}
      </p>
    {/if}
    <h3 class="group-hover:text-secondary mb-2 text-xl font-bold text-gray-900 transition-colors">
      {story.content.titolo}
    </h3>
    {#if story.content.sottotitolo}
      <p class="line-clamp-1 text-gray-600">
        {story.content.sottotitolo}
      </p>
    {/if}
    {#if story.published_at}
      <p class="mt-3 text-xs text-gray-400">
        {new Date(story.published_at).toLocaleDateString('it-IT', {
          day: '2-digit',
          month: 'short',
          year: 'numeric',
        })}
      </p>
    {/if}
  </div>
</a>
