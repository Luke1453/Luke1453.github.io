<script>
	import { Avatar } from '@skeletonlabs/skeleton';
</script>

<div class="page-container">
	<header class="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4 items-center">
		<div class="order-2 md:order-1 max-w-2xl space-y-8">
			<h1 class="primary-color text-4xl md:text-7xl font-bold">Hello, I'm Lukasz.</h1>
			<p class="secondary-color text-2xl">
				A seasoned frontend developer with over 20 years of experience in creating responsive and
				user-friendly web applications. With a strong passion for everything I do.
			</p>
			<div class="flex space-x-4">
				<a
					class="btn round-button btn-icon"
					href="mailto:lukjut@gmail.com"
					target=""
					rel="noreferrer"
					title="Email"
					><i class="fa-solid fa-envelope" />
				</a>
				<a
					class="btn round-button btn-icon"
					href="https://github.com/Luke1453"
					target="_blank"
					rel="noreferrer"
					title="Github"
					><i class="fa-brands fa-github" />
				</a><a
					class="btn round-button btn-icon"
					href="https://www.linkedin.com/in/lukjut/"
					target="_blank"
					rel="noreferrer"
					title="LinkedIn"
					><i class="fa-brands fa-linkedin" />
				</a>
			</div>
		</div>
		<Avatar
			class="order-1 md:order-2 rounded-full w-32 md:w-[400px] aspect-square overflow-hidden shadow-xl"
			src="avatar.jpg"
		/>
	</header>

	<hr class="divider divider-color" />

	<section>
		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-center md:text-left">
			<div class="space-y-1">
				<span class="statistic font-heading-token primary-color text-7xl">7+</span>
				<p class="blue-color" style="font-weight: 600;">Years Of Experience</p>
			</div>
		</div>
	</section>

	<hr class="divider divider-color" />

	<section class="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8" data-svelte-h="svelte-1u9sn7t">
		<div class="card variant-ringed-hollow p-4 md:p-8 space-y-4">
			<i class="card-icon fa-solid fa-screwdriver-wrench text-4xl text-primary-500" />
			<h3 class="h3 font-heading-token">Development</h3>
			<p class="secondary-color">
				I possess a wide range of skills that enable me to develop visually appealing and
				interactive user interfaces for web applications.
			</p>
		</div>
		<div class="card variant-ringed-hollow p-4 md:p-8 space-y-4">
			<i class="card-icon fa-solid fa-palette text-4xl text-primary-500" />
			<h3 class="h3 font-heading-token">Design</h3>
			<p class="secondary-color">
				Over the years, I have honed my ability to create visually appealing interfaces that are
				both user-friendly and intuitive.
			</p>
		</div>
		<div class="card variant-ringed-hollow p-4 md:p-8 space-y-4">
			<i class="card-icon fa-solid fa-users text-4xl text-primary-500" />
			<h3 class="h3 font-heading-token">User Experience</h3>
			<p class="secondary-color">
				I understand the importance of creating a seamless UX for end-users. Which includes a solid
				understanding user behavior.
			</p>
		</div>
	</section>

	<hr class="divider divider-color" />

	<section class="grid grid-cols-1 md:grid-cols-[1fr_auto] items-center gap-4">
		<p class="text-center md:text-left">Ready to begin on your first project?</p>
		<a href="mailto:lukjut@gmail.com" class="btn button md:btn-lg variant-filled-primary"
			><i class="fa-solid fa-envelope" /> <span>Contact Me</span></a
		>
	</section>
</div>

<style>
	.page-container {
		margin-left: auto;
		margin-right: auto;
		max-width: 80rem;
		padding: 5rem 1rem 5rem 1rem;
	}

	.statistic {
		line-height: 0.75;
	}

	.divider-color {
		border-color: #43537d;
		opacity: 0.3;
	}

	.primary-color {
		color: #172554;
	}
	.secondary-color {
		color: #43537d;
	}
	.blue-color {
		color: #3b82f6;
	}

	.card {
		--tw-ring-color: rgba(67, 83, 125, 0.3);
	}
	.card-icon {
		color: #3b82f6;
	}

	.round-button {
		color: rgb(29, 78, 216);
		background-color: rgb(193, 224, 249);
	}

	.round-button:hover {
		background-color: rgb(68, 149, 255);
		color: white;
	}

	.button {
		background-color: #4496ff;
		color: white;
		font-weight: bold;
	}

	.divider {
		max-width: 100px;
		margin: 40px 0px 40px 0px;
	}

	.font-heading-token {
		font-family: var(--theme-font-family-heading);
		font-weight: 700;
	}
</style>
