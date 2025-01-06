<script lang="ts">
  import Fa from 'svelte-fa';
  import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
</script>

<div class="hero">
  <div class="hero-content">
    <h1>News</h1>
  </div>
</div>

<div class="hero">
  <div class="hero-content">
    <h1>Changelog</h1>
  </div>
</div>
<div class="hero">
  <div class="hero-content max-w-md alert alert-info h-auto">
    <Fa icon={faInfoCircle} size=lg />
    <span>The changelog for the frontend can be found <a class="link" target="noreferrer" href="https://github.com/Resonite-Community-Projects/resonite-events-frontend/commits/main/">on GitHub</a> and for the backend source can be found <a class="link" target="noreferrer" href="https://github.com/Resonite-Community-Projects/community_events.resonite/commits/stable/">here</a>.</span>
  </div>
</div>
