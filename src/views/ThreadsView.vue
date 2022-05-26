<template>
  <div class="thread-view">
    <div class="thread-view-header">
      <h1>Threads</h1>
      <button class="new-topic">New Topic</button>
    </div>

    <div class="threads">
      <div class="thread" v-for="thread in threads" :key="thread.id">
        <div class="thread-title">
          <h2>{{ thread.title }}</h2>
          <p>created: {{ thread.publishedAt }}</p>
        </div>

        <div class="thread-info">
          <p>
            <span class="thread-posts">Posts</span>
            <span class="thread-posts-length">{{ thread.posts.length }}</span>
          </p>

          <p>
            <span class="thread-posts">Contributors</span>
            <span class="thread-posts-length">{{ thread.contributors ? thread.contributors.length : 0 }}</span>
          </p>

          <p>
            <span class="thread-posts">Author</span>
            <span class="thread-posts-length">{{ threadAuthor(thread.userId).username }}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from '@/data.json'
export default {
  name: 'ThreadsView',
  data () {
    return {
      threads: data.threads,
      users: data.users
    }
  },
  methods: {
    threadAuthor (userId) {
      return this.users.find(user => user.id === userId)
    }
  }
}
</script>

<style scoped>
  .thread-view {
    padding: 20px 5% 10px 5%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
  }
  .thread-view-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .thread-view-header h1 {
    margin: 10px 0px;
  }
  .new-topic {
    background-color: #383838;
    color: #fff;
    padding: 10px 18px;
    font-size: 0.8rem;
    border: none;
  }

  .threads {
    margin-top: 10px;
  }
  .thread {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    margin: 15px 0px;
    box-sizing: border-box;
    box-shadow: 0px 0px 10px #d4d4d49d;
  }
  .thread h2 {
    margin: 10px 0px;
  }
  .thread p {
    text-transform: capitalize;
  }

  .thread-info {
    text-align: center;
    padding: 0px;
  }
  .thread-info p {
    margin: 0px;
    display: inline-block;
  }
  .thread-info p * {
    display: block;
  }
  .thread-info p:nth-child(2) {
    margin: 0px 25px;
  }
  .thread-posts {
    font-size: 0.9rem;
    margin: 10px 0px;
  }
  .thread-posts-length {
    font-size: 1.3rem;
    font-weight: 500;
  }
</style>
