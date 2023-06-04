<template>
  <div class="welcome_container">
    <div class="welcome">
      <h1>Olá! Tudo bem?</h1>
      <h1>Seja bem-vindo(a)!</h1>
    </div>
  </div>
</template>

<style scoped>
.welcome_container {
  width: calc(100vw - 18vw);
  height: calc(100vh - 10vh);
  display: flex;
  justify-content: center;
  align-items: center;
}

.welcome {
  background-color: rgba(0, 0, 0, 0.575);
  padding: 20px;
  border-radius: 200px;
  margin: auto;
}

.welcome h1 {
  font-family: sans-serif;
  line-height: 3.3rem;
  font-size: 2.5rem;
  text-align: center;
}

@media (max-width: 800px) {
  .welcome_container {
    min-width: 100vw;
  }
}
</style>
