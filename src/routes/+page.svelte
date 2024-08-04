<script>
	import { Avatar } from '@skeletonlabs/skeleton';
</script>

<div class="mx-auto">
	<div class="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4 items-center">
		<div class="order-2 md:order-1 self-start max-w-2xl mt-6 space-y-8">
			<div>
				<h1 class="text-black text-4xl md:text-6xl font-bold">Bridging the gap between people and complexity.</h1>
				<p class="text-2xl mt-4">
					Translating complex requirements and building scalable, reliable business logic at DanskeBank, one of the biggest banks.
				</p>
			</div>
			<div class="flex space-x-6">
				<a
					class="btn-lg font-bold text-gray-800 p-0 hover:underline decoration-dashed decoration-2 decoration-primary"
					style="text-underline-offset: 6px; text-decoration-color: inherit;"
					href="https://github.com/Luke1453"
					target="_blank"
					rel="noreferrer"
					title="Github">Github</a
				>
				<a
					class="btn-lg font-bold text-gray-800 p-0 hover:underline decoration-dashed decoration-2 decoration-primary"
					style="text-underline-offset: 6px; text-decoration-color: inherit;"
					href="https://www.linkedin.com/in/lukjut/"
					target="_blank"
					rel="noreferrer"
					title="LinkedIn">LinkedIn</a
				>
			</div>
		</div>
		<div class="order-1 md:order-2 flex-none h-[30rem] w-[20rem] overflow-visible relative rounded-3xl">
			<img
				class="object-cover"
				decoding="async"
				src="avatar.jpg"
				alt="Avatar"
				style="display: block; width: 100%; height: 100%; border-radius: inherit; object-position: center center; image-rendering: auto;"
			/>
		</div>
	</div>

	<hr class="divider" />

	<section>
		<!-- <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-center md:text-left">
			<div class="space-y-1">
				<span class="statistic font-heading-token primary-color text-7xl">7+</span>
				<p class="blue-color" style="font-weight: 600;">Years Of Experience</p>
			</div>
		</div> -->
	</section>

	<hr class="divider" />

	<section id="myProjects" class="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8" data-svelte-h="svelte-1u9sn7t">
		<div class="variant-ringed-hollow p-4 md:p-8 space-y-4 dark bg-surface-backdrop-token">
			<i class="fa-solid fa-screwdriver-wrench text-4xl text-primary-500" />
			<h3 class="h3">Development</h3>
			<p class="secondary-color">
				I possess a wide range of skills that enable me to develop visually appealing and interactive user interfaces for web
				applications.
			</p>
		</div>
		<div class="variant-ringed-hollow p-4 md:p-8 space-y-4 bg-surface-backdrop-token">
			<i class="fa-solid fa-palette text-4xl text-primary-500" />
			<h3 class="h3">Design</h3>
			<p class="secondary-color">
				Over the years, I have honed my ability to create visually appealing interfaces that are both user-friendly and intuitive.
			</p>
		</div>
		<div class="variant-ringed-hollow p-4 md:p-8 space-y-4 bg-surface-backdrop-token">
			<i class="fa-solid fa-users text-4xl text-primary-500" />
			<h3 class="h3">User Experience</h3>
			<p class="secondary-color">
				I understand the importance of creating a seamless UX for end-users. Which includes a solid understanding user behavior.
			</p>
		</div>
	</section>

	<hr class="divider" />
</div>

<style>
	.divider {
		max-width: 100px;
		margin-top: 40px;
		margin-bottom: 40px;
		opacity: 0.5;
		border-color: var(--color-primary-500);
	}
</style>
