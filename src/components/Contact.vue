<template>
  <div class="contact_container">
    <div class="contact">
      <h1>Entre em contato comigo</h1>
      <a
        href="https://www.linkedin.com/in/allana-amaral-728002266"
        target="_blank"
      >
        <v-icon name="bi-linkedin" />
        https://www.linkedin.com/in/allana-amaral-728002266</a
      >
      <a href="mailto:allanaamaralpereira27@gmail.com" target="_blank">
        <v-icon name="md-email-outlined" />
        allanaamaralpereira27@gmail.com
      </a>
    </div>
  </div>
</template>

<style scoped>
.contact_container {
  width: calc(100vw - 18vw);
  display: flex;
  align-items: center;
  justify-content: center;
}
.contact {
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.575);
  padding: 30px;
  border-radius: 30px;
  gap: 1rem;
}

.contact h1 {
  font-family: "Work Sans", sans-serif;
  font-size: 2.5rem;
}

@media (max-width: 800px) {
  .contact_container {
    min-width: 100vw;
    height: 90vh;
  }
}
</style>
