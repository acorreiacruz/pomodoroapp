<template>
  <main class="main-container">
    <Header/>
    <router-view/>
  </main>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  name:"App",
  components:{
    Header
  }
}
</script>

