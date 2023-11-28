<template>
  <main>
    <TheHeader @scrollToSection="scrollToSection" />
    <TheHome id="home"/>
    <!-- <div ref="about"> -->
    <TheAbout id="about"></TheAbout>
    <!-- </div> -->

    <MySkills id="skills" />
    <MyProjects id="projects" />
    <ContactMe id="contact"/>
    <TheFooter />
  </main>
</template>
<script>
import TheHeader from "./components/layout/TheHeader.vue";
import TheFooter from "./components/layout/TheFooter.vue";
import TheHome from "./pages/TheHome.vue";
import TheAbout from "./pages/TheAbout.vue";
import MySkills from "./pages/MySkills.vue";
import MyProjects from "./pages/MyProjects.vue";
import ContactMe from "./pages/ContactMe.vue";

export default {
  components: {
    TheHeader,
    TheFooter,
    TheHome,
    TheAbout,
    MySkills,
    MyProjects,
    ContactMe,
  },
  methods: {
    scrollToSection(elementId) {
      // const element = this.$refs[section];
      // element.scrollIntoView({ behavior: "smooth" });

      const targetElement = document.getElementById(elementId);

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Gowun+Batang&family=Jockey+One&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

:root {
  --heading-font: "Jockey One", sans-serif;
  --secondary-font: "Gowun Batang", sans-serif;

  --bg-color: #032030;
  --primary-color: #1597bb;
  --white-color: #ffffff;
}

* {
  box-sizing: border-box;
  margin: 0;
  font-family: "Gowun Batang", sans-serif;
  list-style: none;
  text-decoration: none;
}

ul {
  padding-left: 0;
  margin-left: 0;
}
main {
  background-color: var(--bg-color);
}
/*
@media (max-width: 1400px) {
  html  {
    font-size: 16px;
  }
}

@media (max-width: 768px) {
  html {
    font-size: 16px;
  }
}

@media (max-width: 450px) {
  html {
    font-size: 12px;
  }
}
*/
</style>
