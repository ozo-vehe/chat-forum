<template>
  <div class="category-view">
    <BaseListHeader listTitle="Category" />

    <div class="categories">
      <div class="category" v-for="category in categories" :key="category.id">
        <div class="category-title">
          <h2>{{ category.name }}</h2>
          <p>{{ category.slug }}</p>
        </div>

        <div class="category-info">
          <p>
            <span class="category-forums">Forums</span>
            <span class="category-forums-length">{{ category.forums.length }}</span>
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
  name: 'CategoryView',
  components: {
    BaseListHeader
  },
  data () {
    return {
      categories: data.categories
    }
  }
}
</script>

<style scoped>
</style>
