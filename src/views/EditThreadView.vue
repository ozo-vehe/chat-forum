<template>
  <div class="edit-thread" v-if="threadId">
    <div class="edit-thread-header">
      <h1>Editing: {{ thread.title }}</h1>
    </div>

    <div class="edit-thread-content">
      <form @submit.prevent="editThread">
        <div class="thread-title">
          <label for="title">Title</label>
          <input type="text" id="title" v-model="form.title">
        </div>

        <div class="thread-content">
          <label for="content">Content</label>
          <textarea id="content" v-model="form.content"></textarea>
        </div>

        <div class="edit-thread-btn">
          <button class="btn cancel">Cancel</button>
          <button class="btn edit" type="submit">Edit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'EditThreadView',
  data () {
    return {
      threadId: null
    }
  },
  methods: {
    editThread () {
      this.$store.dispatch('editThread', { ...this.form })
    }
  },
  computed: {
    ...mapState({
      threads: 'threads',
      posts: 'posts'
    }),
    thread () {
      return this.threads.find(thread => thread.id === this.threadId)
    },
    form () {
      const thread = { ...this.thread }
      const threadPost = this.posts.find(post => post.id === thread.posts[0])
      return {
        title: thread.title,
        content: threadPost.text,
        threadId: thread.id
      }
    }
  },
  beforeMount () {
    this.threadId = this.$route.params.id
  }
}
</script>

<style scoped>
  .edit-thread {
    padding: 10px 5%;
  }

  form > div {
    margin: 20px 0px;
  }
  form label {
    display: block;
  }
  form input,
  form textarea {
    color: var(--black-color);
    width: 90%;
    height: 40px;
    padding-left: 5px;
    background: none;
    border-radius: 2px;
    border: thin solid #e0cccc;
    font-family: 'Lato';
    font-size: 0.9rem;
    box-sizing: border-box;
    outline: none;
    margin-bottom: 10px;
  }
  form textarea {
    height: 200px;
  }

  .edit-thread-btn {
    width: 90%;
    text-align: right;
  }
  .edit-thread-btn button {
    margin-left: 30px;
    width: 120px;
    border-radius: 3px;
  }
  .cancel {
    background: none;
    color: var(--black-color);
    border: thin solid var(--black-color);
  }
  .edit {
    background: #1991b6;
    color: #fff;
    border: thin solid #1991b6;
  }
</style>
