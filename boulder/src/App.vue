<template>
	<!--  <header>

    <div class="wrapper">

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header> -->
	<RouterView />
	<Footer></Footer>
</template>

<script setup>
import Footer from "./components/Footer.vue";

import { RouterLink, RouterView } from "vue-router";
</script>

<style scoped></style>
