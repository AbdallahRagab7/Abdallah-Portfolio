import { createRouter, createWebHashHistory } from "vue-router";
import TheHome from ".././pages/TheHome.vue";
import TheAbout from ".././pages/TheAbout.vue";
import MySkills from ".././pages/MySkills.vue";
import MyProjects from ".././pages/MyProjects.vue";
import ContactMe from ".././pages/ContactMe.vue";

const routes = [
  { path: "/home", component: TheHome, name: "home" },
  { path: "/about", component: TheAbout, name: "about" },
  { path: "/skills", component: MySkills, name: "skills" },
  { path: "/projects", component: MyProjects, name: "projects" },
  { path: "/contact", component: ContactMe, name: "contact" },
];


const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
