<template>
    <div class="navigation">
      <div class="nav-bar">
        <div class="nav-logo">
          <img src="@/assets/logo.jpeg" alt="Vue School Logo">
          <p>Vue School <br> Masterclass </p>
        </div>
        <div class="nav-list">
          <ul>
            <li class="nav-home">
              <router-link :to="{ name: 'HomeView' }">Home</router-link>
            </li>
            <li class="nav-category">
              <router-link :to="{ name: 'CategoryView' }">Category</router-link>
            </li>
            <li class="nav-forums">
              <router-link :to="{ name: 'ForumsView' }">Forums</router-link>
            </li>
            <li class="nav-threads">
              <router-link :to="{ name: 'ThreadsView' }">Threads</router-link>
            </li>
          </ul>
        </div>
      </div>

      <div v-if="authUser" class="nav-user-info">
        <div class="nav-user-img">
          <img :src="authUser.avatar" :alt="`${authUser.username} profile picture`">
        </div>
        <p class="nav-user-username">{{ authUser.username }}</p>
      </div>

      <div v-else class="nav-login-signup">
            <button class="user-signin">Sign In</button>
            <button class="user-signup">Sign Up</button>
      </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'TheNavigation',
  computed: {
    ...mapGetters({
      authUser: 'authUser'
    })
  }
}
</script>

<style scoped>
    .navigation {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        padding: 0px 5%;
        background-color: #fff;
    }
    .nav-bar {
        display: flex;
        align-items: center;
    }

    .nav-logo {
        margin-right: 20px;
        display: flex;
        align-items: center;
    }
    .nav-logo img {
        width: 35px;
        height: 35px;
        margin-right: 10px;
    }

    .nav-list {
        margin: 0px 20px;
    }
    .nav-list ul {
        padding: 0px;
        display: flex;
    }
    ul li {
        list-style-type: none;
        margin: 0px 10px;
    }
    ul li a {
        padding: 7px 10px;
        text-decoration: none;
        color: black;
    }

    .nav-user-info {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
    }
    .nav-user-info * {
        cursor: pointer;
    }
    .nav-user-img {
        width: 35px;
        height: 35px;
        overflow: hidden;
        border-radius: 50%;
        margin: 0px 10px;
    }
    .nav-user-img img {
        width: 100%;
    }
</style>
