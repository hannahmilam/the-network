<template>
     <div>
  <form @submit.prevent="searchTheNetwork()" class="bg-white rounded elevation-1">
    <div class="form-group d-flex align-items-center">
      <label for="search" class="sr-only"></label>
      <input v-model="query"
             type="text"
             name="search"
             required
             class="form-control bg-white border-0"
             placeholder="search"
      >
      <button class="btn px-2 py-0 selectable">
           <i class='mdi mdi-magnify'></i>
      </button>
    </div>
   </form>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { postsService } from '../services/PostsService.js'
import Pop from '../utils/Pop.js'
export default {
  setup() {
    const query = ref('')
    return {
      query,
      async searchTheNetwork() {
        try {
          await postsService.searchTheNetwork(query.value)
        } catch (error) {
          Pop.toast(error.message, 'error')
        }
      }
    }
  }
}
</script>

<style>

</style>