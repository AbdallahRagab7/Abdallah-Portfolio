<template>
  <section>
    <div class="container">
      <div
        class="row justify-content-center justify-content-sm-between justify-content-md-between justify-content-lg-around "
      >
        <div class="col-8 col-sm-6 col-lg-4 circles align-self-center align-self-md-start ">
          <div class="about-img overflow-hidden">
            <img src="../assets/about.png" alt="" />
          </div>
        </div>

        <div class="col-8  col-sm-6 col-lg-6 about">
          <h1>About me</h1>
          <h2 class="mb-4">
            Every great website begin within even better story .
          </h2>

          <ul
            class="d-flex align-items-center p-0  mynavbar mb-4"
          >
            <li @click="setComponent('about')" :class="about">About</li>
            <li @click="setComponent('education')" :class="education">
              Education
            </li>
            <li @click="setComponent('certificate')" :class="certificate">
              Certificate
            </li>
          </ul>

          <p v-if="this.selectedComponent == 'about'" class="me">
            I am a fresh graduate from the Faculty of Computer and Data Science
            with a passion for web development. My primary expertise lies in
            front-end web development using Vue.js, where I’ve gained valuable
            skills in creating engaging and responsive user interfaces.
          </p>

          <div v-if="this.selectedComponent == 'education'" class="education">
            <h4 class="mb-1">Bachelor's degree, computer and data science</h4>
            <span class="fs-5"
              >Faculty of Computer and Data Science - Alexandria - Egypt
              <span class="date">2019-2023 </span>
            </span>
          </div>

          <div
            v-if="this.selectedComponent == 'certificate'"
            class="certificate"
          >
            this is my Certificates
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      selectedComponent: "about",
    };
  },
  methods: {
    setComponent(component) {
      this.selectedComponent = component;
    },
  },
  computed: {
    about() {
      return this.selectedComponent === "about" ? "btn  active-btn" : "btn";
    },
    education() {
      return this.selectedComponent === "education" ? "btn active-btn" : "btn";
    },
    certificate() {
      return this.selectedComponent === "certificate"
        ? "btn active-btn"
        : "btn";
    },
  },
};
</script>

<style scoped>
.about {
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
  max-width: 85%;
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

.btn {
  font-family: var(--heading-font);
  font-size: 1.5rem;
  color: white;
  margin-right: 1.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  border: 1px solid #fff;
  background: #1597bb;
  background: transparent;

  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  padding: 0.2rem 0.8rem;

  cursor: pointer;
}
.mynavbar li:hover {
  transition: 0.2s;
  background: #05c9ff;
}

.active-btn {
  background: #05c9ff;
}

.me {
  font-size: 1.1rem;
}
.education h4 {
  font-family: "Roboto";
  margin-bottom: 0;
  color: white;
  font-weight: bold;
}
.date {
  margin-top: 0.5rem;
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
}
</style>
