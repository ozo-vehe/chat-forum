<template>
  <div class="create-thread">
    <div class="create-thread-header">
      <h1>Creating a new thread</h1>
    </div>

    <div class="create-thread-content">
      <form>
        <div class="thread-title">
          <label for="forum">Forum: </label>
          <select :class="{ error: error }" id="forum" v-model="form.forumId">
            <option value="">Select Forum</option>
            <option v-for="forum in forums" :key="forum.id" :value="forum.id">{{ forum.name }}</option>
          </select>
        </div>

        <div class="thread-title">
          <label for="title">Title: </label>
          <input :class="{ error: error }" type="text" id="title" v-model="form.title">
        </div>

        <div class="thread-slug">
          <label for="slug">Slug: </label>
          <input type="text" id="slug" v-model="form.slug">
        </div>

        <div class="thread-content">
          <label for="content">Content: </label>
          <textarea :class="{ error: error }" id="content" v-model="form.text"></textarea>
        </div>

        <div class="create-thread-btn">
          <button @click.prevent="cancelCreateThread" class="btn cancel">Cancel</button>
          <button @click.prevent="createThread" class="btn create" type="submit">Save</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'CreateThreadView',
  data () {
    return {
      form: {
        title: '',
        text: '',
        slug: '',
        forumId: ''
      },
      error: false
    }
  },
  methods: {
    createThread () {
      if (this.form.title !== '' && this.form.text !== '' && this.forumId !== '') {
        const threadId = '-KqTive' + Math.random().toString().slice(2, 9) + 'PcJxuU'
        const postId = '-Vqeixj' + Math.random().toString().slice(2, 9) + 'irJoLU'

        const thread = {
          ...this.form,
          id: threadId,
          publishedAt: 1594035908,
          postId
        }
        const post = {
          text: this.form.text,
          id: postId,
          publishedAt: 1594035908,
          threadId,
          userId: this.authUserId
        }

        const createPost = () => {
          this.$store.dispatch('addPost', post)
          this.$store.dispatch('addPostToContributors', post)
        }

        this.$store.dispatch('createThread', thread)
        createPost()

        this.error = false
      } else {
        this.error = true
      }
    }
  },
  computed: {
    ...mapState({
      authUserId: 'authUserId',
      threads: 'threads',
      posts: 'posts',
      forums: 'forums'
    })
  },
  mounted () {
    console.log(this.threads)
  }
}
</script>

<style scoped>
  .create-thread {
    padding: 10px 5%;
  }

  form > div {
    margin: 20px 0px;
  }
  form label {
    display: block;
    margin-bottom: 5px;
  }
  form input,
  form textarea,
  form select {
    color: var(--black-color);
    width: 90%;
    height: 40px;
    padding-left: 5px;
    background: none;
    border-radius: 2px;
    border: thin solid #dddddd;
    font-family: 'Lato';
    font-size: 0.9rem;
    box-sizing: border-box;
    outline: none;
    margin-bottom: 10px;
  }
  form select {
    width: 250px;
    height: 40px;
  }
  form textarea {
    height: 200px;
  }

  .create-thread-btn {
    width: 90%;
    text-align: right;
  }
  .create-thread-btn button {
    margin-left: 30px;
    width: 120px;
    border-radius: 3px;
  }
  .cancel {
    background: none;
    color: var(--black-color);
    border: thin solid var(--black-color);
  }
  .create {
    background: #1991b6;
    color: #fff;
    border: thin solid #1991b6;
  }
  .error {
    border: thin solid red;
    border-radius: 3px;
  }
</style>
