<template>
  <div class="footer d-flex justify-content-between align-items-center">
    <p class="mb-0 ms-0 ms-sm-3">
      @ 2023
      <a
        href="https://www.behance.net/moamenmedh7a4f"
        target="blank"
        class="moamen"
        >Mo’men Medhat</a
      >
      Ux/Ui - All rights reserved
    </p>

    <ul class="d-flex align-items-center me-4 mb-0 ps-0 ps-l">
      <li class="overflow-hidden">
        <a href="https://github.com/AbdallahRagab7" target="blank">
          <img src="../../assets/github.png" alt="" />
        </a>
      </li>

      <li class="overflow-hidden">
        <a
          href="https://www.linkedin.com/in/abdallah-ragab-977a92278"
          target="blank"
        >
          <img src="../../assets/linkedin.png" alt="" />
        </a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.footer {
  background: #1597bb;
  opacity: 0.8;
}

p {
  color: white;
  font-family: var(--heading-font);
  line-height: 3;
}

img {
  width: 100%;
  height: 100%;
}
.moamen {
  text-decoration: none;
  font-family: var(--heading-font);
  color: rgb(25, 25, 63);
  margin: 0 1px;
}

li {
  width: 50px;
  height: 45px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

li:hover {
  background: rgba(175, 173, 180, 0.3);
}

@media (max-width: 576px) {
  p,
  .moamen {
    font-size: 0.8rem;
  }
}
</style>
