<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white px-3">
      <div class="d-flex flex-column align-items-center">
         <router-link :to="{ name: 'Home' }" class="navbar-brand btn lighten-30 selectable text-uppercase">
            The Network
          </router-link>
      </div>
  <div>
     
            <router-link class="btn btn-secondary" type="button" :to="{ name: 'Account' }">
              Account
            </router-link>
          
    </div>
   <div>
  <form @submit.prevent="" class="bg-white rounded elevation-1">
    <div class="form-group d-flex align-items-center">
      <label for="search" class="sr-only"></label>
      <input v-model="query"
             type="text"
             name="search"
             required
             class="form-control bg-white border-0"
             placeholder="search"
      >
      <button class="btn px-2 py-0 selectable" type="submit">
           <i class='mdi mdi-magnify'></i>
      </button>
    </div>
   </form>
    </div>
  </nav>
</template>

<script>
import { AuthService } from '../services/AuthService'
import { AppState } from '../AppState'
import { computed } from 'vue'
export default {
  setup() {
    return {
      user: computed(() => AppState.user),
      async login() {
        AuthService.loginWithPopup()
      },
      async logout() {
        AuthService.logout({ returnTo: window.location.origin })
      }
    }
  }
}
</script>

<style scoped>
.dropdown-menu {
  user-select: none;
  display: block;
  transform: scale(0);
  transition: all 0.15s linear;
}
.dropdown-menu.show {
  transform: scale(1);
}
.hoverable {
  cursor: pointer;
}
a:hover {
  text-decoration: none;
}
.nav-link{
  text-transform: uppercase;
}
.navbar-nav .router-link-exact-active{
  border-bottom: 2px solid var(--bs-success);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
.search-bar{
width: 15rem;
}
</style>
