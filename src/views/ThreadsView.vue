<template>
  <div class="thread-view">
    <BaseListHeader listTitle="Threads" />

    <div class="threads">
      <div v-for="thread in threads" :key="thread.id">
        <router-link class="thread" :to="{ name: 'ThreadPosts', params: { id: thread.id } }">
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
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import data from '@/data.json'
import BaseListHeader from '@/components/BaseListHeader'

export default {
  name: 'ThreadsView',
  components: {
    BaseListHeader
  },
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
  a {
    color: #414141;
    text-decoration: none;
  }
  .thread-info p:nth-child(2) {
    margin: 0px 25px;
  }
</style>
