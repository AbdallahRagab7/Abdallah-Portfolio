<template>
  <div class="container">
    <h1 class="text-center p-2">My Projects</h1>

    <div class="row">
      <div
        class="col-12 mb-5 myproject d-flex align-items-center justify-content-between justify-content-lg-around"
      >
        <div class="img overflow-hidden col-5 col-sm-5 col-md-4 col-lg-3">
          <img src="../assets/tailor-campus.png" alt="" />
        </div>

        <div class="details col-6 col-sm-6 col-md-7 col-lg-7">
          <h2 class="project-title">Tailor Campus</h2>
          <p class="summary">
            Tailor Campus is an e-learning platform designed to deliver
            personalized learning experiences, affording users the opportunity
            to explore a diverse array of courses and acquire skills tailored to
            their specific needs.
          </p>
          <div class="text-end">
            <a
              href="github.com/AbdallahRagab7/tailor-campus"
              class="project-link"
              >github/tailor-campus</a
            >
          </div>
        </div>
      </div>





      <div
        class="col-12 mb-5 myproject d-flex align-items-center justify-content-between justify-content-lg-around"
      >
        <div class="img overflow-hidden col-5 col-sm-5 col-md-4 col-lg-3">
          <img src="../assets/tailor-campus.png" alt="" />
        </div>

        <div class="details col-6 col-sm-6 col-md-7 col-lg-7">
          <h2 class="project-title">Tailor Campus</h2>
          <p class="summary">
            Tailor Campus is an e-learning platform designed to deliver
            personalized learning experiences, affording users the opportunity
            to explore a diverse array of courses and acquire skills tailored to
            their specific needs.
          </p>
          <div class="text-end">
            <a
              href="github.com/AbdallahRagab7/tailor-campus"
              class="project-link"
              >github/tailor-campus</a
            >
          </div>
        </div>
      </div>



      
      <div
        class="col-12 mb-5 myproject d-flex align-items-center justify-content-between justify-content-lg-around"
      >
        <div class="img overflow-hidden col-5 col-sm-5 col-md-4 col-lg-3">
          <img src="../assets/tailor-campus.png" alt="" />
        </div>

        <div class="details col-6 col-sm-6 col-md-7 col-lg-7">
          <h2 class="project-title">Tailor Campus</h2>
          <p class="summary">
            Tailor Campus is an e-learning platform designed to deliver
            personalized learning experiences, affording users the opportunity
            to explore a diverse array of courses and acquire skills tailored to
            their specific needs.
          </p>
          <div class="text-end">
            <a
              href="github.com/AbdallahRagab7/tailor-campus"
              class="project-link"
              >github/tailor-campus</a
            >
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

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
h2 {
  font-family: var(--heading-font);
  color: var(--primary-color);
}
.img {
  border-radius: 3.125rem;
  border: 2px solid #1597bb;
  background: #d9d9d9;
}
.img img {
  width: 100%;
  height: 100%;
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
    font-size: .9rem;
  }
  .project-link {
    font-size: 0.9rem;
  }
  .img {
    margin-top: -3rem;
    border-radius: 2.125rem;

  }
}
</style>
