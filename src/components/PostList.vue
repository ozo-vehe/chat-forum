<template>
  <div class="post-list">
    <div class="post" v-for="post in posts" :key="post.id">
      <div class="post-user-img">
        <img :src="getUser(post.userId).avatar" alt="Profile picture">
      </div>
      <div class="post-text">
        <p>{{ getUser(post.userId).username }} <span>{{ post.publishedAt }}</span> </p>
        <p>{{ post.text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import data from '@/data.json'

export default {
  name: 'PostList',
  props: [
    'posts'
  ],
  data () {
    return {
      users: data.users
    }
  },
  methods: {
    getUser (userId) {
      const user = this.users.find(user => user.id === userId)
      return user
    }
  }
}
</script>

<style scoped>
  .post-list {
    margin-top: 20px;
  }
  .post {
    margin: 20px 0px 50px 0px;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;
  }
  .post-user-img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
  }
  .post-user-img img {
    width: 100%;
  }
  .post-text {
    width: calc(100% - 80px);
  }
  .post-text p {
    margin-top: 0px;
  }
  .post-text span {
    margin-left: 7px;
  }
</style>
