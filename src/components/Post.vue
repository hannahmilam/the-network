<template>
<div class="col-md-10 p-3">
 <div class="card shadow" style="">
   <div class="on-hover position-absolute" style="right: 1rem; top: 1rem" v-if="account.id == post.creatorId">
       <i class="mdi mdi-delete f-20 selectable" @click="deletePost()"></i>
        </div>
        <div class="card-header bg-white">
          <div class="row">
            <div class="col-md-2">
            <router-link :to="{name: 'Profile', params: {id: post.creatorId}}" class="selectable">
              <img :src="post.creator.picture" alt="" class="rounded-circle mt-2" height="64">
             </router-link>
            </div>
            <div class="col-md-10 pt-3">
              <h6 class="m-0 p-0"><span>{{post.creator.name}}</span></h6>
              <small>
              {{ new Date(post.updatedAt).toDateString() }}
             </small>
            </div>
            <p class="card-text ms-4 mt-3">{{post.body}}</p>
          </div>
        </div>

          <div class="card-body m-0 p-0">
            <img :src="post.imgUrl" class="rounded post-img" alt="...">
          </div>
          
          <div class="card-footer text-end">
            <p class="mt-2">
          <i class="far fa-heart selectable text-danger" @click="likePost()">{{ post.likeIds.length }}</i>
        </p>
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
    post: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    return {
      account: computed(() => AppState.account),
      posts: computed(() => AppState.posts),
      async deletePost() {
        try {
          const yes = await Pop.confirm('Are you sure you want to delete?')
          if(!yes){ return }
          await postsService.deletePost(props.post.id)
          Pop.toast('Your post is deleted', 'success')
        } catch (error) {
          Pop.toast('unable to delete post', 'error')
          logger.log(error)
        }
      },
async likePost() {
    try {
      await postsService.likePost(props.post.id)
      Pop.toast('Liked!', 'success')
    } catch (error) {
      logger.log('⚠ LIKE_POST', 'error')
    }
}
    }
  }
}
</script>

<style scoped lang="scss">
.post-img{
 width: 100%;
}
</style>