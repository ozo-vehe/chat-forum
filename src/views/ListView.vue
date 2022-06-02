<template>
  <div class="list-display" v-if="categoryForums">
    <h1>Category: {{ category.name }}</h1>
    <BaseListDisplay :lists="categoryForums" />

    <!-- <div class="base-list-display">
      <div v-for="forum in categoryForums" :key="forum.id">
        <router-link class="base-list" :to="{ name: 'ListView', params: { id: forum.id } }">
          <div class="base-list-title">
            <h2>{{ forum.name }}</h2>
            <p>{{ forum.slug }}</p>
          </div>

          <div class="base-list-info">
            <p>
              <span class="base-list-sublist">Threads</span>
              <span class="base-list-sublist-length">{{ forum.threads ? forum.threads.length : 0 }}</span>
            </p>
          </div>
        </router-link>
      </div>
    </div> -->
  </div>
</template>

<script>
import BaseListDisplay from '@/components/BaseListDisplay'
import { mapState } from 'vuex'

export default {
  name: 'ListView',
  components: {
    BaseListDisplay
  },
  data () {
    return {
      categoryId: null
    }
  },
  computed: {
    ...mapState({
      categories: 'categories',
      forums: 'forums'
    }),
    category () {
      return this.categories.find(category => category.id === this.categoryId)
    },
    categoryForums () {
      return this.forums.filter(forum => forum.categoryId === this.categoryId)
    }
  },
  beforeMount () {
    this.categoryId = this.$route.params.id
  }
}
</script>

<style scoped>
</style>
