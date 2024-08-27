<template>
	<div class="generator mb-10rem">
		<h1 class="fs-head-1 mb-1em">The Generator</h1>
		<!-- <div class="left"></div> -->
		<div class="right dgridcenter">
			<!-- button to generate -->
			<button @click="generateDrill">Start</button>
			<!-- box to show result -->

			<div class="result__wrapper">
				<h3 class="fs-head-3 mb-5em">{{ currentDrill.name }}</h3>
				<p>{{ currentDrill.description }}</p>
			</div>
			<div class="arrow">
				<p>Scroll</p>
				<p>&darr;</p>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from "vue";

import drillData from "../data/sourceData.json";

// const sourceData = drillData;
const currentDrill = ref(drillData[2]);
// console.log(sourceData.length);
// console.log(currentDrill.value);
const generateRandomNumber = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};
// console.log(randomNumber);
const generateDrill = () => {
	// randomNumber.value = generateRandomNumber(0, sourceData.length);

	const randomNumber = generateRandomNumber(0, drillData.length - 1);
	console.log(randomNumber);
	currentDrill.value = drillData[randomNumber];
	console.log(currentDrill.value);
	// currentDrill.value = sourceData[generateRandomNumber(0, 11)];
	// console.log(currentDrill.value);
};
</script>

<style lang="css" scoped>
.generator {
	background-image: linear-gradient(
		to top left,
		var(--c-black) 5%,
		var(--c-accent-primary) 25%,
		var(--c-accent-secondary)
	);
	min-height: 50vh;
	text-align: center;
	padding-block: 15rem;
	gap: 5rem;
}
h1 {
	text-transform: uppercase;
	letter-spacing: 5px;
}
.result__wrapper {
	margin: 3rem;
}

.result__wrapper p {
	max-width: 50ch;
}
button {
	display: block;
	justify-self: center;
	background-color: var(--c-accent-secondary);
	color: var(--c-white);
	padding: 1em 2em;
	font-size: 2rem;
	transition: all 3ms ease;
	text-transform: uppercase;
	letter-spacing: 1px;
	font-family: monospace;
	margin-bottom: 5rem;
}

button:hover {
	background-color: var(--c-accent-secondary--dark);
	scale: 1.2;
	transition: all 0.3s ease;
}
.arrow {
	opacity: 0.5;
}
</style>

<!-- button
 ergebnis
 
 -->
