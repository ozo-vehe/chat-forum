<template>
  <div class="category-view">
    <div class="category-view-header">
      <h1>Categories</h1>
      <button class="new-topic">New Topic</button>
    </div>

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
export default {
  name: 'CategoryView',
  data () {
    return {
      categories: data.categories
    }
  }
}
</script>

<style scoped>
  .category-view {
    padding: 20px 5% 10px 5%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
  }
  .category-view-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .category-view-header h1 {
    margin: 10px 0px;
  }
  .new-topic {
    background-color: #383838;
    color: #fff;
    padding: 10px 18px;
    font-size: 0.8rem;
    border: none;
  }

  .categories {
    margin-top: 10px;
  }
  .category {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    margin: 15px 0px;
    box-sizing: border-box;
    box-shadow: 0px 0px 10px #d4d4d49d;
  }
  .category h2 {
    margin: 10px 0px;
  }
  .category p {
    text-transform: capitalize;
  }

  .category-info {
    text-align: center;
    padding: 0px;
  }
  .category-info p {
    margin: 0px;
  }
  .category-info p * {
    display: block;
  }
  .category-forums {
    font-size: 0.9rem;
    margin: 10px 0px;
  }
  .category-forums-length {
    font-size: 1.3rem;
    font-weight: 500;
  }
</style>
