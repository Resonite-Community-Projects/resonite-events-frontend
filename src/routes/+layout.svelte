<script lang="ts" module>
  export const load = async ({ url }) => ({ props: { url } });
</script>

<script lang="ts">
	import '../app.css';
	let { data, children } = $props();
	import Nav from '../components/nav.svelte';
  import Footer from '../components/footer.svelte';
  import PageTransition from '../components/PageTransition.svelte';
</script>

<main class="flex flex-col min-h-screen">
  <Nav />
  <PageTransition pathname={data.pathname}>
		{@render children()}
    <Footer />
  </PageTransition>
</main>

