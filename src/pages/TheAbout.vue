<template>
  <section>
    <div class="container p-3 p-md-5">
      <div
        class="row justify-content-center justify-content-sm-between justify-content-md-between justify-content-lg-around"
      >
        <div
          class="col-9 col-sm-6 col-lg-4 circles align-self-center align-self-md-start"
        >
          <div class="about-img overflow-hidden">
            <img src="../assets/vector3.jpeg" alt="" />
          </div>
        </div>

        <div class="col-10 col-sm-6 col-lg-6 about">
          <h1>About me</h1>
          <h2 class="mb-4">
            Every great website begin within even better story .
          </h2>

          <AboutNavtab />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AboutNavtab from "../components/AboutNavtab.vue";
export default {
  components: {
    AboutNavtab,
  },
};
</script>

<style scoped>
.container {
  color: white;
  min-height: 100vh;
}

.about h1 {
  color: var(--primary-color);
  font-family: var(--heading-font);
  font-size: 2.8125rem;
}
.about h2 {
  color: white;
  font-family: var(--heading-font);
}

.about p,
span {
  font-family: var(--secondary-font);
  line-height: 1.6;
  max-width: 100%;
  opacity: 0.8;
}
.about-img {
  position: relative;
  width: 17rem;
  height: 28rem;
  border-radius: 9.3rem;
  z-index: 1;
}
.circles {
  position: relative;
}
.circles::after {
  position: absolute;
  content: "";
  width: 17rem;
  height: 28rem;
  border-radius: 9.3rem;
  border: 4px solid #1597bb;
  left: -10%;
  top: -10%;
}

.about-img img {
  width: 100%;
  height: 100%;
}

@media (max-width: 768px) {
  .about-img,
  .circles::after {
    width: 12rem;
    height: 20rem;
    margin-bottom: 1rem;
    margin-left: 0.5rem;
  }
  .name {
    font-size: 1.8rem;
  }
  .btn {
    font-size: 1.2rem;
    padding: 0.1rem 0.5rem;
  }
  .about h1 {
    font-size: 2rem;
    margin-top: 2rem;
  }
  .about h2 {
    font-size: 1.5rem;
  }
  .certificate ul a {
    font-size: 1rem;
  }
}
</style>
