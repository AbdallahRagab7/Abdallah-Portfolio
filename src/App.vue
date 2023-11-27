<template>
  <main>
    <TheHeader />
    <TheHome />
    <TheAbout />
    <MySkills />
    <MyProjects />
    <ContactMe />
  </main>
  <!-- <router-view/> -->
</template>
<script>
import TheHeader from "./components/layout/TheHeader.vue";
import TheHome from "./pages/TheHome.vue";
import TheAbout from "./pages/TheAbout.vue";
import MySkills from "./pages/MySkills.vue";
import MyProjects from "./pages/MyProjects.vue";
import ContactMe from "./pages/ContactMe.vue";

export default {
  components: {
    TheHeader,
    TheHome,
    TheAbout,
    MySkills,
    MyProjects,
    ContactMe

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

</style>
