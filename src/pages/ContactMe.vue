<template>
  <div class="container">
    <h1 class="text-center mb-4">Contacts</h1>
    <div class="contact">
      <h2 >Connect with Me with Confidence</h2>

      <ul class="mycontacts">
        <li class="d-flex align-items-center">
          <span> <img src="../assets/mail.png" alt="" /> </span>
          <div>
            <label for="email">E-mail</label>
            <a href="mailto:a.ragab8882@gmail.com" id="email">
              a.ragab8882@gmail.com</a
            >
          </div>
        </li>

        <li class="d-flex align-items-center">
          <span> <img src="../assets/mobile.png" alt="" /> </span>
          <div>
            <label for="email">Call me</label>
            <a href="mailto:a.ragab8882@gmail.com" id="email">
              +20 01277643280</a
            >
          </div>
        </li>

        <li class="d-flex align-items-center">
          <span> <img src="../assets/location.png" alt="" /> </span>
          <div>
            <label for="email">Location</label>
            <a href="mailto:a.ragab8882@gmail.com" id="email">
              Alexandria,Egypt</a
            >
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.container {
  height: 100vh;
}

h1,
h2 {
  font-family: var(--heading-font);
  color: var(--primary-color);
}
h2 {
  color: white;
}

.contact {
  width: 80%;
  height: 75%;
  margin: 0 auto;
  background: rgba(21, 151, 187, 0.29);
  border-radius: 1.875rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  opacity: 0.8;
}

.mycontacts a,
.mycontacts p {
  font-family: var(--heading-font);
  color: white;
  font-size: 1.8rem;
  text-decoration: none;
}

img {
  width: 120px;
  height: 120px;
  margin-bottom: -1rem;
}

label {
  display: block;
  font-family: var(--heading-font);
  color: var(--primary-color);
  font-size: 1.2rem;
}



@media (max-width:768px) {
    .mycontacts a,
    .mycontacts p {
      font-size: 1.4rem;
    }


    img {
        width: 110px;
        height: 115px;
      }

}
@media (max-width:576px) {
    h2 {
        font-size: 1.4rem;
    }
    .mycontacts a,
    .mycontacts p {
      font-size: 1.3rem;
    }


    img {
        width: 110px;
        height: 115px;
      }

      .contact {
        width: 95%;
        height: 80%;

      }
      .container {
        height: 75vh;
      }
 
}




</style>
