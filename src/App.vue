<script setup>
import { RouterView } from "vue-router";
import { reactive, ref } from "vue";

import Header from "./components/Header.vue";
import SideBar from "./components/SideBar.vue";
</script>

<template>
  <Header />
  <div class="container">
    <SideBar />
    <RouterView />
  </div>
</template>
