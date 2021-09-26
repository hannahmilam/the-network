<template>
<div class="container-fluid">
<div class="row justify-content-center">
   <PostForm />
    </div>

    <div class="row justify-content-center">
     <Post v-for="p in posts" :key="p.id" :post="p" />
    </div>
    <footer class="justify-content-center d-flex mb-3">
         <button :disabled="currentPage === 1" @click="getPreviousPage()" class="btn btn-primary selectable shadow me-2">
          Previous
        </button>
        <button @click="getNextPage()" class="btn btn-primary slectable shadow ms-2">
          Next
        </button>
    </footer>
</div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { postsService } from '../services/PostsService.js'
import Pop from '../utils/Pop.js'
import { AppState } from '../AppState.js'
export default {
  name: 'Home',
  setup() {
    onMounted(async() => {
      try {
        await postsService.getPosts()
      } catch (error) {
        Pop.toast(error.message, 'error')
      }
    })
    return {
      posts: computed(() => AppState.posts),
      like: computed(() => AppState.likes),
      post: computed(() => AppState.post),
      currentPage: computed(() => AppState.currentPage),

      async getPreviousPage() {
        try {
          await postsService.getPreviousPage()
        } catch (error) {
          Pop.toast(error.message, 'error')
          logger.log(error.message)
        }
      },
      async getNextPage() {
        try {
          await postsService.getNextPage()
        } catch (error) {
          Pop.toast(error.message, 'error')
          logger.log(error.message)
        }
    }
  }
  }
}
</script>

<style scoped lang="scss">


</style>
