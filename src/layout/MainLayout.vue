<template>
  <div class="main-layout">
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

<style scoped>
.main-layout {
  background-image: url("/public/img/mesh-145.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>
