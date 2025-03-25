<template>
	<div class="tricks">
		<h2>Tipps & Tricks</h2>
		<ul>
			<li v-for="trick in tricks" :key="trick.id">
				<div>
					<h3>
						<span>0{{ trick.id }}. </span>{{ trick.name }}
					</h3>
					<p>
						{{ trick.copy }}
					</p>
				</div>
			</li>
		</ul>
	</div>
</template>

<script setup>
const tricks = [
	{
		id: 1,
		name: "60/40",
		copy: "Teil deine Session in 60 zu 40 ein: 60 Prozent der Zeit trainierst du die Dinge, die du noch nicht gut kannst. 40  Prozent der Zeit verbringst du mit Bouldern, die dir gut liegen. Was du nicht übst, kannst du auch nicht lernen.",
	},
	{
		id: 2,
		name: "Denk nach!",
		copy: "Klappt etwas nicht, geh nicht sofort zum nächsten Boulder, sondern schau dir die Route noch mal neu an: Wo bist du herausgefallen? Wie war deine Position, was kannst du anders machen? Dann wieder ran an die Wand!",
	},
	{
		id: 3,
		name: "Denk neu!",
		copy: "Beim Bouldern gibt es immer wieder Routen oder einzelne Stellen, die man nicht mag. Meide diese nicht, weil du denkst, du schaffst es nicht. Versuch eher, den Gedanken umzudrehen und sieh es als Herausforderung. Stell dir das Gefühl vor, wenn du es geschafft hast und das Top erreichst.",
	},
	{
		id: 4,
		name: "Aufwärmen nicht vergessen",
		copy: "Überspring nicht das Aufwärmen. So werden deine Muskeln geschmeidiger und du beugst Verletzungen vor. Mit kalten Muskeln direkt in schwere Boulder reinzugehen ist ein sicherer Weg in den Muskelkater.",
	},
];
</script>

<style lang="css" scoped>
.tricks {
	margin-inline: auto;

	width: 80%;
	padding-block: 15rem;
}
h2 {
	font-family: "Poppins", sans-serif;
	font-weight: 900;
	font-size: var(--fs-head-2);
}
span {
	font-size: 1.8rem;
	color: var(--c-accent-secondary);
}
ul {
	list-style-type: none;
}
li {
	border-bottom: 1px solid var(--c-black-mute);
	padding-block: 3rem;
}
</style>
