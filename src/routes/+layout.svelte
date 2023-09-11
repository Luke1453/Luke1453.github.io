<script>
	import '../app.postcss';

	import { AppShell, AppBar, Avatar } from '@skeletonlabs/skeleton';
	import ThemeSwitch from '$lib/themeSwitch.svelte';
</script>

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

			(title)

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
</style>
