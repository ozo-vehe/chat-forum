<template>
  <div class="base-list-header">
    <h1>{{ listTitle }}</h1>
    <button class="btn">New Topic</button>
  </div>
</template>

<script>
export default {
  name: 'BaseListHeader',
  props: [
    'listTitle'
  ]
}
</script>

<style scoped>
</style>
