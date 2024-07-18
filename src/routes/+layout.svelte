<script lang="ts">
	import '../app.postcss';
	import { AppBar } from '@skeletonlabs/skeleton';

	const home = { name: 'Home', path: '/', target: '_self' };
	const navLinks = [
		{ name: 'About', path: '/about', target: '_self' },
		{ name: 'My Projects', path: '/#myProjects', target: '_self' },
		{ name: 'Say Hi 👋', path: '/#sayHi', target: '_self' }
	];
	const projectLinks = [{ name: 'Chess', path: 'https://chess.devlake.xyz/', target: '_blank' }];
</script>

<div class="h-screen flex flex-col overflow-x-hidden">
	<!-- Header -->
	<div class="w-full z-50 absolute top-0 shadow-xl">
		<div class="!max-w-6xl mx-auto">
			<AppBar
				regionRowMain="md:place-items-center"
				gridColumns="grid-cols-2"
				slotLead="justify-self-start"
				slotDefault="justify-self-end"
				padding="p-4"
				background=""
			>
				<svelte:fragment slot="lead">
					<a href={home.path} target={home.target}>
						<div>
							<span class="text-black" style="display: block; font-weight: bold;">Lukasz Jutkewicz</span>
							<span style="display: block;">Full Stack Developer @ DanskeBank</span>
						</div>
					</a>
				</svelte:fragment>

				<section class="hidden md:block">
					<nav class="flex flex-row bg-transparent space-x-4">
						{#each navLinks as link}
							<a
								href={link.path}
								target={link.target}
								class="btn-lg font-bold p-0 hover:underline decoration-dashed decoration-2"
								style="text-underline-offset: 6px;">{link.name}</a
							>
						{/each}
					</nav>
				</section>

				<!-- <section class="block md:hidden">
            <button class="btn variant-filled-primary mob-nav-button" on:click={/handleMenuClick}>
            <i class="fa-solid fa-bars" />
            <span>Menu</span>
            </button>
            </section> -->
			</AppBar>
		</div>
	</div>

	<!-- Content Area -->
	<div class="!max-w-6xl mx-auto">
		<div id="content" class="mt-24 mx-auto flex flex-col">
			<!-- Page -->
			<div id="page" class="overflow-y-auto">
				<!-- Slot: Page Content -->
				<main id="page-content" class="flex-auto"><slot /></main>

				<!-- Page Footer -->
				<footer id="page-footer" class="footer flex-none">
					<footer class="bg-surface-50-900-token p-10 space-y-8 flex flex-col items-center">
						<div class="flex space-x-4">
							<a class="btn btn-link btn-icon" href="mailto:lukjut@gmail.com" target="" rel="noreferrer" title="Email"
								><i class="fa-solid fa-envelope" />
							</a>
							<a class="btn btn-link btn-icon" href="https://github.com/Luke1453" target="_blank" rel="noreferrer" title="Github"
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
			</div>
		</div>
	</div>
</div>

<!-- <Drawer on:backdrop={handleDrawerClose}>
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
          shadow-xl"
		>
			{#each links as link}
				<a
					href={link.path}
          target={link.target}
					on:click={handleDrawerClose}
					class="btn md:btn-sm nav-button"
					class:nav-button-active={$page.url.pathname === link.path}>{link.name}</a
				>
			{/each}
		</nav>
	{:else}
		Drawer
	{/if}
</Drawer> -->
