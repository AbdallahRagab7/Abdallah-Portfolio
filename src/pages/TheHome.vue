<template>
  <div class="container">
    <div class="row justify-content-center justify-content-md-around">
      <!-- <div class="col-10 col-lg-5 mb-5 mb-lg-0 about"> -->
      <div
        class="about col-8 col-sm-6 col-md-6 col-lg-5 mb-5 mb-lg-0 order-last order-sm-first"
      >
        <h1 class="name">Hi! I’m Abdallah Ragab.</h1>
        <h2 class="speciality ">Front-End Web Developer</h2>
        <h2 class="speciality">Software Engineer</h2>
        <div class="line overflow-hidden">
          <img class="img-fluid" src="../assets/line.png" alt="" />
        </div>
        <p class="text-white">
          Detail-oriented professional with an associate degree in computer
          science and extensive knowledge in creating detailed design
          specifications and front-end applications.
        </p>
      </div>

      <!-- <div class="col-8 col-md-9 col-lg-5 circles justify-self-center align-self-center  "> -->
      <div
        class="col-8 col-sm-6 col-md-6 col-lg-5 circles justify-self-center align-self-center"
      >
        <div class="profile-img overflow-hidden">
          <img src="../assets/me1.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about {
  color: white;
}
.container {
  /*100vh - navbar height */
  min-height: calc(100vh - 66px);
  margin-top: 3rem;
}
.name {
  font-family: var(--heading-font);
  font-size: 3rem;
}
.speciality {
  font-family: var(--heading-font);
  color: var(--primary-color);
}
.line {
  width: 7rem;
  height: 3.5rem;
  margin-left: -10%;
  margin-top: -1%;
}
.line img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.about p {
  font-family: var(--secondary-font);
  line-height: 1.6;
  max-width: 86%;
  opacity: 0.8;
}

.profile-img {
  position: relative;
  width: 15.0625rem;
  height: 24.0625rem;
  border-radius: 34%;
  overflow: hidden;
  border: 4px;
  background: white;
  background: var(--bg-color);
  z-index: 1;
}

.circles {
  position: relative;
}
.circles::before {
  content: "";
  position: absolute;
  width: 15.0625rem;
  height: 24.0625rem;
  border-radius: 34%;
  border: 4px solid #1597bb;
  left: -10%;
  top: -10%;
}
.circles::after {
  content: "";
  position: absolute;
  width: 15.0625rem;
  height: 24.0625rem;
  border-radius: 34%;
  border: 4px solid #1597bb;
  left: 20%;
  top: 10%;
}

@media (max-width: 768px) {
  .circles::after {
    display: none;
  }
  .name {
    font-size: 2.5rem;
  }
}

@media (max-width: 576px) {
  .profile-img,
  .circles::before,
  .circles::after {
    width: 12rem;
    height: 20rem;
    margin-bottom: 1rem;
    margin-left: 0.5rem;
  }
  .name {
    font-size: 1.8rem;
  }
}

.profile-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
