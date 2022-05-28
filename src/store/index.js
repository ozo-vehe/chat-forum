import { createStore } from 'vuex'
import data from '@/data'

export default createStore({
  state: {
    ...data,
    authUserId: 'u4r8XCziZEWEXsj2UIKNHBoDh0n2'
  },
  getters: {
    authUser (state) {
      return state.users.find(user => user.id === state.authUserId)
    }
  },
  mutations: {
    addPost (state, newPost) {
      state.posts.push(newPost)
    },
    addPostToThreads (state, { postId, threadId }) {
      const thread = state.threads.find(thread => thread.id === threadId)
      thread.posts.push(postId)
    }
  },
  actions: {
    addPost ({ commit }, post) {
      commit('addPost', post)
    },
    addPostToThreads ({ commit }, post) {
      commit('addPostToThreads', { threadId: post.threadId, postId: post.id })
    }
  },
  modules: {
  }
})
