<script lang="ts">
	import Fa from 'svelte-fa';
	import { faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons';

	const navItems = [
		{ href: '/#more', label: 'Info' },
		{ href: '/', label: 'Events' },
		{ href: '/streams', label: 'Streams' },
		{ href: '/communities', label: 'Communities' },
		{ href: '/news', label: 'News' }
	];
</script>

<nav id="navbar" class="navbar sticky top-0 z-50 h-16 bg-base-100">
	<div class="flex-1">
		<a href="/" class="btn btn-ghost">
			<img class="h-10" src="/logo.jpg" alt="EMF logo" />
		</a>
		<!-- svelte-ignore a11y-label-has-associated-control -->
		<div class="dropdown">
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<label tabindex="0" class="btn btn-ghost lg:hidden">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h8m-8 6h16"
					/></svg
				>
			</label>
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<ul
				tabindex="0"
				class="menu-compact menu dropdown-content mt-2 w-64 rounded-box bg-base-100 shadow"
			>
				{#each navItems as item}
					<li><a class="p-2 text-2xl" href={item.href}>{item.label}</a></li>
				{/each}
			</ul>
		</div>
		<ul class="menu menu-horizontal hidden px-1 lg:flex">
			{#each navItems as item}
				<li class="menu dropdown-content bg-base-100 lg:p-1">
					<a href={item.href}>{item.label}</a>
				</li>
			{/each}
		</ul>
	</div>
	<div class="flex-none">
		<ul class="menu menu-horizontal px-1">
			<li>
				<a target="noreferrer" href="https://discord.com/" title="Discord">
					<Fa icon={faDiscord} size="lg" />
				</a>
			</li>
			<li>
				<a
					target="noreferrer"
					href="https://github.com/Resonite-Community-Projects/resonite-events-frontend"
					title="Discord"
				>
					<Fa icon={faGithub} size="lg" />
				</a>
			</li>
		</ul>
	</div>
</nav>
