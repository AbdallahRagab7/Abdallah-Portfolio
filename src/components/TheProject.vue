<template>
  <div
    class="col-12 mb-5 myproject d-flex align-items-center justify-content-between justify-content-lg-around"
  >
    <div class="img overflow-hidden col-5 col-sm-5 col-md-4 col-lg-3">
      <!-- <img src="../assets/tailor-campus.png" alt=""> -->
      <a :href="projectLink" target="blank">
        <img
          :src="require(`../assets/${projectImg}`)"
          :style="{ objectFit: imgFit || 'cover' }"
        />
      </a>
    </div>

    <div class="details col-6 col-sm-6 col-md-7 col-lg-7">
      <h2 class="project-title">{{ projectTitle }}</h2>
      <p class="summary">
        {{ projectSummary }}
      </p>
      <div class="text-end">
        <a target="blank" :href="projectLink" class="project-link">{{
          fakeLink
        }}</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: [
    "projectImg",
    "projectTitle",
    "projectSummary",
    "projectLink",
    "fakeLink",
    "imgFit",
  ],

  // mounted() {
  //   console.log(this.projectImg);
  // },
};
</script>

<style scoped>
h2 {
  font-family: var(--heading-font);
  color: var(--primary-color);
}
.img {
  border-radius: 3.125rem;
  border: 2px solid #1597bb;
  background: #d9d9d9;
  /* Ensure all thumbnails are perfect squares */
  aspect-ratio: 1 / 1;
  /* Keep overflow hidden to preserve rounded corners when cropping */
  /* Reduce visual size to 75% */
  transform: scale(0.8);
  transform-origin: center;
}
.img a {
  display: block;
  width: 100%;
  height: 100%;
}
.img img {
  width: 100%;
  height: 100%;
  display: block;
}

.summary {
  opacity: 0.8;
  font-size: 1.1rem;
  font-family: var(--secondary-font);
}
.project-link {
  text-align: end;
  font-family: var(--heading-font);
  color: var(--primary-color);
  text-decoration: none;
}

@media (max-width: 768px) {
  .summary {
    font-size: 1rem;
  }
  .project-link {
    font-size: 0.9rem;
  }
}

@media (max-width: 576px) {
  .summary {
    font-size: 0.9rem;
  }
  .project-link {
    font-size: 0.9rem;
  }
  .img {
    margin-top: -3rem;
    border-radius: 2.125rem;
    margin-top: -3rem;
  }
}
</style>
