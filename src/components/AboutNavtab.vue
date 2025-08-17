<template>
  <section>
    <ul class="d-flex align-items-center p-0 mynavbar mb-5">
      <li @click="setComponent('about')" :class="about">About</li>
      <li @click="setComponent('education')" :class="education">Education</li>
      <li @click="setComponent('certificate')" :class="certificate">
        Certificate
      </li>
    </ul>
    <transition name="fade-button" mode="out-in">
      <p v-if="this.selectedComponent == 'about'" class="me">
        Frontend Developer skilled in Vue.js and React.js with focus on clean,
        scalable code. Strong in advanced JavaScript concepts and understanding
        of how JavaScript works behind the scenes, interested in deeply un-
        derstanding framework internals.
      </p>
    </transition>

    <transition name="fade-button" mode="out-in">
      <div v-if="this.selectedComponent == 'education'" class="education">
        <h4 class="mb-1">Bachelor's degree, computer and data science</h4>
        <span class="fs-5"
          >Faculty of Computer and Data Science - Alexandria - Egypt
          <span class="date">2019-2023 </span>
        </span>
      </div>
    </transition>

    <transition name="fade-button" mode="out-in">
      <div v-if="this.selectedComponent == 'certificate'" class="certificate">
        <ul>
          <li>
            <a
              target="blank"
              href="https://www.udemy.com/certificate/UC-3cf39e31-ac83-4c71-bf1a-fbaf0c780730/"
              >Vue - The Complete Guide
            </a>
            <span class="text-center-end">Udemy</span>
          </li>
          <li>
            <a
              target="blank"
              href="https://www.coursera.org/account/accomplishments/verify/DU2JY4KT75CU"
              >Foundations: Data, Data Everywhere</a
            >
            <span class="">Google</span>
          </li>
          <li>
            <a
              target="blank"
              href="https://www.coursera.org/account/accomplishments/verify/8PXCXPCPCRAB"
              >Ask Questions to Make Data-Driven Decisions</a
            >
            <span class="">Google</span>
          </li>
          <li>
            <a
              target="blank"
              href="https://www.coursera.org/account/accomplishments/verify/2BQUSWB23CHP"
              >Prepare Data for Exploration</a
            >
            <span class="">Google</span>
          </li>
        </ul>
      </div>
    </transition>
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

.certificate ul li {
  margin-bottom: 0.8rem;
  display: flex;
  justify-content: space-between;
}
.certificate ul a {
  text-decoration: none;
  font-family: var(--heading-font);
  font-size: 1.3rem;
  color: white;
}
.certificate ul a:hover {
  color: #05c9ff;
}

.fade-button-enter-from,
.fade-button-leave-to {
  opacity: 0;
}

.fade-button-enter-active {
  transition: opacity.5s ease-in;
}

.fade-button-leave-active {
  transition: opacity 0.1s ease-in;
}

.fade-button-enter-to,
.fade-button-leave-from {
  opacity: 1;
}

@media (max-width: 768px) {
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
