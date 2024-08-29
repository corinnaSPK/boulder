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
	/* background-image: linear-gradient(
		to top left,
		var(--c-black) 5%,
		var(--c-accent-primary) 45%,
		var(--c-accent-secondary)
	);
	 */
	gap: 5rem;
	min-height: 50vh;
	text-align: center;
	padding-block: 15rem;
	border-bottom: 3px solid var(--c-black-mute);
	/* border-bottom: 3px solid red; */
}
h1 {
	text-transform: uppercase;
	letter-spacing: 5px;
	text-align: center;
}
.result__wrapper {
	margin: 3rem;
}

.result__wrapper p {
	max-width: 50ch;
	color: var(--c-white-soft);
}
button {
	display: block;
	justify-self: center;
	background-color: var(--c-accent-secondary);
	/* border: 1px solid rgba(255, 255, 255, 0.449); */
	color: var(--c-white);
	padding: 1em 2em;
	border-radius: 100px;
	font-size: 2rem;
	transition: all 3ms ease;
	text-transform: uppercase;
	letter-spacing: 1px;
	font-family: monospace;
	margin-bottom: 5rem;
	transition: all 0.3s ease;
}

button:hover {
	background-color: var(--c-accent-secondary--dark);
	scale: 1.2;
	transition: all 0.3s ease;
}
</style>

<!-- button
 ergebnis
 
 -->
