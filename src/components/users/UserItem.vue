<template>
  <li>
    <h3>{{ name }}</h3>
    <div class="role" :class="roleClass">{{ role }}</div>
  </li>
</template>

<script>
export default {
  props: ['name', 'role'],
  computed: {
    roleClass() {
      if (this.role === 'Engineer') {
        return 'role--engineer';
      }
      if (this.role === 'Consultant') {
        return 'role--consultant';
      }
      return null;
    },
  },
};
</script>

<style scoped>
li {
  margin: 1rem 0;
  padding: 1rem;
  border: 1px solid #ccc;
}

h3 {
  margin: 0.5rem 0;
}

.role {
  display: inline-block;
  padding: 0.25rem 1rem;
  border-radius: 40px;
  color: #252525;
  background-color: #ccc;
}

.role--engineer {
  color: white;
  background-color: blue;
}

.role--consultant {
  color: white;
  background-color: #af003a;
}
</style>
