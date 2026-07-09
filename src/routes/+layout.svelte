<script lang="ts">
  import favicon from '$lib/assets/favicon.ico';
  import menuRimorchi from '$lib/assets/menu-rimorchi.png';
  import logoCaravan from '$lib/assets/logo-caravan.png';
  import logoRimorchi from '$lib/assets/logo-rimorchi.png';
  import Footer from '$lib/components/Footer.svelte';
  import { page } from '$app/state';
  import '../app.css';
  let { children } = $props();

  let mobileMenuOpen = $state(false);

  const toggleMenu = () => {
    mobileMenuOpen = !mobileMenuOpen;
  };

  const closeMenu = () => {
    mobileMenuOpen = false;
  };

  const links = [
    { name: 'Chi Siamo', href: '/chi-siamo' },
    { name: 'Caravan', href: '/caravan' },
    { name: 'Articoli', href: '/articoli' },
    { name: 'Usato', href: '/usato' },
    { name: 'Contatti', href: '/contatti' },
  ];

  // Link attivo: match esatto oppure su una sottopagina (es. /usato/regina-60).
  const isActive = (href: string) =>
    page.url.pathname === href || page.url.pathname.startsWith(href + '/');
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
  <title>Caravan su misura in Valsugana | Caravan OMG</title>
  <meta
    name="description"
    content="Benvenuto su Caravan, il sito dedicato ai caravan, articoli e informazioni utili."
  />
  <meta name="keywords" content="caravan, articoli, chi siamo, contatti, trasporti" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
</svelte:head>

<!-- Sticky Navbar with gradient -->
<nav class="sticky top-0 z-50 bg-white/80 shadow-lg backdrop-blur-sm">
  <!-- Decorative bottom border -->
  <div
    class="absolute right-0 bottom-0 left-0 h-1 bg-linear-to-r from-transparent via-white/50 to-transparent"
  ></div>

  <div class="container mx-auto px-4">
    <div class="flex items-center justify-between py-4">
      <!-- Logo -->
      <div class="shrink-0">
        <a
          href="/"
          title="Caravan OMG"
          class="block transition-transform hover:scale-105"
          onclick={closeMenu}
        >
          <img src={logoCaravan} alt="Officine Meccaniche Giacomella" class="h-12 w-auto md:h-16" />
        </a>
      </div>

      <!-- Desktop Menu -->
      <div class="hidden items-center space-x-8 lg:flex">
        {#each links as link}
          <a
            href={link.href}
            aria-current={isActive(link.href) ? 'page' : undefined}
            class={`font-semibold transition-all hover:scale-105 ${
              isActive(link.href)
                ? 'text-secondary underline decoration-2 underline-offset-8'
                : 'hover:text-tertiary'
            }`}
          >
            {link.name}
          </a>
        {/each}

        <a
          href="https://rimorchi.vsomg.it/"
          target="_blank"
          title="rimorchi OMG"
          class="rounded-xl bg-white/20 p-2 backdrop-blur-sm transition-all hover:scale-105 hover:bg-white/30"
        >
          <img src={menuRimorchi} alt="rimorchi OMG" class="h-4" />
        </a>
      </div>

      <!-- Mobile Hamburger Button -->
      <button
        onclick={toggleMenu}
        class="flex h-10 w-10 flex-col items-center justify-center space-y-1.5 rounded-xl bg-white/20 backdrop-blur-sm transition-all hover:bg-white/30 lg:hidden"
        aria-label="Toggle menu"
      >
        <span
          class={`h-0.5 w-6 bg-gray-700 transition-all ${mobileMenuOpen ? 'translate-y-2 rotate-45' : ''}`}
        ></span>
        <span class={`h-0.5 w-6 bg-gray-700 transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`}
        ></span>
        <span
          class={`h-0.5 w-6 bg-gray-700 transition-all ${mobileMenuOpen ? '-translate-y-2 -rotate-45' : ''}`}
        ></span>
      </button>
    </div>

    <!-- Mobile Menu -->
    {#if mobileMenuOpen}
      <div class="border-t border-white/20 py-4 lg:hidden">
        <div class="flex flex-col space-y-4">
          {#each links as link}
            <a
              href={link.href}
              onclick={closeMenu}
              aria-current={isActive(link.href) ? 'page' : undefined}
              class={`rounded-xl px-4 py-3 font-semibold transition-all ${
                isActive(link.href) ? 'bg-secondary text-white' : 'hover:bg-white/20'
              }`}
            >
              {link.name}
            </a>
          {/each}

          <a
            href="https://rimorchi.vsomg.it/"
            target="_blank"
            onclick={closeMenu}
            title="caravan OMG"
            class="flex items-center gap-3 rounded-xl bg-white/20 px-4 py-3 backdrop-blur-sm transition-all hover:bg-white/30"
          >
            <img src={logoRimorchi} alt="rimorchi OMG" class="h-8" />
            <span class="font-semibold text-white">Sezione Rimorchi</span>
          </a>
        </div>
      </div>
    {/if}
  </div>
</nav>

{@render children()}

<Footer />

