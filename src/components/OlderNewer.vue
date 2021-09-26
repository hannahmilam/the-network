<template>
  <button :disabled="currentPage === 1" @click="getPreviousPage()" class="btn border-none selectable shadow me-2">
          Previous
        </button>
        <button @click="getNextPage()" class="btn border-none shadow ms-2">
          Next
        </button>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { postsService } from '../services/PostsService'
import { logger } from '../utils/Logger'
import { AppState } from '../AppState'
export default {
  setup() {
    return {
      currentPage: computed(() => AppState.currentPage),

      async getPreviousPage() {
        try {
          await postsService.getPreviousPage()
        } catch (error) {
          Pop.toast('unable to get previous page', error)
          logger.log(error.message)
        }
      },
      async getNextPage() {
        try {
          await postsService.getNextPage()
        } catch (error) {
          Pop.toast('unable to get next page', error)
          logger.log(error.message)
        }
    }
      }
    }
}
</script>

<style>

</style>