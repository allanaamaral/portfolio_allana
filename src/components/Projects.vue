<script setup>
const photos = [];

for (let i = 1; i <= 34; i++) {
  if (i === 2 || i === 29) {
    i++;
  }
  let photo = `/src/assets/projects/${i}.png`;
  photos.push(photo);
}
</script>

<template>
  <div class="projects_container">
    <div class="projects" v-for="photo in photos">
      <img :src="photo" draggable="false" />
    </div>
  </div>
</template>

<style scoped>
.projects_container {
  width: calc(100vw - 18vw);
  height: calc(100vh - 10vh);
  overflow-y: scroll;
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.projects {
  width: 25%;
}

.projects img {
  max-width: 100%;
}

.projects:nth-child(31),
.projects:nth-child(32) {
  min-width: 90%;
}

@media (max-width: 800px) {
  .projects_container {
    min-width: 100vw;
  }
}
</style>
