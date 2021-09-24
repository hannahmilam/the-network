<template>
 <header>
    <Navbar />
  </header>
  <main class="container-fluid">
    <div class="row">
      <Sidebar class="col-md-2" />
   
      <div class="col-md-8 viewport p-0">
      
        <router-view />
        </div>
           <Ads class="col-md-2" />
      
    </div>
  </main>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
import Sidebar from './components/Sidebar.vue'
export default {
  components: { Sidebar },
  name: 'App',
  setup() {
    return {
      appState: computed(() => AppState)
    }
  }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";
.sidebar{
  height: 100vh;
}
.ads{
  height: 100vh;
}

</style>
