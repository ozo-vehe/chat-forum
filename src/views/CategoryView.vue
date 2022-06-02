<template>
  <div class="category-view">
    <BaseListHeader listTitle="Category" />

    <div class="categories">
      <div v-for="category in categories" :key="category.id">
        <router-link class="category" :to="{ name: 'ListView', params: { id: category.id } }">
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
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import BaseListHeader from '@/components/BaseListHeader'
import { mapState } from 'vuex'

export default {
  name: 'CategoryView',
  components: {
    BaseListHeader
  },
  computed: {
    ...mapState({
      categories: 'categories'
    })
  }
}
</script>

<style scoped>
</style>
