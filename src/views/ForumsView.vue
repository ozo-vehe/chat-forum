<template>
  <div class="forum-view">
    <BaseListHeader listTitle="Forums" />

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
import BaseListHeader from '@/components/BaseListHeader'

export default {
  name: 'ForumsView',
  components: {
    BaseListHeader
  },
  data () {
    return {
      forums: data.forums
    }
  }
}
</script>

<style scoped>
</style>
