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
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
}
a {
	padding-inline: 1rem;
	background-color: transparent;
	margin-left: 0;
}
</style>
