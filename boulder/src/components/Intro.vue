<template>
	<div class="intro">
		<div class="intro__wrapper">
			<h1 class="fs-head-1 mb-3rem">
				Du willst mehr <span>Abwechslung</span> bei deinen Boulder-Sessions?
			</h1>
			<h3 class="fs-head-3 mb-7rem">
				Dann lass dich mit unserem Generator inspirieren zu neuen Übungen
			</h3>
			<div class="arrow">
				<p>Scroll</p>
				<p>&darr;</p>
			</div>
		</div>
	</div>
</template>

<script setup></script>

<style lang="css" scoped>
.intro {
	background-image: linear-gradient(
		to top left,
		var(--c-black) 5%,
		var(--c-accent-primary) 45%,
		var(--c-accent-secondary)
	);
	min-height: 50vh;
	text-align: center;
	padding-block: 15rem;

	.intro__wrapper {
		max-width: 60vw;
		margin-inline: auto;
	}
	span {
		background-color: var(--c-accent-secondary);
		padding-inline: 1em;
	}
}
h1 {
	text-transform: uppercase;
}
.arrow {
	opacity: 0.5;
}
</style>
