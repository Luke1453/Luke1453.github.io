<script lang="ts">
	import '../app.postcss';
	import { goto, afterNavigate } from '$app/navigation';
	import { AppBar } from '@skeletonlabs/skeleton';

	afterNavigate(() => {
		window.scrollTo(0, 0);
	});

	const home = { name: 'Home', path: '/' };
	const navLinks = [
		{ name: 'About', path: '/about' },
		{ name: 'My Projects', path: '/#myProjects' },
		{ name: 'Say Hi 👋', path: '/#contact' }
	];
	const projectLinks = [{ name: 'Chess', path: 'https://chess.devlake.xyz/', target: '_blank' }];
</script>

<div class="h-screen flex flex-col overflow-x-hidden background">
	<!-- Header -->
	<div class="w-full z-50 absolute top-0 shadow-xl background">
		<div class="!max-w-6xl px-16 mx-auto">
			<AppBar
				regionRowMain="md:place-items-center"
				gridColumns="grid-cols-2"
				slotLead="justify-self-start"
				slotDefault="justify-self-end"
				padding="py-4"
				background="bg-transparent"
			>
				<svelte:fragment slot="lead">
					<button on:click={() => goto(home.path)} class="text-left">
						<div>
							<span class="text-black" style="display: block; font-weight: bold;">Lukasz Jutkewicz</span>
							<span style="display: block;">Full Stack Developer @ DanskeBank</span>
						</div>
					</button>
				</svelte:fragment>

				<section class="hidden md:block">
					<nav class="flex flex-row bg-transparent space-x-4">
						{#each navLinks as link}
							<button
								on:click={() => goto(link.path)}
								class="btn-lg font-bold p-0 hover:underline decoration-dashed decoration-2 decoration-primary"
								style="text-underline-offset: 6px; text-decoration-color: inherit;">{link.name}</button
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
		<div id="content" class="mt-20 mx-auto flex flex-col">
			<!-- Page -->
			<div id="page" class="overflow-y-auto">
				<!-- Slot: Page Content -->
				<main id="page-content" class="flex-auto my-8 overflow-x-visible"><slot /></main>

				<!-- Page Footer -->
				<footer id="contact" class="bg-transparent px-16 mx-10 pb-6 flex flex-col items-center">
					<div class="flex flex-col pb-8">
						<p class="text-center pb-8 font-bold text-2xl">Ready to begin your project?</p>
						<a
							href="mailto:lukjut@gmail.com"
							class="btn button self-center md:btn-xl bg-primary-200 text-primary-500 hover:text-white hover:bg-primary-500"
							><i class="fa-solid fa-envelope" /> <span>Contact Me</span></a
						>
					</div>

					<div class="flex space-x-8">
						<a
							class="btn-icon btn-icon-lg bg-primary-200 text-primary-500 hover:text-white hover:bg-primary-500"
							href="https://github.com/Luke1453"
							target="_blank"
							rel="noreferrer"
							title="Github"
							><i class="fa-brands fa-github" />
						</a><a
							class="btn-icon btn-icon-lg bg-primary-200 text-primary-500 hover:text-white hover:bg-primary-500"
							href="https://www.linkedin.com/in/lukjut/"
							target="_blank"
							rel="noreferrer"
							title="LinkedIn"
							><i class="fa-brands fa-linkedin" />
						</a>
						<a
							class="btn-icon btn-icon-lg bg-primary-200 text-primary-500 hover:text-white hover:bg-primary-500"
							href="https://www.instagram.com/dziudaizm/"
							target=""
							rel="noreferrer"
							title="Instagram"
							><i class="fa-brands fa-instagram" />
						</a>
					</div>
					<p class="pt-24 text-sm">© Copyright 2024 Lukaš Jutkevič. All rights reserved.</p>
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
