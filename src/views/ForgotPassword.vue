<template>
  <div id="wrapper">
    <Modal
      v-show="modalActive"
      :modalMessage="modalMessage"
      v-on:close-modal="closeModal"
    />
    <Loading v-show="loading" />
    <div class="sidenav">
      <div class="forgotpwd-main-text">
        <h2>Forgot Password<br /></h2>
        <p>
          Reset a new password <br />
          Enter your Email to reset it
        </p>
      </div>
    </div>
    <div class="main">
      <div class="col-md-6 col-sm-12">
        <div class="forgotpwd-form">
          <div>
            <h3>
              Back to
              <router-link :to="{ name: 'Login' }" class="router-link-active"
                >Login</router-link
              >
            </h3>
          </div>
          <br />
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
            </div>
            <button
              type="submit"
              class="btn btn-black text-white"
              @click.prevent="resetPassword"
            >
              Reset Password
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Modal from "../components/Modal.vue";
import Loading from "../components/Loading.vue";
import firebase from "firebase/app";
import "firebase/auth";
export default {
  name: "ForgotPassword",
  components: {
    Modal,
    Loading,
  },
  data() {
    return {
      email: null,
      modalActive: false,
      modalMessage: "",
      loading: null,
    };
  },
  methods: {
    resetPassword() {
      this.loading = true;
      firebase
        .auth()
        .sendPasswordResetEmail(this.email)
        .then(() => {
          this.modalMessage =
            "If your account exist, you will receive an email";
          this.loading = false;
          this.modalActive = true;
        })
        .catch((err) => {
          this.modalMessage = err.message;
          this.loading = false;
          this.modalActive = true;
        });
    },
    closeModal() {
      this.modalActive = !this.modalActive;
      this.email = "";
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
  // height: 150px;
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
  .forgotpwd-form {
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

  .forgotpwd-form {
    margin-top: 80%;
  }

  .register-form {
    margin-top: 20%;
  }
}

.forgotpwd-main-text {
  margin-top: 20%;
  padding: 60px;
  color: #fff;
}

.forgotpwd-main-text h2 {
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
