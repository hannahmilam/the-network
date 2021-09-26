<template>
 <div class="container-fluid">
  <Profile />
  </div>
  <footer class="justify-content-center d-flex mb-3">
     <button :disabled="currentPage === 1" @click="getPreviousPage()" class="btn btn-primary selectable shadow me-2">
          Previous
        </button>
        <button @click="getNextPage()" class="btn btn-primary slectable shadow ms-2">
          Next
        </button>
    </footer>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
import Pop from '../utils/Pop'
import { logger } from '../utils/Logger'
import { profilesService } from '../services/ProfilesService'
import { useRoute } from 'vue-router'


export default {
  setup() {
   const route = useRoute()
    return {
    currentPage: computed(() => AppState.currentPage),
      async getPreviousPage() {
        try {
          await profilesService.getPreviousPage(route.params.id)
        } catch (error) {
          Pop.toast(error, 'error')
          logger.log(error.message)
        }
      },
      async getNextPage() {
        try {
          await profilesService.getNextPage(route.params.id)
        } catch (error) {
          Pop.toast(error, 'error')
          logger.log(error.message)
        }
    }
    }
  }
}
</script>

<style>

</style>