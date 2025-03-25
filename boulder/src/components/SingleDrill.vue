<template>
	<div class="drill dgridcenter">
		<h3 class="fs-head-3 mb-5em"><span>| </span>{{ drill.name }}</h3>
		<p>{{ drill.description }}</p>
	</div>
</template>

<script setup>
const { drill } = defineProps(["drill"]);
</script>

<style lang="css" scoped>
.drill {
	/* border-left: 1px solid var(--c-accent-secondary); */
	border: 1px solid var(--c-accent-secondary);
	border: 1px solid var(--c-black);
	/* border-radius: 15px; */
	padding: 3rem;
	justify-self: center;

	width: 300px;
}
h3 {
	font-family: "Poppins", sans-serif;
	font-weight: 700;
}

p {
	max-width: 60ch;
	/* color: var(--c-white-soft); */
}
span {
	color: var(--c-accent-secondary);
}
</style>
