<template>
  <div class="container">
    <h1 class="text-center p-2 p-lg-3">My Projects</h1>

    <div class="row">
      <the-project
        v-for="project in myProjects"
        :key="project"
        :projectImg="project.projectImg"
        :project-title="project.projectTitle"
        :project-summary="project.projectsummary"
        :project-link="project.projectLink"
        :fake-link="project.fakeLink"
      ></the-project>
    </div>
  </div>
</template>

<script>
import TheProject from "../components/TheProject.vue";
export default {
  components: {
    TheProject,
  },

  data() {
    return {
      myProjects: [
        {
          projectImg: "tailor-campus.png",
          projectTitle: "Tailor Campus",
          projectsummary:
            "Tailor Campus is an e-learning platform designed to deliver personalized  learning experiences, affording users the opportunity to explore a diverse array of courses and acquire skills tailored to their specific needs.",
          projectLink: "https://github.com/AbdallahRagab7/tailor-campus",
          fakeLink: "github/tailor-campus",
        },

        {
          projectImg: "coach-finder.png",
          projectTitle: "Coach Finder",
          projectsummary: `Coach Finder app is facilitating the listing and filtration of available coaches who have registered with our platform . Key functionalities include the ability to view coach details, register as a coach, and establish direct communication with coaches.`,
          projectLink: "https://github.com/AbdallahRagab7/coach-app",
          fakeLink: "github/coach-finder",
        },

        {
          projectImg: "monster-slayer.png",
          projectTitle: "Monster Slayer Game",
          projectsummary: `The game features dual health bars—one for the player and another for the monster—where both entities execute various attacks, leading to a gradual decline in health bars. The ultimate victor is determined by the depleting the opponent’s health bar.`,

          projectLink: "https://github.com/AbdallahRagab7/Monster-Slayer-Game",
          fakeLink: "github/Monster-Slayer",
        },
        {
          projectImg: "tictac.png",
          projectTitle: "Tic Tac Toe",
          projectsummary: `The Tic Tac Toe game is a game for two players,called "X" and "O", who take turns marking thespaces in a 3×3 grid. The player who succeeded in placing three respective marks in a horizontal,vertical, or diagonal row wins the game.`,
          projectLink: "https://github.com/AbdallahRagab7/TicTacToe",
          fakeLink: "github/TicTacToe",
        },
      ],
    };
  },
};
</script>

<style scoped>
.container {
  color: white;
  /* height: 100vh; */
  padding-bottom: 5rem;
}
h1 {
  font-family: var(--heading-font);
  color: var(--primary-color);
  font-size: 3rem;
}
</style>
