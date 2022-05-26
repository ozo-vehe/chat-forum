<template>
  <div class="forum-view">
    <div class="forum-view-header">
      <h1>Forums</h1>
      <button class="new-topic">New Topic</button>
    </div>

    <div class="forums">
      <div class="forum" v-for="forum in forums" :key="forum.id">
        <div class="forum-title">
          <h2>{{ forum.name }}</h2>
          <p>{{ forum.description }}</p>
        </div>

        <div class="forum-info">
          <p>
            <span class="forum-threads">Threads</span>
            <span class="forum-threads-length">{{ forum.threads ? forum.threads.length : 0 }}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from '@/data.json'
export default {
  name: 'ForumsView',
  data () {
    return {
      forums: data.forums
    }
  }
}
</script>

<style scoped>
  .forum-view {
    padding: 20px 5% 10px 5%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
  }
  .forum-view-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .forum-view-header h1 {
    margin: 10px 0px;
  }
  .new-topic {
    background-color: #383838;
    color: #fff;
    padding: 10px 18px;
    font-size: 0.8rem;
    border: none;
  }

  .forums {
    margin-top: 10px;
  }
  .forum {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    margin: 15px 0px;
    box-sizing: border-box;
    box-shadow: 0px 0px 10px #d4d4d49d;
  }
  .forum h2 {
    margin: 10px 0px;
  }
  .forum p {
    text-transform: capitalize;
  }

  .forum-info {
    text-align: center;
    padding: 0px;
  }
  .forum-info p {
    margin: 0px;
    display: inline-block;
  }
  .forum-info p * {
    display: block;
  }
  .forum-threads {
    font-size: 0.9rem;
    margin: 10px 0px;
  }
  .forum-threads-length {
    font-size: 1.3rem;
    font-weight: 500;
  }
</style>
