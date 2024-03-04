<template>
  <header>
    <nav>
      <ul>
        <li>
          <router-link to="/teams">Teams</router-link>
        </li>
        <li>
          <router-link to="/users">Users</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

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

a {
  display: inline-block;
  padding: 0.5rem 1.5rem;
  border: 1px solid transparent;
  color: white;
  text-decoration: none;
  cursor: pointer;
  background: transparent;
}

a:hover,
a:active,
a.active {
  border-color: #f1a80a;
  color: #f1a80a;
  background-color: #1a037e;
}
</style>
