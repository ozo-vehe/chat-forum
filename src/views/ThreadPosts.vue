<template>
  <div class="thread-posts" v-if="thread">
    <div class="thread-title">
      <h1>{{ thread.title }}</h1>
      <router-link :to="{ name: 'EditThreadView', params: { id: thread.id } }">
        <button class="btn">Edit thread</button>
      </router-link>
    </div>

    <div class="thread-info">
      <p>
        <span>Thread Author: {{ getUser(thread.userId).name }}</span>
        <span>Contributors: {{ thread.contributors ? thread.contributors.length : 0 }}</span>
      </p>
      <p>Created: {{ thread.publishedAt }}</p>
    </div>

    <div class="first-post">
      <div class="user-img">
        <img :src="getUser(firstPost.userId).avatar" alt="">
      </div>
      <div class="user-post">
        <p>{{ firstPost.text }}</p>
      </div>
    </div>

    <div class="new-post">
      <div class="auth-user-img">
        <img :src="authUser.avatar" alt="">
      </div>
      <div class="auth-user-input">
        <textarea id="auth-user-text" :class="{ error: error }" v-model.lazy.trim="newPost" required></textarea>
        <button @click="post" class="add-post btn">Post</button>
      </div>
    </div>

    <div class="post-comments">
      <p>Comments: {{ thread.posts ? thread.posts.length - 1 : 0 }}</p>
    </div>

    <PostList :posts="otherPosts" />
  </div>
</template>

<script>
import data from '@/data.json'
import PostList from '@/components/PostList'
import { mapGetters, mapState } from 'vuex'

export default {
  name: 'ThreadPosts',
  components: {
    PostList
  },
  data () {
    return {
      posts: data.posts,
      threads: data.threads,
      users: data.users,
      threadId: null,
      newPost: null,
      error: false
    }
  },
  methods: {
    getUser (userId) {
      const user = this.users.find(user => user.id === userId)
      return user
    },
    threadPosts () {
      return this.posts.filter(post => post.threadId === this.threadId)
    },
    post () {
      const postId = '-Kdeivj' + Math.random().toString().slice(2, 9) + 'dcJruU'

      if (this.newPost) {
        this.error = false

        const post = {
          text: this.newPost,
          id: postId,
          publishedAt: 1594035908,
          threadId: this.threadId,
          userId: this.authUserId
        }
        this.$store.dispatch('addPost', post)
        this.$store.dispatch('addPostToThreads', post)
        this.$store.dispatch('addPostToContributors', post)

        this.newPost = null
      } else {
        this.error = true
      }
    }
  },
  computed: {
    ...mapState({
      authUserId: 'authUserId'
    }),
    ...mapGetters({
      authUser: 'authUser'
    }),
    thread () {
      return this.threads.find(thread => thread.id === this.threadId)
    },
    firstPost () {
      const post = this.threadPosts().shift()
      return post
    },
    otherPosts () {
      const post = this.threadPosts().slice(1, this.threadPosts().length)
      return post
    }
  },
  beforeMount () {
    this.threadId = this.$route.params.id
  },
  mounted () {
    console.log(data)
  }
}
</script>

<style scoped>
  .thread-posts {
    padding: 10px 5%;
    box-sizing: border-box;
  }
  .thread-title {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
  }

  .thread-info {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    text-align: left;
    margin: 10px 0px 30px 0px;
  }
  .thread-info p span {
    display: block;
    margin: 0px 0px 5px 0px;
  }

  .first-post,
  .new-post {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    gap: 30px;
    padding-bottom: 20px;
    margin-bottom: 20px;
  }
  .first-post {
    border-bottom: thin solid #b6b5b5;
  }
  .user-post {
    width: calc(100% - 90px);
  }
  .user-post p {
    margin-top: 0px;
  }

  .auth-user-img,
  .user-img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
  }
  .auth-user-img img,
  .user-img img {
    width: 100%;
  }
  .auth-user-input {
    width: 70%;
  }
  .new-post textarea {
    width: 100%;
    height: 170px;
    background: none;
    border-radius: 2px;
    border: thin solid #e0cccc;
    font-family: 'Lato';
    font-size: 0.9rem;
    padding-left: 5px;
    box-sizing: border-box;
    outline: none;
    margin-bottom: 10px;
  }
  .new-post textarea.error {
    border: thin solid #e42525ea;
  }
  .add-post {
    display: block;
    padding: 8px 25px;
  }

  .post-comments {
    margin-bottom: 40px;
    font-weight: 500;
    font-size: 1.01rem;
  }
</style>
