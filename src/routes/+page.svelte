<script>
	import { Avatar } from '@skeletonlabs/skeleton';
</script>

<div class="page-container">
	<header class="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4 items-center">
		<div class="order-2 md:order-1 max-w-2xl space-y-8">
			<h1 class="text-primary-color h1 font-bold">Hello, I'm Lukasz.</h1>
			<p class="text-secondary-color text-2xl">
				A seasoned frontend developer with over 20 years of experience in creating responsive and
				user-friendly web applications. With a strong passion for everything I do.
			</p>
			<div class="flex space-x-4">
				<a
					class="btn btnLink btn-icon"
					href="mailto:lukjut@gmail.com"
					target=""
					rel="noreferrer"
					title="Email"
					><i class="fa-solid fa-envelope" />
				</a>
				<a
					class="btn btnLink btn-icon"
					href="https://github.com/Luke1453"
					target="_blank"
					rel="noreferrer"
					title="Github"
					><i class="fa-brands fa-github" />
				</a><a
					class="btn btnLink btn-icon"
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

	<hr class="divider" />

	<section>
		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center md:text-left">
			<div class="space-y-1">
				<span class="font-heading-token text-primary-color text-7xl">7+</span>
				<p class="text-blue-color">Years Of Development Experience</p>
			</div>
		</div>
	</section>

	<hr class="divider" />
</div>

<style>
	.page-container {
		margin-left: auto;
		margin-right: auto;
		max-width: 80rem;
		padding: 2.5rem 1rem 2.5rem 1rem;
	}

	.text-primary-color {
		color: #172554;
	}
	.text-secondary-color {
		color: #43537d;
	}
	.text-blue-color {
		color: rgb(59, 130, 246);
	}

	.btnLink {
		color: rgb(29, 78, 216);
		background-color: rgb(193, 224, 249);
	}

	.btnLink:hover {
		background-color: rgb(68, 149, 255);
		color: white;
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
