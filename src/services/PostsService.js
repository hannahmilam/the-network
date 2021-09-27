import { AppState } from "../AppState"
import { Post } from "../models/Post"
import { logger } from "../utils/Logger"
import { convertToQuery } from "../utils/Query"
import { api } from "./AxiosService"

class PostsService{

  async getPosts(query = '') {
    AppState.posts = []
    const res = await api.get('api/posts' + convertToQuery(query))
    logger.log(res.data.posts)
    AppState.posts = res.data.posts.map(p => new Post(p))
  }

async createPost(newPost){
  const res = await api.post('api/posts', newPost)
  logger.log('create post', res)
  AppState.posts.unshift(new Post(res.data))
}
async deletePost(postId) {
  const res = await api.delete('api/posts/' + postId)
  logger.log('delete res', res)
  AppState.posts = AppState.posts.filter(p => p.id !== postId)
}
async likePost(id) {
  const res = await api.post(`api/posts/${id}/like`)
  logger.log('likes', res)
  const i = AppState.posts.findIndex(p => p.id === id)
  AppState.posts.splice(i, 1, new Post(res.data))
  AppState.posts = [...AppState.posts]
}

async getPreviousPage() {
  AppState.posts = []
  AppState.postsData = {}
  AppState.currentPage--
  const res = await api.get(`api/posts?page=${AppState.currentPage}`)
  AppState.postsData = res.data
  AppState.posts = res.data.posts.map(p => new Post(p))
}
async getNextPage() {
  AppState.posts = []
  AppState.postsData = {}
  AppState.currentPage++
  const res = await api.get(`api/posts?page=${AppState.currentPage}`)
  AppState.postsData = res.data
  AppState.posts = res.data.posts.map(p => new Post(p))
}
async searchTheNetwork(query = {}) {
  const res = await api.get(`api/posts?query=${query}`)
  AppState.posts = res.data.posts.map(p => new Post(p))
}

}
export const postsService = new PostsService()