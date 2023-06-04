<script setup>
import { RouterLink } from "vue-router";
import { ref } from "vue";

let menuIsOpen = ref(false);

function setIsOpen() {
  return (menuIsOpen.value = !menuIsOpen.value);
}
</script>

<template>
  <div
    class="menu"
    :class="menuIsOpen ? 'menu_is_open' : ''"
    @click="setIsOpen"
  >
    <div class="line line1"></div>
    <div class="line line2"></div>
    <div class="line line3"></div>
  </div>
  <div class="sidebar_container" :class="menuIsOpen ? 'is_open' : ''">
    <div class="sidebar_content">
      <div class="profile_container">
        <div class="photo">
          <img src="@/assets/allana.jpg" />
        </div>
        <h2>Allana Amaral</h2>
        <h4>Designer</h4>
      </div>

      <nav class="navbar">
        <RouterLink to="/" class="link">
          <v-icon name="io-albums-sharp" />
          Início</RouterLink
        >
        <RouterLink to="/projects" class="link">
          <v-icon name="bi-newspaper" />
          Meus Projetos</RouterLink
        >
        <RouterLink to="/contact" class="link">
          <v-icon name="fa-user-circle" />
          Contato</RouterLink
        >
      </nav>
    </div>
  </div>
</template>

<style scoped>
.menu {
  display: none;
  cursor: pointer;
  position: absolute;
  top: 0;
  margin: 30px;
}

.menu_is_open .line1 {
  transition: 0.5s ease-in-out;
  transform: rotate(45deg);
}
.menu_is_open .line2 {
  opacity: 0;
}
.menu_is_open .line3 {
  transition: 0.5s ease-in-out;
  transform: rotate(-45deg) translate(8px, -9px);
}

.line {
  width: 20px;
  height: 1px;
  background: #fff;
  margin: 5px 0;
}
.sidebar_container {
  height: calc(100vh - 10vh);
  width: 18vw;
  background-color: rgba(0, 0, 0, 0.575);
}

.profile_container {
  text-align: center;
}

.profile_container h2,
.profile_container h4 {
  font-family: "Jost", sans-serif;
}

.photo {
  margin: 0 auto;
  width: 100px;
}

.photo img {
  max-width: 100%;
  border-radius: 50%;
}

.navbar {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.link {
  padding: 10px;
  display: flex;
  align-items: center;
  gap: 0.7rem;
  transition: 0.2s ease-in-out;
}

.link:hover {
  background: #616060ad;
  border-radius: 15px;
}

.router-link-active {
  background: #616060ad;
  border-radius: 15px;
}

@media (max-width: 800px) {
  .sidebar_container {
    display: none;
  }

  .is_open {
    min-width: 100vw;
    display: block;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.6);
    background-image: url("../assets/bg.png");
    background-blend-mode: color;
  }

  .menu {
    display: block;
    position: absolute;
    left: 0;
  }
}
</style>
