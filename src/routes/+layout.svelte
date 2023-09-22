<script lang="ts">
	import '../app.postcss';
	import { page } from '$app/stores';
	import ThemeSwitch from '$lib/themeSwitch.svelte';

	import {
		AppShell,
		AppBar,
		Avatar,
		initializeStores,
		Drawer,
		getDrawerStore,
		type DrawerSettings
	} from '@skeletonlabs/skeleton';

	initializeStores();
	const drawerStore = getDrawerStore();
	const drawerSettings: DrawerSettings = {
		id: 'menu-nav',
		position: 'top',
		bgBackdrop: 'bg-white/30',
		height: 'h-auto',
		padding: 'p-4',
		rounded: 'rounded-xl',
		opacityTransition: true
	};

	const links = [
		{ name: 'Home', path: '/' },
		{ name: 'About', path: '/about' },
		{ name: 'Projects', path: '/projects' }
	];

	function handleMenuClick() {
		drawerStore.open(drawerSettings);
	}
	function handleDrawerClose() {
		drawerStore.close();
	}
</script>

<Drawer on:backdrop={handleDrawerClose}>
	{#if $drawerStore.id === 'menu-nav'}
		<nav
			class="flex
          flex-col
          gap-2
          border-0
          border-surface-100-800-token
          bg-surface-50/50
          dark:bg-surface-900/50
          backdrop-blur-lg
          rounded-bl-container-token
          rounded-br-container-token
          md:rounded-token
          p-2
          shadow-xl
          nav"
		>
			{#each links as link}
				<a
					href={link.path}
					on:click={handleDrawerClose}
					class="btn md:btn-sm nav-button"
					class:nav-button-active={$page.url.pathname === link.path}>{link.name}</a
				>
			{/each}
		</nav>
	{:else}
		Drawer
	{/if}
</Drawer>
<AppShell class="w-full h-full flex flex-col overflow-hidden">
	<svelte:fragment slot="pageHeader">
		<AppBar
			gridColumns="grid-cols-3"
			slotDefault="place-self-center"
			slotTrail="place-content-end"
			background="bg-transparent"
		>
			<svelte:fragment slot="lead">
				<Avatar src="avatar.jpg" width="w-12" />
			</svelte:fragment>

			<section class="hidden md:block">
				<nav
					class="flex
          flex-row
          gap-2
          border-0
          border-surface-100-800-token
          bg-surface-50/50
          dark:bg-surface-900/50
          backdrop-blur-lg
          rounded-bl-container-token
          rounded-br-container-token
          md:rounded-token
          p-2
          shadow-xl
          nav"
				>
					{#each links as link}
						<a
							href={link.path}
							class="btn md:btn-sm nav-button"
							class:nav-button-active={$page.url.pathname === link.path}>{link.name}</a
						>
					{/each}
				</nav>
			</section>

			<section class="block md:hidden">
				<button class="btn variant-filled-primary mob-nav-button" on:click={handleMenuClick}>
					<i class="fa-solid fa-bars" />
					<span>Menu</span>
				</button>
			</section>

			<svelte:fragment slot="trail">
				<ThemeSwitch />
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>

	<slot />

	<svelte:fragment slot="pageFooter">
		<footer id="page-footer" class="footer flex-none">
			<footer class="bg-surface-50-900-token p-10 space-y-8 flex flex-col items-center">
				<div class="flex space-x-4">
					<a
						class="btn btn-link btn-icon"
						href="mailto:lukjut@gmail.com"
						target=""
						rel="noreferrer"
						title="Email"
						><i class="fa-solid fa-envelope" />
					</a>
					<a
						class="btn btn-link btn-icon"
						href="https://github.com/Luke1453"
						target="_blank"
						rel="noreferrer"
						title="Github"
						><i class="fa-brands fa-github" />
					</a><a
						class="btn btn-link btn-icon"
						href="https://www.linkedin.com/in/lukjut/"
						target="_blank"
						rel="noreferrer"
						title="LinkedIn"
						><i class="fa-brands fa-linkedin" />
					</a>
				</div>
				<p class="text-xs blue-color">© Copyright 2023. All rights reserved.</p>
			</footer>
		</footer>
	</svelte:fragment>
</AppShell>

<style>
	.footer {
		background-color: hsla(0, 0%, 100%, 1);
	}

	.blue-color {
		color: #3b82f6;
	}

	.btn-link {
		color: rgb(29, 78, 216);
		background-color: rgb(193, 224, 249);
	}
	.btn-link:hover {
		background-color: rgb(68, 149, 255);
		color: white;
	}

	.nav {
		background-color: rgba(255, 255, 255, 0.4);
	}

	.nav-drawer-background {
		backdrop-filter: blur(5px);
	}
	.nav-drawer-height {
		height: 10px;
	}

	.nav-button:hover {
		background-color: rgba(0, 110, 255, 0.2);
		color: blue;
	}

	.nav-button-active {
		background-color: #4496ff;
		color: white;
		font-weight: bold;
	}
	.nav-button-active:hover {
		background-color: #4496ff;
		color: white;
	}

	.mob-nav-button {
		background-color: #4496ff;
		color: white;
	}
</style>
