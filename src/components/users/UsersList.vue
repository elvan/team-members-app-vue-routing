<template>
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
};
</script>

<style scoped>
ul {
  max-width: 20rem;
  margin: 2rem auto;
  padding: 0;
  list-style: none;
}
</style>
