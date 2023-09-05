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
</AppShell>
