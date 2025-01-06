<script>
  import Fa from 'svelte-fa';
	import { faCopy, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
	import { faDiscord } from '@fortawesome/free-brands-svg-icons';

  let copied = false;
  function copyFacet() {
    copied = true;
    navigator.clipboard.writeText('resrec:///U-brodokk/R-0AE34E94B31D945BFF262E34EB23BD1B8575C4F223831C34970454614805DCF8');
    setTimeout(() => copied = false, 1000);
  }
</script>

<div id="more" class="pt-16"></div>
<div class="hero">
  <div class="flex flex-wrap justify-center gap-9">
    <div class="card w-96 bg-base-300 shadow-xl">
      <div class="card-body py-5 items-center text-center">
        <h2 class="card-title my-5 text-2xl">About this website</h2>
        <p>
          This service is provided to you by GrayBoltWolf, Brodokk and Phil.
        </p>
        <p>
            Keep in mind this is a list of gathered events of differents Resonite communities. This means that it is not an exhaustive list of Resonite events.
        </p>
        <p>
          For now the two domains <a class="link" target="noreferrer" href="resonite.boltwolf.net">resonite.boltwolf.net</a> and <a class="link" target="noreferrer" href="resonite-communities.com">resonite-communities.com</a> are delivering the same service run by the same group of person.
        </p>
      </div>
    </div>

    <div class="card w-96 bg-base-300 shadow-xl">
      <div class="card-body py-5 items-center text-center">
        <h2 class="card-title my-5 text-2xl">Resonite Facet</h2>
        <p>We also offer a Resonite Facet, which you can add to your Dash. This way it is easier for you to view upcoming events.</p>
        <div class="card-actions justify-end">
          {#if !copied}
            <button class="btn btn-primary" on:click={()=>copyFacet()}><Fa icon={faCopy} size=lg /> Copy facet resonitedb url</button>
          {:else}
            <button class="btn btn-success"><Fa icon={faInfoCircle} size=lg /> Copied</button>
          {/if}
        </div>
      </div>
    </div>

    <div class="card w-96 bg-base-300 shadow-xl">
      <div class="card-body py-5 items-center text-center">
        <h2 class="card-title my-5 text-2xl">Missing events?</h2>
        <p>Do you think we are missing events and are not covering them? Let us know on our Discord Server!</p>
        <p>Feel also free to reach out to us through that, if you have any questions.</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary"><Fa icon={faDiscord} size=lg /> Join our Discord</button>
        </div>
      </div>
    </div>
  </div>
</div>

