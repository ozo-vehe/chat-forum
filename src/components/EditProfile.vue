<template>
  <div class="edit-profile">
    <div class="auth-user-img">
      <img :src="authUser.avatar" :alt="`${authUser.username} profile picture `">
    </div>
    <div class="auth-user-name">
      <p>{{ authUser.name }}</p>
    </div>

    <div class="edit-auth-user-details">
      <h3>Edit profile: </h3>

      <form>
        <div class="edit-auth-user-name">
          <label for="name">Name: </label>
          <input type="text" id="name" :class="{ error: error }" v-model="userDetails.name" required>
        </div>

        <div class="edit-auth-user-username">
          <label for="username">Username: </label>
          <input type="text" id="username" :class="{ error: error }" v-model="userDetails.username" required>
        </div>

        <div class="edit-auth-user-bio">
          <label for="bio">Bio: </label>
          <textarea id="bio" v-model="userDetails.bio"></textarea>
        </div>

        <div class="edit-profile-btn">
          <button @click.prevent="editProfile" class="save-edit btn">Save</button>
          <button @click.prevent="cancelEdit" class="cancel-edit btn">Cancel</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EditProfile',
  data () {
    return {
      userDetails: { ...this.authUser },
      error: false
    }
  },
  props: [
    'authUser'
  ],
  methods: {
    editProfile () {
      const editedDetails = {
        name: this.userDetails.name,
        username: this.userDetails.username,
        bio: this.userDetails.bio
      }
      if (editedDetails.name !== '' && editedDetails.username !== '') {
        this.error = false
        this.$store.dispatch('editAuthUser', editedDetails)
        this.$router.push({ name: 'ProfileView' })
      } else {
        this.error = true
      }
    },
    cancelEdit () {
      this.$router.push({ name: 'ProfileView' })
    }
  }
}
</script>

<style scoped>
  .edit-profile {
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

  form div {
    text-align: left;
    margin: 20px 0px;
  }
  form label {
    display: block;
    margin: 5px 0px;
  }
  form input,
  form textarea {
    outline: none;
    box-sizing: border-box;
    width: 100%;
    height: 40px;
    padding-left: 5px;
    font-size: 0.9rem;
    font-family: 'Lato';
    color: var(--black-color);
  }
  form textarea {
    height: 100px;
  }

  .auth-user-name {
    text-align: center;
    font-size: 1.2rem;
  }
  .edit-profile-btn {
    margin: 30px 0px 10px 0px;
    display: flex;
    gap: 30px;
    justify-content: center;
  }
  .edit-profile-btn button {
    width: 120px;
    border-radius: 3px;
  }
  .cancel-edit {
    background: none;
    color: var(--black-color);
    border: thin solid var(--black-color);
  }
  .save-edit {
    background: #1991b6;
    color: #fff;
    border: thin solid #1991b6;
  }
  .error {
    border: thin solid red;
    border-radius: 3px;
  }
</style>
