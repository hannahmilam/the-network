
<template>
  <div class="py-4">
    <div v-if="account.id">
      <img :src="account.picture" alt="" class="rounded-circle my-3" height="100">
      <h4>{{ account.name }}</h4>
      <p>{{ account.github }}</p>
      <p>{{ account.linkedin }}</p>
      <p>{{ account.resume }}</p>
    
      <button class="btn selectable text-danger lighten-30" @click="logout" title="Logout">
       <p class="selectable">Logout</p>
      </button>
    </div>

    <div v-else>
      <button class="btn selectable text-success lighten-30" @click="login">
        <b>
          Login
        </b>
      </button>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { AuthService } from '../services/AuthService.js'
import { AppState } from '../AppState.js'
import Pop from '../utils/Pop.js'
export default {
  setup() {
    return {
      account: computed(() => AppState.account),
      async login() {
        AuthService.loginWithRedirect()
      },
      async logout() {
        const yes = await Pop.confirm('Are you sure you want to logout', '', 'warning')
        if (!yes) { return }
        AuthService.logout({ returnTo: window.location.origin })
      }
    }
  }
}
</script>

<style>
</style>