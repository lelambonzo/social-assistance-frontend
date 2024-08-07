<template>
  <div>
    <header>
      <h1>Social Assistance Fund</h1>
    </header>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/add">Add Applicant</router-link>
    </nav>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
/* You can put global styles here if needed */
</style>
