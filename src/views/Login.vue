<template>
  <div>
    <div class="sidenav">
      <div class="login-main-text">
        <h2>
          Application<br />
          Login Page
        </h2>
        <p>Login or register from here to access.</p>
      </div>
    </div>
    <div class="main">
      <div class="col-md-6 col-sm-12">
        <div class="login-form">
          <form>
            <div class="form-group">
              <label
                >Email <font-awesome-icon icon="envelope" class="mr-3"
              /></label>
              <input
                type="text"
                class="form-control"
                placeholder="Email"
                v-model="email"
              />
              <!-- Error Alert -->
              <div
                v-if="errorMsg"
                class="alert alert-danger alert-dismissible d-flex align-items-center fade show"
              >
                <font-awesome-icon
                  :icon="{ prefix: 'fas', iconName: 'exclamation-circle' }"
                  class="mr-3"
                />
                <strong class="mx-2">Error!</strong> {{ errorMsg.email }}
              </div>
            </div>
            <div class="form-group">
              <label
                >Password <font-awesome-icon icon="lock" class="mr-3"
              /></label>
              <input
                type="password"
                class="form-control"
                placeholder="Password"
                v-model="password"
              />
              <!-- Error Alert -->
              <div
                v-if="errorMsg"
                class="alert alert-danger alert-dismissible d-flex align-items-center fade show"
              >
                <font-awesome-icon
                  :icon="{ prefix: 'fas', iconName: 'exclamation-circle' }"
                  class="mr-3"
                />
                <strong class="mx-2">Error!</strong> {{ errorMsg.password }}
              </div>
            </div>
            <!-- Error Alert -->
            <div
              v-if="errorMsgFireBase"
              class="alert alert-danger alert-dismissible d-flex align-items-center fade show"
            >
              <font-awesome-icon
                :icon="{ prefix: 'fas', iconName: 'exclamation-circle' }"
                class="mr-3"
              />
              <strong class="mx-2">Error!</strong> {{ errorMsgFireBase }}
            </div>
            <div>
              <router-link
                :to="{ name: 'ForgotPassword' }"
                class="router-link-active forgot-password"
                >Forgot Password?</router-link
              >
            </div>
            <button type="submit" class="btn btn-black" @click.prevent="signIn">
              Login
            </button>
            <button class="btn btn-secondary">
              <router-link
                class="router-link text-white"
                :to="{ name: 'Register' }"
                >Register</router-link
              >
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import firebase from "firebase/app";
import "firebase/auth";
export default {
  name: "Login",
  components: {},
  data() {
    return {
      email: "",
      password: "",
      error: null,
      errorMsg: null,
      errorMsgFireBase: null,
    };
  },
  methods: {
    signIn() {
      if (this.email !== "" && this.password !== "") {
        firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password)
          .then(() => {
            this.$router.push({ name: "Home" });
            this.error = false;
            this.errorMsg = false;
            console.log(firebase.auth().currentUser.uid);
          })
          .catch((err) => {
            this.error = true;
            this.errorMsg = false;
            this.errorMsgFireBase = err.message;
          });
        return;
      }
      this.error = true;
      this.errorMsg = {};
      if (
        this.email == "" ||
        !this.email.match(/^\w+([.-]?\w+)_@\w+(_[_.-]?\w+)_(.\w{2,3})+$/)
      ) {
        this.errorMsg.email = "Email need be filled && a correct formatted one";
      }
      if (this.password == "") {
        this.errorMsg.password = "Password need be filled";
      } else if (this.password.length < 8) {
        this.errorMsg.password = "No less than 8 characters";
      } else if (!this.password.match(/([$%^&*])/)) {
        this.errorMsg.password =
          "Password needs one of these special character  %, $, ^, or *";
      }
      return;
    },
  },
};
</script>
<style lang="scss" scoped>
body {
  font-family: "Lato", sans-serif;
}

.main-head {
  height: 150px;
  background: #fff;
}

.sidenav {
  height: 100%;
  background-image: url("../assets/background.png");
  overflow-x: hidden;
  padding-top: 20px;
}

.main {
  padding: 0px 10px;
}

@media screen and (max-height: 450px) {
  .sidenav {
    padding-top: 15px;
  }
}

@media screen and (max-width: 450px) {
  .login-form {
    margin-top: 10%;
  }

  .register-form {
    margin-top: 10%;
  }
}

@media screen and (min-width: 768px) {
  .main {
    margin-left: 40%;
  }

  .sidenav {
    width: 40%;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
  }

  .login-form {
    margin-top: 80%;
  }

  .register-form {
    margin-top: 20%;
  }
}

.login-main-text {
  margin-top: 20%;
  padding: 60px;
  color: #fff;
}

.login-main-text h2 {
  font-weight: 300;
}

.btn-black {
  background-color: #000 !important;
  color: #fff;
}
.router-link {
  text-decoration: none;
}
.forgot-password {
  color: red;
}
</style>
