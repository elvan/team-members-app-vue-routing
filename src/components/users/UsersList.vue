<template>
  <button @click="confirmInput">Confirm</button>
  <button @click="saveChanges">Save</button>
  <ul>
    <user-item
      v-for="user in users"
      :key="user.id"
      :name="user.fullName"
      :role="user.role"
    ></user-item>
  </ul>
</template>

<script>
import UserItem from './UserItem.vue';

export default {
  components: {
    UserItem,
  },

  inject: ['users'],

  data() {
    return {
      changesSaved: false,
    };
  },

  methods: {
    confirmInput() {
      // ...
      this.$router.push('/teams');
    },

    saveChanges() {
      console.log('Saving changes...');
      this.changesSaved = true;
    },
  },

  beforeRouteEnter(to, from, next) {
    console.log('UsersList beforeRouteEnter');
    console.log(to, from);
    next();
  },

  beforeRouteLeave(to, from, next) {
    console.log('UsersList beforeRouteLeave');
    console.log(to, from);
    if (!this.changesSaved) {
      if (confirm('Are you sure you want to leave?')) {
        next();
      } else {
        next(false);
      }
    } else {
      next();
    }
  },

  unmounted() {
    console.log('UsersList unmounted');
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>
