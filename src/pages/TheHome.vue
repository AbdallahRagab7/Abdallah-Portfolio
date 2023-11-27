<template>
  <div class="container">
    <div class="row justify-content-center justify-content-md-around">
      <div
        class="about col-9 col-sm-6 col-md-6 col-lg-5 mb-5 mb-lg-0 order-last order-sm-first"
      >
        <h1 class="name">Hi! I’m Abdallah Ragab.</h1>
        <h2 class="speciality">Front-End Web Developer</h2>
        <h2 class="speciality">Software Engineer</h2>
        <div class="line overflow-hidden">
          <img class="img-fluid" src="../assets/line.png" alt="" />
        </div>

        <p class="summary mb-5">
          Detail-oriented professional with an associate degree in computer
          science and extensive knowledge in creating detailed design
          specifications and front-end applications.
        </p>

        <div class="cv d-flex align-items-center">
          <div class="btn-circles">
            <p class="download-btn me-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="24"
                viewBox="0 0 26 24"
                fill="none"
              >
                <path
                  d="M25.0607 13.0607C25.6464 12.4749 25.6464 11.5251 25.0607 10.9393L15.5147 1.3934C14.9289 0.807611 13.9792 0.807611 13.3934 1.3934C12.8076 1.97919 12.8076 2.92893 13.3934 3.51472L21.8787 12L13.3934 20.4853C12.8076 21.0711 12.8076 22.0208 13.3934 22.6066C13.9792 23.1924 14.9289 23.1924 15.5147 22.6066L25.0607 13.0607ZM0 13.5L24 13.5V10.5L0 10.5L0 13.5Z"
                  fill="white"
                />
              </svg>
            </p>
          </div>

          <p class="download">Download C.V</p>
        </div>
      </div>

      <div
        class="circles col-9 col-sm-6 col-md-6 col-lg-5 justify-self-center align-self-center"
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
.summary {
  font-family: var(--secondary-font);
  line-height: 1.6;
  /* max-width: 86%; */
  opacity: 0.8;
}

.download {
  font-family: var(--heading-font);
  font-size: 1.2rem;
}


.btn-circles {
  position: relative;
}
.download-btn {
  background: var(--primary-color);
  border-radius: 50%;
  width: 30px;
  height: 30px;
  position: relative;
  z-index: 2;
}

.btn-circles::before {
  position: absolute;
  content: "";
  border-radius: 50%;
  width: 30px;
  height: 30px;
  border: solid white;
  transform: translateX(15px);
  
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
