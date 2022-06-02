import { createStore } from 'vuex'
import data from '@/data'

export default createStore({
  state: {
    ...data,
    authUserId: 'ALXhxjwgY9PinwNGHpfai6OWyDu2'
  },
  getters: {
    authUser (state) {
      const user = state.users.find(user => user.id === state.authUserId)
      const userPosts = state.posts.filter(post => post.userId === state.authUserId)
      const postCount = userPosts.length
      const userThreads = state.threads.filter(thread => thread.userId === state.authUserId)
      const threadCount = userThreads.length

      return {
        ...user,
        postCount,
        threadCount
      }
    }
  },
  mutations: {
    addPost (state, newPost) {
      state.posts.push(newPost)
    },
    addPostToThreads (state, { postId, threadId }) {
      const thread = state.threads.find(thread => thread.id === threadId)
      thread.posts.push(postId)
    },
    addPostToContributors (state, { threadId }) {
      const thread = state.threads.find(thread => thread.id === threadId)
      if (thread.contributors && !thread.contributors.includes(state.authUserId)) {
        thread.contributors.push(state.authUserId)
      }
      if (!thread.contributors) {
        thread.contributors = [state.authUserId]
      }
    },
    editThread (state, form) {
      const thread = state.threads.find(thread => thread.id === form.threadId)
      thread.title = form.title

      const threadPost = state.posts.find(post => post.id === thread.posts[0])
      threadPost.text = form.content
    },
    editAuthUser (state, newUser) {
      const user = state.users.find(user => user.id === state.authUserId)
      user.name = newUser.name
      user.username = newUser.username
      user.bio = newUser.bio
    },
    createThread (state, thread) {
      const newThread = {
        ...thread,
        contributors: [state.authUserId],
        posts: [thread.postId],
        userId: state.authUserId
      }

      state.threads.push(newThread)
    }
  },
  actions: {
    addPost ({ commit }, post) {
      commit('addPost', post)
    },
    addPostToThreads ({ commit }, post) {
      commit('addPostToThreads', { threadId: post.threadId, postId: post.id })
    },
    addPostToContributors ({ commit }, post) {
      commit('addPostToContributors', { threadId: post.threadId })
    },
    editThread ({ commit }, form) {
      commit('editThread', form)
    },
    editAuthUser ({ commit }, newUser) {
      commit('editAuthUser', newUser)
    },
    createThread ({ commit }, thread) {
      commit('createThread', thread)
    }
  },
  modules: {
  }
})
