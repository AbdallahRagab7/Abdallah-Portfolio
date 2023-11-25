<template>
  
    <div class="container">
      <div class="row justify-content-center justify-content-lg-between align-items-center">
        <div class="col col-lg-5 mb-5 mb-lg-0 about">
          <h1>Hi! I’m Abdallah Ragab.</h1>
          <h2>Front-End Web Developer</h2>
          <h2>Software Engineer</h2>
          <p>
            Detail-oriented professional with an associate degree in computer
            science and extensive knowledge in creating detailed design
            specifications and front-end applications.
          </p>
        </div>

        <div class="col col-lg-5 circles ">
          <div class="profile-img">
            <img class="img-fluid" src="../assets/profile-img-1.png" alt="" />
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

</style>
