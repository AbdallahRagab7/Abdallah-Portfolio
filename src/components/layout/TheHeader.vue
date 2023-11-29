<template>
  <section>
    <nav class="navbar navbar-expand-lg sticky">
      <div class="container border-bottom">
        <a class="navbar-brand logo fs-4" href="#"
          >ABDALLAH
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="9"
            height="9"
            viewBox="0 0 9 9"
            fill="none"
            class="mt-1"
          >
            <circle cx="4.5" cy="4.5" r="4.5" fill="#1597BB" /></svg
        ></a>
        <button
          class="navbar-toggler shadow-none border-0"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <i class="fa-solid fa-bars"></i>
          <!-- <i class="fa-solid fa-bars-staggered"></i> -->
        </button>

        <div
          class="sidebar offcanvas offcanvas-start"
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div class="offcanvas-header text-white border-bottom">
            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
              Abdallah Ragab
            </h5>
            <button
              type="button"
              class="btn-close btn-close-white shadow-none fs-3"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>

          <div class="offcanvas-body">
            <ul
              class="navbar-nav justify-content-end flex-grow-1 pe-3 align-items-lg-center"
            >
              <li class="nav-item mx-3 mx-lg-2 mb-1 mb-lg-0">
                <router-link
                  to="/home"
                  @click="scrollTo('home')"
                  class="nav-link"
                  :class="{ active: activeSection == 'home' }"
                  aria-current="page"
                  >Home</router-link
                >
              </li>
              <li class="nav-item mx-3 mx-lg-2 mb-1 mb-lg-0">
                <router-link
                  to="/about"
                  @click="scrollTo('about')"
                  class="nav-link"
                  :class="{ active: activeSection == 'about' }"
                  >About</router-link
                >
              </li>

              <li class="nav-item mx-3 mx-lg-2 mb-1 mb-lg-0">
                <router-link
                  to="/skills"
                  @click="scrollTo('skills')"
                  class="nav-link"
                  :class="{ active: activeSection == 'skills' }"
                  >Skills</router-link
                >
              </li>

              <li class="nav-item mx-3 mx-lg-2 mb-1 mb-lg-0">
                <router-link
                  to="/projects"
                  @click="scrollTo('projects')"
                  class="nav-link"
                  :class="{ active: activeSection == 'projects' }"
                  >Projects</router-link
                >
              </li>

              <li class="nav-item mx-3 mx-lg-2 mb-1 mb-lg-0">
                <router-link
                  to="/contact"
                  @click="scrollTo('contact')"
                  class="nav-link"
                  :class="{ active: activeSection == 'contact' }"
                  >Contact</router-link
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </section>
</template>

<script>
export default {
  data () {
    return {
      activeSection : ''
    }
  },
  methods: {
    scrollTo(section) {
      this.$emit("scrollToSection", section);
      this.activeSection = section

    },
  },
  created() {
    console.log(this.activeSection);
  },
};
</script>

<style scoped>
.navbar-nav .nav-link,
.navbar-brand,
.offcanvas-title {
  color: var(--white-color);
  font-family: var(--heading-font);
  font-size: 1.4rem;
}
.navbar-nav .nav-link.active,
.navbar-brand:hover {
  color: aqua;
}
.nav-link:hover {
  color: aqua;
  transition: 0.1s;
}
.navbar-toggler {
  color: white;
  font-size: 2rem;
}

@media (max-width: 991px) {
  .sidebar {
    background: rgba(21, 151, 187, 0.5);
    box-shadow: 10px 0px 4px 0px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(5px);
  }
  .offcanvas-title {
    font-size: 1.9rem;
  }
}


/*Animations*/ 
.logo {
  position: relative;
}
.logo::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background: var(--bg-color);
  left: 0;
  top: 0;
  animation: showRight 1s ease forwards;
  animation-delay: 0.4s;
}

@keyframes showRight {
  100% {
    width: 0;
  }
}
</style>
