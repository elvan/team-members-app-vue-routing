<template>
  <header>
    <nav>
      <ul>
        <li>
          <button @click="setActivePage('teams-list')">Teams</button>
        </li>
        <li>
          <button @click="setActivePage('users-list')">Users</button>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  emits: ['set-page'],
  methods: {
    setActivePage(page) {
      this.$emit('set-page', page);
    },
  },
};
</script>

<style scoped>
header {
  width: 100%;
  height: 5rem;
  background-color: #11005c;
}

nav {
  height: 100%;
}

ul {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
}

li {
  margin: 0 2rem;
}

button {
  display: inline-block;
  padding: 0.5rem 1.5rem;
  border: 1px solid transparent;
  color: white;
  font: inherit;
  cursor: pointer;
  background: transparent;
}

button:hover,
button:active {
  border-color: #f1a80a;
  color: #f1a80a;
  background-color: #1a037e;
}
</style>
