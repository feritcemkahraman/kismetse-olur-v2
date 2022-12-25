<template>
  <div>
    <Navbar></Navbar>
    <router-view />
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";

export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style></style>
