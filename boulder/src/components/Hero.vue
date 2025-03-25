<template>
	<div class="intro">
		<div class="head_one"><h2>The</h2></div>
		<div class="head_two"><h1>Boulder</h1></div>
	</div>
</template>

<script setup></script>

<style lang="css" scoped>
.intro {
	text-align: center;
	display: grid;
	place-content: center;
	grid-template-areas: "stack";

	overflow: hidden;
	height: 90vh;
	position: relative;
}

.intro > * {
	grid-area: stack;
	font-family: Arial, Helvetica, sans-serif;
	font-weight: 900;
}

.head_one {
	/* font-size: 60px; */
	/* font-size: calc(20px + 6 * ((100vw - 320px) / 680)); */
	-webkit-text-stroke-width: 1px;

	-webkit-text-stroke-color: rgba(144, 142, 142, 0.532);
	-webkit-text-stroke-color: var(--c-black-soft);
	-webkit-text-fill-color: transparent;
	position: absolute;
	left: 20px;
	top: -13px;
	/* font-size: clamp(5vw, 7vw, 150px); */
	font-family: "Poppins", sans-serif;
}
.head_two {
	/* font-size: calc(16px + 6 * ((100vw - 320px) / 680)); */
	/* font-size: 80px; */
	/* font-size: 15vw; */
	/* font-size: 8rem; */
	/* font-size: 8px; */
	z-index: 100;
}
.intro h1 {
	font-weight: 900;

	font-size: clamp(5vw, 20vw, 300px);
	color: var(--c-accent-secondary);
	font-family: "Poppins", sans-serif;

	text-transform: uppercase;
	font-weight: 900;
}
.intro h2 {
	font-size: clamp(9vw, 12vw, 150px);
}

.poppins-regular {
	font-family: "Poppins", sans-serif;
	font-weight: 400;
	font-style: normal;
}
</style>
