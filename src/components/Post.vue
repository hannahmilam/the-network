<template>
<div class="col-10 p-3">
 <div class="card shadow" style="">
   <div class="on-hover position-absolute" style="right: 1rem; top: 1rem" v-if="account.id == posts.creatorId">
       <i class="mdi mdi-delete f-20 selectable" @click="deletePost()"></i>
       <i class="mdi mdi-pencil f-20 selectable" @click="editPost()"></i>
        </div>
          <div class="card-body pb-1">
             <router-link :to="{name: 'Profile', params: {id: posts.creatorId}}" class="selectable">
            <img :src="posts.creator.picture" alt="" class="rounded-circle mt-2" height="64"> <b>{{posts.creator.name}}</b>
             </router-link>
            <p class="card-text ms-4 mt-3">{{posts.body}}</p>
            <img :src="posts.imgUrl" class="rounded img-fluid" alt="...">
           <h4 class="text-end text-danger mt-2 px-3">
          <i class="far fa-heart selectable"></i>
        <i class="fas fa-heart selectable visually-hidden"></i>
      </h4>
    </div>
  </div>
</div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState.js'
import { postsService } from '../services/PostsService.js'
import Pop from '../utils/Pop.js'
import { logger } from '../utils/Logger.js'
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
          const yes = await Pop.confirm('Are you sure you want to delete?')
          if(!yes){ return }
          await postsService.deletePost(props.posts.id)
          Pop.toast('Your post is deleted', 'success')
        } catch (error) {
          Pop.toast('unable to delete post', 'error')
          logger.log(error)
        }
      },
async editPost(){
try {
  await postsService.editPost()
} catch (error) {
  Pop.toast('unable to edit post', 'error')
  logger.log(error)
}
}
    }
  }
}
</script>

<style>

</style>