<template>
  <div class="profile-card">
    <div class="auth-user-img">
      <img :src="authUser.avatar" :alt="`${authUser.username} profile picture `">
    </div>
    <div class="auth-user-name">
      <p>{{ authUser.name }}</p>
    </div>

    <div class="auth-user-activity-summary">
      <p class="post-count">Posts: {{ authUser.postCount }}</p>
      <p class="post-count">Threads: {{ authUser.threadCount }}</p>
    </div>

    <div class="auth-user-personal-info">
      <p class="auth-user-email">username: @{{ authUser.usernameLower }}</p>
      <p class="auth-user-bio"><span>bio: </span> <span>{{ authUser.bio ? authUser.bio : 'No bio at the moment' }}</span></p>
      <p class="auth-user-email">email: {{ authUser.email }}</p>
    </div>

    <div class="edit-profile-btn">
      <router-link :to="{ name: 'EditProfile' }">
        <button class="btn">Edit Profile</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileCard',
  props: [
    'authUser'
  ],
  mounted () {
    console.log(this.authUser)
  }
}
</script>

<style scoped>
  .profile-card {
    display: flex;
    flex-direction: column;
  }

  .auth-user-img {
    width: 250px;
    height: 250px;
    overflow: hidden;
    border-radius: 50%;
    margin: 0px auto;
    box-shadow: 0px 0px 10px #e7e7e76b;
  }
  .auth-user-img img {
    width: 100%;
  }

  .auth-user-name {
    text-align: center;
    font-size: 1.2rem;
  }

  .auth-user-activity-summary {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    font-size: 1.4rem;
    font-weight: 600;
  }

  .auth-user-personal-info {
    font-size: 1.1rem;
  }
  .auth-user-bio {
    display: flex;
    gap: 5px;
  }
  .auth-user-bio span:nth-child(2) {
    font-size: 1rem;
    line-height: 1.5;
  }

  .edit-profile-btn {
    text-align: center;
    margin-top: 40px;
  }
  .btn {
    background: #1991b6;
    color: #fff;
    border: thin solid #1991b6;
    border-radius: 3px;
    font-size: 1rem;
  }
</style>
