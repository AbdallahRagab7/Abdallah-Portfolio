<template>
  <div class="container">
    <div class="title text-center mb-1 p-2">
      <h1>My Skills</h1>
      <h2>Coding like poetry should be short and concise.</h2>
    </div>

    <div class="skills">
      <ul class="imgs">
        <li><img src="../assets/html.png" alt="" /></li>
        <li><img src="../assets/css.png" alt="" /></li>
        <li><img src="../assets/js.png" alt="" /></li>
        <li><img src="../assets/bootstrap.png" alt="" /></li>
        <li><img src="../assets/vuejs.png" alt="" /></li>
        <li><img src="../assets/java.png" alt="" /></li>
        <li><img src="../assets/restapi.png" alt="" /></li>
        <li><img src="../assets/git.png" alt="" /></li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.container {
  height: 100vh;
}
.title h1,
h2 {
  font-family: var(--heading-font);
  color: var(--primary-color);
}
.title h2 {
  color: white;
}

.skills {
  border-radius: 1.875rem;
  opacity: 0.35;
  background: rgba(21, 151, 187, 0.29);
  width: 80%;
  height: 75%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.imgs {
  width: 75%;
  height: 75%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  align-items: center;
}
.imgs li {
  margin-bottom: 2rem;
  overflow: hidden;
  width: 115px;
  height: 100px;

}

.imgs li img {
  width: 100%;
  height: 100%;
}

@media (max-width : 992px) {
    .imgs li {
        margin-bottom: 2rem;
        width: 105px;
        height: 95px;
        margin-right: 2rem;
      
      } 
}
@media (max-width : 576px) {
    .imgs li {
        margin-bottom: 2rem;
        width: 85px;
        height: 75px;
        margin-right: 2rem;
      
      } 
      .skills {
        width: 95%;
        height: 65%;
      }
}
</style>
