<template>
	<div class="intro">
		<div class="intro__bg">
			<img src="../assets/climb-3040060_1280.jpg" alt="climbing hold" />
		</div>
		<div class="intro__wrapper" ref="introWrapper">
			<div class="intro__content">
				<h1 class="fs-head-1 mb-3rem" ref="mainHead">
					Du willst mehr <span>Abwechslung</span> bei deinen Boulder-Sessions?
				</h1>
				<h3 class="fs-head-3 mb-3rem" ref="subHead">
					Dann lass dich mit neuen Übungen für dein Training überraschen
				</h3>
			</div>
			<div class="arrow mb-3rem" ref="scrollHint">
				<!-- <p>Scroll</p> -->
				<p>&darr;</p>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, onMounted } from "vue";

import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const mainHead = ref(null);
const subHead = ref(null);
const scrollHint = ref(null);
onMounted(() => {
	let tl = gsap.timeline();

	tl.from(mainHead.value, {
		x: 200,
		opacity: 0,
		duration: 1,
		ease: "back.out(3.5)",
	});

	tl.from(subHead.value, {
		x: 200,
		opacity: 0,
		duration: 1,
		ease: "back.out(1.5)",
	});

	tl.from(scrollHint.value, {
		x: 200,
		opacity: 0,
		duration: 1,
		ease: "back.out(1.5)",
	});
});
</script>

<style lang="css" scoped>
.intro {
	/* 	background-image: linear-gradient(
		to top left,
		var(--c-black) 5%,
		var(--c-accent-primary) 45%,
		var(--c-accent-secondary)
	); */
	/* height: 90dvh; */
	text-align: center;
	/* padding-block: 15rem; */
	display: grid;
	/* place-content: center; */
	grid-template-areas: "stack";
	/* align-content: stretch; */
	overflow: hidden;
	width: 100%;
	height: 90vh;
	/* max-height: 95vh; */
	/* max-height: 500px; */
}
.intro__bg {
	width: 100%;
	/* width: 300px; */
	/* height: 300px; */
	height: 90vh;
	/* border: 4px solid green; */
	/* overflow: hidden; */
}

.intro > * {
	grid-area: stack;
}
.intro__wrapper {
	background-image: linear-gradient(
		to top left,
		rgba(24, 24, 24, 0.9) 5%,
		hsla(106, 82%, 11%, 0.9) 45%,
		rgba(49, 2, 67, 0.9)
	);
	display: grid;
	/* align-content: space-between; */
	place-content: center;
}
.intro__content {
	/* padding-block: 10vh; */
	max-width: 800px;
	margin-inline: auto;

	padding-block: 10vh;
	padding-inline: 5vw;
}

span {
	background-color: var(--c-accent-secondary--dark);
	/* border: 10px solid var(--c-accent-secondary--dark); */
	padding-inline: 1em;
}

h1 {
	text-transform: uppercase;
	letter-spacing: 5px;
}
.arrow {
	opacity: 0.5;
}
</style>
