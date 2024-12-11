<template>
  <RouterView />
</template>

<script>
import HomeComponent from "./components/HomeComponent.vue";
import { RouterLink, RouterView } from "vue-router";
export default {
  name: "App",
  components: {
    HomeComponent,
  },
};
</script>

<style scoped></style>
