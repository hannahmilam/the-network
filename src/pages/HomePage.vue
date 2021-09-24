<template>
<div class="container-fluid">
<div class="row justify-content-center">
   <PostForm />
    </div>

    <div class="row justify-content-center">
     <Post v-for="p in posts" :key="p.id" :posts="p" />
    </div>
    <footer>
      <p class='text-center'>Prev | Next</p>
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
      posts: computed(() => AppState.posts)
    }
  }
}
</script>

<style scoped lang="scss">


</style>
