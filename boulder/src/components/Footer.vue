<template>
	<div class="footer">
		<RouterLink to="/">Start</RouterLink>
		<RouterLink to="/datenschutz">Datenschutz</RouterLink>
		<RouterLink to="/impressum">Impressum</RouterLink>
	</div>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>

<style lang="css" scoped>
.footer {
	background-color: var(--c-black);
	padding: 4rem 2rem;
	font-size: 1.6rem;
	margin-top: auto;
	border-top: 1px solid var(--c-accent-secondary--dark);
}
a {
	padding-inline: 1rem;
}
</style>
