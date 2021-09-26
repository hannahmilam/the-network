import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  account: {},

/** @type {import('.models/Post.js').Post[]} */
  posts: [],
  post: null,
  ads: [],
  likes: [],
  user: {},
  account: {},
  profile: {},
  currentPage: 1,
  totalPages: 1,
  postData: {},
  search: []
})
