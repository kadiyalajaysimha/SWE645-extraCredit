<template>
  <div class="cust-div">
    <h1>Hello Student</h1>
    <RouterLink class="btn btn-outline-dark cust-btn" to="/survey"
      >Take Survey</RouterLink
    >
    <RouterLink class="btn btn-outline-dark cust-btn" to="/surveyLists"
      >Other Surveys</RouterLink
    >
  </div>
  <RouterView />
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
export default {
  name: "HomeComponent",
};
</script>

<style scoped>
.cust-btn {
  margin-left: 12px;
}

.cust-div {
  text-align: center;
}
</style>
