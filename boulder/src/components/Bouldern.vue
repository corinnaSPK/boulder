<template>
	<div class="bouldern">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
			<path
				fill="#181818"
				fill-opacity="1"
				d="M0,288L288,128L576,192L864,224L1152,128L1440,288L1440,0L1152,0L864,0L576,0L288,0L0,0Z"
			></path>
		</svg>
		<div class="content">
			<h2 class="fs-head-2 uppercase mb-3rem">Was ist eigentlich Bouldern?</h2>
			<p>
				Bouldern ist eine spezielle Form des Kletterns. Es wird kein Seil und
				keine andere Absicherung genutzt. Man klettert bis zu einer Absprunghöhe
				von 4 Metern. Bouldern kann man im Freien an Felswändern und Blöcken, in
				den letzten Jahren sind auch zahlreiche Indoorhallen mit künstlichen
				Boulderwänden entstanden.
			</p>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style lang="css" scoped>
.bouldern {
	background-color: var(--c-accent-primary);
}
.content {
	max-width: 800px;
	margin-inline: auto;
	padding-inline: 1rem;
	padding: 5rem;
}
p {
	/* max-width: 50ch; */
	color: var(--c-white-soft);
}
@media (min-width: 400px) {
	.content {
		padding-inline: 5rem;
	}
}
</style>
