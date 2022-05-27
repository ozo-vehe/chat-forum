<template>
  <div class="thread-posts">
    <div class="thread-title">
      <h1>{{ threadTitle }}</h1>
      <button class="btn">Edit thread</button>
    </div>

    <div class="thread-first-post">
      <div class="post-user-img">

      </div>
      <div class="first-post">
        <p class="post-user-username">{{ firstPostUsername }} <span>{{ publishedAt }}</span></p>
        <p class="first-post-text">{{ firstPostText }}</p>
      </div>
    </div>

    <div class="new-post">
      <div class="auth-user-img">

      </div>
      <div class="auth-user-input">
        <textarea id="auth-user-text"></textarea>
        <button class="add-post btn">Post</button>
      </div>
    </div>

    <PostList :posts="threadPosts" />
  </div>
</template>

<script>
import data from '@/data.json'
import PostList from '@/components/PostList'

export default {
  name: 'ThreadPosts',
  components: {
    PostList
  },
  data () {
    return {
      posts: data.posts,
      threads: data.threads,
      threadId: null
    }
  },
  computed: {
    threadPosts () {
      return this.posts.filter(post => post.threadId === this.threadId)
    },
    threadTitle () {
      return this.threads.find(thread => thread.id === this.threadId).title
    }
  },
  beforeMount () {
    this.threadId = this.$route.params.id
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

  .new-post {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    border-bottom: thin solid #b6b5b5;
    padding-bottom: 20px;
    margin-bottom: 20px;
  }
  .new-post textarea {
    width: 400px;
    height: 150px;
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
  .add-post {
    display: block;
    padding: 8px 25px;
  }
</style>
