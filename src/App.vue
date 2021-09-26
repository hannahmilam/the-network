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
main{
background: #dac4c7;
background: linear-gradient(90deg, #dac4c7 0%, #9a99ad 100%);
// background-image: url('https://images.unsplash.com/photo-1519750783826-e2420f4d687f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80');
}

</style>
