<template>
<div class="col-md-10 mt-3">
<div class="card shadow p-3">
  <div class="card-header bg-white pb-4">
  <form @submit.prevent="createPost()">
    <div class="row">
      <div class="col-md-2 text-center mb-2">
        <router-link :to="{name: 'Profile', params: {id: account.id}}" class="btn selectable">
      <img :src="account.picture" alt="" title="Profile Picture" class="rounded-circle" height="64">
        </router-link>
      </div>
      <div class="col-md-10">
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
    <i class="far fa-images selectable p-2" title="Add Photos/Videos" @click="showForm"> Photo/Video</i> 
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
        <h4>
          <i class="far fa-paper-plane selectable post" title="post"></i>
        </h4>
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
   props: {
    post: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const editable = ref({})
    return {
account: computed(() => AppState.account),
osts: computed(() => AppState.posts),
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
.post{
  color: #9A99AD;
  text-shadow: 2px 2px 4px #DAC4C7;
}
</style>