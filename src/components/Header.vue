<template>
  <header class="header">
    <h1>Portfólio</h1>
  </header>
</template>

<style scoped>
.header {
  height: 10vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.575);
  display: flex;
  align-items: center;
  padding: 10px 20px;
}

.header h1 {
  font-size: 2rem;
  font-family: "Work Sans", sans-serif;
}

@media (max-width: 800px) {
  .header h1 {
    margin: 0 auto;
  }
}
</style>
