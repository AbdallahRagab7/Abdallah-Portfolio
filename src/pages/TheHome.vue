<template>
  <div class="container">
    <div
      class="row justify-content-center justify-content-md-around "
    >
      <div class="col-10 col-lg-5 mb-5 mb-lg-0 about">
        <h1 class="name">Hi! I’m Abdallah Ragab.</h1>
        <h2 class="speciality">Front-End Web Developer</h2>
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

      <div class="col-10 col-md-9 col-lg-5 circles">
        <div class="profile-img overflow-hidden">
          <img src="../assets/profile-img2.jpg" alt="" />
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
  margin-left:-10% ;
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
  opacity: .8;
}

/*

.profile-img {
  position: relative;
  width: 17.0625rem;
  height: 26.0625rem;
  border-radius: 34%;
  overflow: hidden;
  border: 4px solid #1597bb;
  background: white;
  z-index: 1;
}


.circles {
  position: relative;
}
.circles::before {
  content: "";
  position: absolute;
  width: 17.0625rem;
  height: 26.0625rem;
  border-radius: 34%;
  border: 4px solid #1597bb;
  left: -10%;
  top: -10%;
}
.circles::after {
  content: "";
  position: absolute;
  width: 17.0625rem;
  height: 26.0625rem;
  border-radius: 34%;
  border: 4px solid #1597bb;
  left: 20%;
  top: 10%;
}

@media (max-width:992px) {
    .circles::after {
    display: none;
      }
      
}
*/
.profile-img {
  border: 5px solid;
  /* border: 4px solid ;
  border-image: linear-gradient(45deg, rgb(87, 44, 87), rgb(206, 137, 9)) 1;
  padding: 15px; */
}
.profile-img img {
  width: 100%;
  height: 100%;
}
</style>
