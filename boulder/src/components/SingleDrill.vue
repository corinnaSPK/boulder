<template>
	<div class="drill dgridcenter">
		<h3 class="fs-head-3 mb-5em">
			{{ drill.name }}
		</h3>
		<p>
			{{ drill.description }}
		</p>
	</div>
</template>

<script setup>
const { drill } = defineProps(["drill"]);
</script>

<style lang="css" scoped>
.drill {
	/* border-left: 1px solid var(--c-accent-secondary); */
	border: 1px solid var(--c-accent-secondary);
	border-radius: 15px;
	padding: 3rem;
	justify-self: center;
	/* box-shadow: 3px 3px 50px var(--c-accent-secondary--dark); */
	background-color: var(--c-black-mute);
	width: 300px;
}
h3 {
	font-family: monospace;
	text-transform: uppercase;
	letter-spacing: 3px;
	position: relative;
	background-image: linear-gradient(
		to bottom left,
		var(--c-accent-secondary--dark),
		var(--c-accent-primary)
	);
}

p {
	max-width: 60ch;
	color: var(--c-white-soft);
}
</style>
