<template>
<div class="col-10 p-3">
 <div class="card shadow" style="">
   <div class="card-body pb-1">
     <div class="row">
     <div class="col-2 text-center">
      <!-- <img :src="account.picture" alt="" class="rounded-circle mt-2" height="64"> -->
      </div>
      <div class="col-4">
     <!-- <p class="mt-3"><b>{{account.name}}</b></p> -->
     </div>
    <p class="card-text ms-4 mt-3">{{posts.body}}</p>
  <img :src="posts.imgUrl" class="rounded-bottom" alt="...">
  <h4 class="text-end mt-2 px-3 selectable text-danger">
    <i class="far fa-heart"></i>
    <i class="fas fa-heart visually-hidden"></i>
    </h4>
  
  </div>
</div>
</div>
</div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState.js'
import { postsService } from '../services/PostsService.js'
import Pop from '../utils/Pop.js'
export default {
  props: {
    posts: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    return {
      account: computed(() => AppState.account),
      async deletePost() {
        try {
          await postsService.deletePost(props.posts.id)
        } catch (error) {
          Pop.toast(error, 'error')
        }
      }

    }
  }
}
</script>

<style>

</style>