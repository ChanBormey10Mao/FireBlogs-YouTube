<template>
  <div id="wrapper">
    <div class="sidenav">
      <div class="Register-main-text">
        <h2>Register to FireBlogs</h2>
        <p>Register to FireBlogs today</p>
      </div>
    </div>
    <div class="main">
      <div class="col-md-6 col-sm-12">
        <div class="Register-form">
          <form>
            <div class="form-group">
              <!-- First Name -->
              <label
                >First Name <font-awesome-icon icon="user" class="mr-3"
              /></label>
              <input
                type="text"
                class="form-control"
                placeholder="First Name"
                v-model="firstName"
              />
            </div>
            <!-- Error Alert -->
            <div
              v-if="errorMsg.firstName"
              class="alert alert-danger alert-dismissible d-flex align-items-center fade show"
            >
              <font-awesome-icon
                :icon="{ prefix: 'fas', iconName: 'exclamation-circle' }"
                class="mr-3"
              />
              <strong class="mx-2">Error!</strong> {{ errorMsg.firstName }}
            </div>

            <!-- Last Name -->
            <div class="form-group">
              <label
                >Last Name <font-awesome-icon icon="user" class="mr-3"
              /></label>
              <input
                type="text"
                class="form-control"
                placeholder="Last Name"
                v-model="lastName"
              />

              <!-- Error Alert -->
              <div
                v-if="errorMsg.lastName"
                class="alert alert-danger alert-dismissible d-flex align-items-center fade show"
              >
                <font-awesome-icon
                  :icon="{ prefix: 'fas', iconName: 'exclamation-circle' }"
                  class="mr-3"
                />
                <strong class="mx-2">Error!</strong> {{ errorMsg.lastName }}
              </div>
            </div>
            <!-- Email -->
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
                v-if="errorMsg.email"
                class="alert alert-danger alert-dismissible d-flex align-items-center fade show"
              >
                <font-awesome-icon
                  :icon="{ prefix: 'fas', iconName: 'exclamation-circle' }"
                  class="mr-3"
                />
                <strong class="mx-2">Error!</strong> {{ errorMsg.email }}
              </div>
            </div>
            <!-- User Name -->
            <div class="form-group">
              <label
                >User Name <font-awesome-icon icon="user" class="mr-3"
              /></label>
              <input
                type="text"
                class="form-control"
                placeholder="User Name"
                v-model="username"
              />
              <!-- Error Alert -->
              <div
                v-if="errorMsg.username"
                class="alert alert-danger alert-dismissible d-flex align-items-center fade show"
              >
                <font-awesome-icon
                  :icon="{ prefix: 'fas', iconName: 'exclamation-circle' }"
                  class="mr-3"
                />
                <strong class="mx-2">Error!</strong> {{ errorMsg.username }}
              </div>
            </div>

            <!-- Password -->
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
                v-if="errorMsg.password"
                class="alert alert-danger alert-dismissible d-flex align-items-center fade show"
              >
                <font-awesome-icon
                  :icon="{ prefix: 'fas', iconName: 'exclamation-circle' }"
                  class="mr-3"
                />
                <strong class="mx-2">Error!</strong> {{ errorMsg.password }}
              </div>
            </div>

            <button
              type="submit"
              class="btn btn-black"
              @click.prevent="Register"
            >
              Register
            </button>
            <div>
              <router-link :to="{ name: 'Login' }" class="router-link-active"
                >Already have an account?</router-link
              >
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import firebase from "firebase/app";
import "firebase/auth";
import db from "../firebase/firebaseInit.js";

export default {
  name: "Register",
  components: {},
  data() {
    return {
      valid: true,
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      cpassword: "",
      error: null,
      errorMsg: "",
    };
  },
  computed: {
    pwdConfirmationRule() {
      return () => this.password === this.cpassword && "Password doesn't match";
    },
  },
  methods: {
    async Register() {
      if (
        this.email !== "" &&
        this.password !== "" &&
        this.firstName !== "" &&
        this.lastName !== "" &&
        this.username !== ""
      ) {
        this.error = false;
        this.errorMsg = "";
        const firebaseAuth = await firebase.auth();
        const createUser = await firebaseAuth.createUserWithEmailAndPassword(
          this.email,
          this.password
        );
        const result = await createUser;
        const dataBase = db.collection("users").doc(result.user.uid);
        await dataBase.set({
          firstName: this.firstName,
          lastName: this.lastName,
          username: this.username,
          email: this.email,
        });
        this.$router.push({ name: "Home" });
        return;
      }
      this.error = true;
      this.errorMsg = {};

      if (this.firstName == "" || this.firstName.length > 15) {
        this.errorMsg.firstName =
          "First Name need be filled && No more than 15 character";
      }
      if (this.lastName == "" || this.lastName.length > 15) {
        this.errorMsg.lastName =
          "Last Name need be filled && No more than 15 characters";
      }
      if (this.username == "" || this.username.length <= 3) {
        this.errorMsg.username =
          "Username need be filled && At Least than 4 characters";
      }
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
#wrapper {
  position: relative;
}
.main-head {
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
  margin-bottom: 200px;
  overflow: auto;
}

@media screen and (max-height: 450px) {
  .sidenav {
    padding-top: 15px;
  }
}

@media screen and (max-width: 450px) {
  .Register-form {
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

  .Register-form {
    margin-top: 80%;
  }

  .register-form {
    margin-top: 20%;
  }
}

.Register-main-text {
  margin-top: 20%;
  padding: 60px;
  color: #fff;
}

.Register-main-text h2 {
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
