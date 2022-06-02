<template>
  <div class="auth-user-profile">
    <h1>Profile Page</h1>

    <div class="profile-activity">
      <div class="profile-summary">
        <ProfileCard v-if="!editProfile" :authUser="authUser" />
        <EditProfile v-else :authUser="authUser" />
      </div>

      <div class="auth-user-activity">
        <div class="activity-header">
          <h2>{{ authUser.username}}'s recent activities</h2>
          <p>
            <span v-if="showThreads">show posts</span>
            <span v-else>show threads</span>
          </p>
        </div>

        <div class="activity">
          <PostList :posts="authUserPosts" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProfileCard from '@/components/ProfileCard'
import PostList from '@/components/PostList'
import EditProfile from '@/components/EditProfile'
import { mapGetters, mapState } from 'vuex'

export default {
  name: 'ProfileView',
  components: {
    ProfileCard,
    PostList,
    EditProfile
  },
  props: [
    'editProfile'
  ],
  data () {
    return {
      showThreads: false
    }
  },
  computed: {
    ...mapState({
      authUserId: 'authUserId',
      posts: 'posts'
    }),
    ...mapGetters({
      authUser: 'authUser'
    }),
    authUserPosts () {
      return this.posts.filter(post => post.userId === this.authUserId)
    }
  }
}
</script>

<style scoped>
  .auth-user-profile {
    padding: 10px 5%;
  }
  .profile-activity {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
  }

  .profile-summary {
    width: 350px;
    padding: 10px 20px 30px 20px;
    box-sizing: border-box;
    background-color: #fff;
    border-radius: 3px;
    box-shadow: 0px 0px 2px #e7e7e76b;
  }

  .auth-user-activity {
    width: calc(100% - 400px);
  }
  .activity-header {
    border-bottom: thin solid #b6b5b5;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 50px;
  }
  .activity-header h2,
  .activity-header p {
    margin: 5px 10px 5px 0px;
  }
  .activity-header p {
    text-transform: capitalize;
    cursor: pointer;
    color: #1991b6;
  }
</style>
