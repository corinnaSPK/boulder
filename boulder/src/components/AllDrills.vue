<template>
	<div class="drills">
		<h2 class="fs-head-2">Alle Übungen</h2>

		<div class="drills__wrapper gridminmax">
			<SingleDrill
				v-for="drill in sourceData"
				:key="drill.id"
				:drill="drill"
			></SingleDrill>
		</div>
	</div>
</template>

<script setup>
import SingleDrill from "../components/SingleDrill.vue";
import drillData from "../data/sourceData.json";
const sourceData = drillData;
console.log(sourceData);
</script>

<style lang="css" scoped>
.drills {
	text-align: center;

	padding-block: 5rem;
	max-width: 1200px;
	margin-inline: auto;
}
.drills__wrapper {
	place-content: center;
	gap: 5rem;
	padding-inline: 5rem;
}
h2 {
	position: relative;
	margin-bottom: 8rem;
}
h2::after {
	content: "";
	display: block;
	width: 30%;
	height: 30px;
	/* background-color: var(--c-accent-primary); */
	background-image: linear-gradient(
		to bottom left,
		var(--c-accent-secondary--dark),
		var(--c-accent-primary)
	);
	position: absolute;
	bottom: -10px;
	left: 50%;
	transform: translateX(-50%);
	z-index: -1;
}
</style>
