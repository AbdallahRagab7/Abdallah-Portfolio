<template>
  <div class="container">
    <h1 class="text-center p-2 p-lg-3">My Projects</h1>

    <div ref="rowRef" class="row">
      <TheProject
        v-for="project in myProjects"
        :key="project.projectTitle"
        :projectImg="project.projectImg"
        :project-title="project.projectTitle"
        :project-summary="project.projectsummary"
        :project-link="project.projectLink"
        :fake-link="project.fakeLink"
        :img-fit="project.objectFit"
        class="project-card"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import TheProject from "../components/TheProject.vue";
import { useIntersectionReveal } from "../composables/useIntersectionReveal";

const rowRef = ref(null);

const myProjects = [
  {
    projectImg: "hwaidakLogo.webp",
    projectTitle: "Hwaidak Hotels",
    projectsummary:
      "Developed hotels reservation platform, implemented authentication flows supporting multiple sign-in methods including phone number, Gmail, and email. Developed advanced room filtering, search functionality, and pagination to enhance the booking experience.",
    projectLink: "https://www.hwaidak-hotels.com/",
    fakeLink: "hwaidak.com",
    objectFit: "contain",
  },
  {
    projectImg: "tawzeef.jpg",
    projectTitle: "Tawzeef",
    projectsummary:
      "Contributed to the HR outsourcing and recruitment platform, developing features for both website and dashboard. Delivered responsive pages, integrated job search and application functionality, and enhanced the dashboard by making the website fully dynamic, adding a blog section, and implementing job listing management.",
    projectLink: "https://www.tawzef.com/en",
    fakeLink: "tawzeef.com",
  },
  {
    projectImg: "secureLogo.png",
    projectTitle: "Secure Vet",
    projectsummary:
      "Worked on the pet marketplace platform. Implemented responsive pages such as homepage and pet profiles with interactive sliders, integrated with Algolia for instant search, built pet listing creation flows, and customer chat for deal-making.",
    projectLink: "https://www.secure-vet.com/en",
    fakeLink: "securevet.com",
  },
  {
    projectImg: "clothes1.png",
    projectTitle: "Seirah E-commerce",
    projectsummary:
      "Responsive e-commerce application with products page featuring pagination and advanced filters. Users can manage their cart with stock-based quantity control, apply promo codes, place orders, and track status in a profile section with printable invoices. Implemented authentication and navigation guards.",
    projectLink:
      "https://drive.google.com/file/d/1VFu--IWeU1zK6qwccHJO7ttIVTRkdlWt/view?usp=sharing",
    fakeLink: "seirah.com",
  },
  {
    projectImg: "quiz.png",
    projectTitle: "Quiz app",
    projectsummary:
      "MCQ Quiz application with a dynamic quiz interface where questions await your quick thinking. Features a timer that automatically skips unanswered questions. Correct answers light up in green, wrong ones turn red. Upon completion, a detailed summary shows your performance percentage.",
    projectLink: "https://quiz-app-exam-nine.vercel.app/",
    fakeLink: "quiz-app.com",
  },
  {
    projectImg: "tailor-campus.png",
    projectTitle: "Tailor Campus",
    projectsummary:
      "An e-learning platform designed to deliver personalized learning experiences, affording users the opportunity to explore a diverse array of courses and acquire skills tailored to their specific needs.",
    projectLink: "https://github.com/AbdallahRagab7/tailor-campus",
    fakeLink: "github/tailor-campus",
  },
  {
    projectImg: "food-order.png",
    projectTitle: "Food order app",
    projectsummary:
      "Simplifies your dining experience by displaying available food items from the backend. Users can add items to their cart, adjust quantities, proceed to checkout, and send their order to the backend seamlessly.",
    projectLink: "https://github.com/AbdallahRagab7/food-order-app",
    fakeLink: "github/food-order",
  },
  {
    projectImg: "coach-finder.png",
    projectTitle: "Coach Finder",
    projectsummary:
      "Facilitates listing and filtering of available coaches registered on the platform. Features include viewing coach details, registering as a coach, and establishing direct communication with coaches.",
    projectLink: "https://github.com/AbdallahRagab7/coach-app",
    fakeLink: "github/coach-finder",
  },
];

useIntersectionReveal(rowRef, ".project-card");
</script>

<style scoped>
.container {
  color: white;
  padding-bottom: 5rem;
}

h1 {
  font-family: var(--heading-font);
  color: var(--primary-color);
  font-size: 3rem;
}

.project-card {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.project-card.visible {
  opacity: 1;
  transform: translateY(0);
}
</style>
