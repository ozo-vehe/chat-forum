<template>
  <div class="base-list-display">
    <div v-for="list in lists" :key="list.id">
      <router-link class="base-list" :to="{ name: 'ListView', params: { id: list.id } }">
        <div class="base-list-title">
          <h2>{{ list.name }}</h2>
          <p>{{ list.slug }}</p>
        </div>

        <div class="base-list-info">
          <p>
            <span class="base-list-sublist">Threads</span>
            <span class="base-list-sublist-length">{{ list.threads ? list.threads.length : 0 }}</span>
          </p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseList',
  props: [
    'lists'
  ]
}
</script>

<style scoped>
</style>
