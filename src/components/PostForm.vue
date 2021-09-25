<template>
<div class="col-10 mt-3">
<div class="card shadow p-3">
  <div class="card-header bg-white pb-4">
  <form @submit.prevent="createPost()">
    <div class="row">
      <div class="col-2 text-center">
      <img :src="account.picture" alt="" class="rounded-circle" height="64">
      </div>
      <div class="col-4">
      <div class="form-group">
      <label for="body" class="sr-only">Post Body</label>
      <input type="text"
             class="form-control bg-light post-body"
             name="body"
             placeholder="What's on your mind..."
             v-model="editable.body"
              required
      >
      </div>
    </div>
    </div>
  </form>
  </div>
 
    <div class="card-body">
      <form @submit.prevent='createPost()'>
        <div class="row">
          <div class="col-6">
    <i class="far fa-images selectable p-2" @click="showForm"> Photo/Video</i> 
    <div class="form-group visually-hidden" id="imgUrl">
      <label for="title"></label>
      <input type="url"
             class="form-control bg-light"
             name="imgUrl"
             placeholder="add img url here..."
             v-model="editable.imgUrl"
            
      >
    </div>
    </div>

    <div class="col-6">
      <div class="form-group text-end">
        <button type="submit" class="btn btn-primary">
          <i class="far fa-paper-plane selectable"></i>
        </button>
      </div>
    </div>
    </div>
  </form>
      </div>
  </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import Pop from '../utils/Pop'
import { logger } from '../utils/Logger.js'
import { postsService } from '../services/PostsService.js'
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'

export default {
  setup() {
    const editable = ref({})
    return {
account: computed(() => AppState.account),
editable,
async createPost(){
 try {
    await postsService.createPost(editable.value)
    editable.value = {}
    Pop.toast('Post Added', 'success')
 } catch (error) {
  Pop.toast('unable to create post', 'error')
  logger.log(error)
 }
},
showForm(){
  document.getElementById('imgUrl').classList.toggle('visually-hidden')
}
    }
  }
}
</script>

<style scoped lang="scss">
.post-body{
  height: 5rem;
  width: 30rem;
}

</style>