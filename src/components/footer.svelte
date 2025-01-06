<script>
  import Fa from 'svelte-fa'
  // import { faDiscord } from '@fortawesome/free-brands-svg-icons'
  import { faHeart } from '@fortawesome/free-solid-svg-icons'
</script>

<footer id="footer" class="footer footer-center p-10 text-base-content gap-2 h-24">
  <!-- <div class="grid grid-flow-col gap-7">
    <a
      target="noreferrer"
      href="https://discord.com/"
      title="Discord">
      <Fa icon={faDiscord} size=lg />
    </a>
  </div> -->
  <!-- <div>
    <p>
      <a class="link pr-4" href="/contact">Kontakt</a>
      <a class="link" href="/imprint">Impressum</a>
    </p>
  </div> -->
  <div>
    <p class="pb-5">
      2022 - { new Date().getFullYear() } <br>
      Made with <Fa class="inline text-red-600" icon={faHeart} /> by Brodokk, GrayBoltWolf and Phil. <br>
      Our service is not affiliated with Resonite or Yellow Dog Man Studios.
    </p>
  </div>
</footer>
