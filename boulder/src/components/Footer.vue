<template>
	<div class="footer">
		<RouterLink to="/datenschutz">Datenschutz</RouterLink>
		<RouterLink to="/impressum">Impressum</RouterLink>
		<RouterLink to="/">Start</RouterLink>
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
}
</style>
