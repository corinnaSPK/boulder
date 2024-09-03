<template>
	<div class="intro">
		<div class="intro__wrapper" ref="introWrapper">
			<h1 class="fs-head-1 mb-3rem" ref="mainHead">
				Du willst mehr <span>Abwechslung</span> bei deinen Boulder-Sessions?
			</h1>
			<h3 class="fs-head-3 mb-7rem" ref="subHead">
				Dann lass dich mit neuen Übungen für dein Training überraschen
			</h3>
			<div class="arrow" ref="scrollHint">
				<p>Scroll</p>
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
	background-image: linear-gradient(
		to top left,
		var(--c-black) 5%,
		var(--c-accent-primary) 45%,
		var(--c-accent-secondary)
	);
	min-height: 100dvh;
	text-align: center;
	padding-block: 15rem;
	display: grid;
	place-content: center;
}
.intro__wrapper {
	padding-inline: 4rem;
	max-width: 600px;
	margin-inline: auto;
	max-width: 600px;
}
span {
	background-color: var(--c-accent-secondary);
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
