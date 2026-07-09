<script lang="ts">
  import logoRimorchi from '$lib/assets/logo-rimorchi.png';
</script>

<footer class="relative overflow-hidden bg-gray-900 text-gray-300">
  <!-- Brand accent bar -->
  <div class="from-secondary via-primary to-secondary h-1 w-full bg-linear-to-r"></div>

  <!-- Subtle decorative glow -->
  <div
    class="bg-secondary/10 pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full blur-3xl"
    aria-hidden="true"
  ></div>
  <div
    class="bg-primary/10 pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full blur-3xl"
    aria-hidden="true"
  ></div>

  <div class="relative container mx-auto px-4 py-16">
    <div class="grid grid-cols-1 gap-12 md:grid-cols-3">
      <!-- Company Info -->
      <div class="space-y-5">
        <h3 class="relative inline-block text-lg font-bold text-white">
          Chi siamo
          <span class="bg-secondary absolute -bottom-2 left-0 h-0.5 w-10 rounded-full"></span>
        </h3>
        <p class="max-w-xs leading-relaxed text-gray-400">
          La ditta O.M.G. Valsugana: caravan su misura, riparazioni camper e installazioni
          personalizzate. L'eccellenza artigiana per la tua casa su ruote.
        </p>
      </div>

      <!-- Contact Info -->
      <div class="space-y-5">
        <h3 class="relative inline-block text-lg font-bold text-white">
          Info e contatti
          <span class="bg-secondary absolute -bottom-2 left-0 h-0.5 w-10 rounded-full"></span>
        </h3>
        <p class="text-sm font-semibold tracking-wide text-white/90">
          OFFICINE MECCANICHE GIACOMELLA
        </p>
        <ul class="space-y-3 text-gray-400">
          <li class="flex items-start gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
              class="fill-secondary mt-0.5 size-5 shrink-0"
            >
              <path
                d="M576 90.7L576 64.7L552.8 76.4L416.9 144.8L230.6 82.7L224.6 80.7L218.9 83.3L73.3 149.4L63.9 153.7L63.9 575.4L87.1 563.7L223 495.3L409.3 557.4L415.3 559.4L421 556.8L566.6 490.7L576 486.4L576 90.7zM432 173L544 116.6L544 465.8L432 516.6L432 173zM400 172.8L400 520.5L240 467.2L240 119.5L400 172.8zM208 467L96 523.4L96 174.2L208 123.4L208 467z"
              /></svg
            >
            <span>Frazione Tollo 6, 38055 Grigno (TN)</span>
          </li>
          <li class="flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
              class="fill-secondary size-5 shrink-0"
            >
              <path
                d="M208.4 106.7C205 98.7 196.2 94.4 187.8 96.6L181.1 98.4C127.9 113 86.1 163.1 98.2 221.4C131.6 382 258.1 508.4 418.7 541.9C476.9 554 527.1 512.2 541.6 458.9L543.4 452.2C545.7 443.8 541.4 435 533.3 431.6L440 392.7C432.9 389.8 424.8 391.8 419.9 397.7L383.3 442.4C378.6 448.1 370.7 449.9 364.1 446.7C289.1 411.1 229.1 349.1 196 272.7C193.2 266.1 195 258.5 200.6 254L242.2 219.9C248.1 215.1 250.2 206.9 247.2 199.8L208.4 106.7zM179.4 65.8C203.3 59.3 228.4 71.5 237.9 94.4L276.8 187.7C285.2 207.8 279.4 231.1 262.5 244.9L230.4 271.2C259.4 331.7 307.5 381.4 366.7 412.5L395.2 377.6C409 360.7 432.2 354.9 452.4 363.3L545.7 402.2C568.6 411.7 580.8 436.8 574.3 460.7L572.5 467.4C554.8 532.3 491.2 589.6 412.2 573.2C239.1 537.2 102.9 401 66.9 227.9C50.4 148.8 107.7 85.3 172.7 67.6L179.4 65.8z"
              /></svg
            >
            <a href="tel:+390461765169" class="hover:text-secondary transition-colors"
              >0461 765169</a
            >
          </li>
          <li class="flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
              class="fill-secondary size-5 shrink-0"
            >
              <path
                d="M80 128L64 128L64 512L576 512L576 128L80 128zM544 184L544 199.9L320 364.2L96 199.9L96 160L544 160L544 184zM544 239.6L544 480L96 480L96 239.6L310.5 396.9L320 403.8L329.5 396.9L544 239.6z"
              /></svg
            >
            <a
              href="mailto:giacomella.rimorchi@gmail.com"
              class="hover:text-secondary break-all transition-colors"
            >
              giacomella.rimorchi@gmail.com
            </a>
          </li>
        </ul>
      </div>

      <!-- Rimorchi Section -->
      <div class="space-y-5">
        <h3 class="relative inline-block text-lg font-bold text-white">
          Sezione Rimorchi
          <span class="bg-secondary absolute -bottom-2 left-0 h-0.5 w-10 rounded-full"></span>
        </h3>
        <a
          href="https://rimorchi.vsomg.it/"
          target="_blank"
          rel="noopener"
          class="ring-secondary/40 hover:ring-secondary group flex w-fit flex-col items-center gap-3 rounded-xl bg-white p-3 shadow-lg ring-1 transition-all hover:scale-105"
        >
          <img src={logoRimorchi} alt="OMG Rimorchi" class="h-10" />
        </a>

        <div>
          <a
            href="https://www.iubenda.com/privacy-policy/68178934/cookie-policy"
            class="iubenda-nostyle text-sm text-gray-400 underline-offset-4 transition-colors hover:text-white hover:underline"
            title="Cookie Policy ">Cookie Policy</a
          ><script type="text/javascript">
            (function (w, d) {
              var loader = function () {
                var s = d.createElement('script'),
                  tag = d.getElementsByTagName('script')[0];
                s.src = 'https://cdn.iubenda.com/iubenda.js';
                tag.parentNode.insertBefore(s, tag);
              };
              if (w.addEventListener) {
                w.addEventListener('load', loader, false);
              } else if (w.attachEvent) {
                w.attachEvent('onload', loader);
              } else {
                w.onload = loader;
              }
            })(window, document);
          </script>
        </div>
      </div>
    </div>
  </div>

  <!-- Sub-footer -->
  <div class="relative border-t border-white/10 bg-gray-950/50 py-6">
    <div class="container mx-auto px-4">
      <div class="flex flex-col items-center justify-between gap-4 md:flex-row">
        <p class="text-center text-sm text-gray-500 md:text-left">
          © 2004-2026 OMG. Tutti i diritti riservati. P.IVA 02023670223
        </p>
        <div class="flex gap-3">
          <a
            href="https://www.facebook.com/OMG-Giacomella-Valsugana-Caravan-478178735617031/"
            target="_blank"
            rel="noopener"
            aria-label="Facebook"
            class="hover:bg-secondary hover:border-secondary flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-gray-300 transition-all hover:scale-110 hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
              class="size-4 fill-current"
            >
              <path
                d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
              /></svg
            >
          </a>
          <a
            href="https://www.google.com/search?q=rimorchi+vsomg&oq=rimorchi+vsomg"
            target="_blank"
            rel="noopener"
            aria-label="Google"
            class="hover:bg-secondary hover:border-secondary flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-sm font-bold text-gray-300 transition-all hover:scale-110 hover:text-white"
          >
            G
          </a>
          <a
            href="https://www.google.it/maps/place/O.M.G.+Officine+Meccaniche+Giacomella/@46.023444,11.5910473,17z/data=!3m1!4b1!4m2!3m1!1s0x4778934a79038233:0x208cae1f9749c7c4"
            target="_blank"
            rel="noopener"
            title="O.M.G. Officine Meccaniche Giacomella su Google Maps"
            aria-label="Google Maps"
            class="hover:bg-secondary hover:border-secondary flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-gray-300 transition-all hover:scale-110 hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
              class="size-4 fill-current"
            >
              <path
                d="M576 90.7L576 64.7L552.8 76.4L416.9 144.8L230.6 82.7L224.6 80.7L218.9 83.3L73.3 149.4L63.9 153.7L63.9 575.4L87.1 563.7L223 495.3L409.3 557.4L415.3 559.4L421 556.8L566.6 490.7L576 486.4L576 90.7zM432 173L544 116.6L544 465.8L432 516.6L432 173zM400 172.8L400 520.5L240 467.2L240 119.5L400 172.8zM208 467L96 523.4L96 174.2L208 123.4L208 467z"
              /></svg
            >
          </a>
          <a
            href="mailto:giacomella.rimorchi@gmail.com"
            title="email"
            aria-label="Email"
            class="hover:bg-secondary hover:border-secondary flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-gray-300 transition-all hover:scale-110 hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
              class="size-4 fill-current"
            >
              <path
                d="M80 128L64 128L64 512L576 512L576 128L80 128zM544 184L544 199.9L320 364.2L96 199.9L96 160L544 160L544 184zM544 239.6L544 480L96 480L96 239.6L310.5 396.9L320 403.8L329.5 396.9L544 239.6z"
              /></svg
            >
          </a>
        </div>
      </div>
    </div>
  </div>
</footer>
