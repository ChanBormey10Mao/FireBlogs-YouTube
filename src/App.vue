<template>
  <div class="app-wrapper">
    <div class="app">
      <Navigation v-if="!Navigation" />

      <router-view />
      <Footer v-if="!Navigation" />
    </div>
  </div>
</template>

<script>
import Navigation from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import firebase from "firebase/app";
import "firebase/auth";
export default {
  name: "app",
  components: {
    Navigation,
    Footer,
  },
  data() {
    return {
      Navigation: null,
    };
  },

  created() {
    //check if the user is login or signed out
    firebase.auth().onAuthStateChanged((user) => {
      //user will be true /false if the user is signed in or not
      this.$store.commit("updateUser", user);
      // if user is true,go the our store and run updateUser mutation
      if (user) {
        //get user data
        this.$store.dispatch("getCurrentUser");
        //checking
        // console.log(this.$store.state.profileEmail);
      }
    });
    this.checkRoutes();
  },
  mounted() {},
  methods: {
    //check the url if it is valid , if not dont show navbar
    checkRoutes() {
      if (
        this.$route.name == "Login" ||
        this.$route.name == "Register" ||
        this.$route.name == "ForgotPassword"
      ) {
        this.Navigation = true;
        return;
      } else {
        this.Navigation = false;
        return;
      }
    },
  },
  watch: {
    $route() {
      this.checkRoutes();
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Quicksand", sans-serif;
}

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.container {
  max-width: 1440px;
  margin: 0 auto;
}

.link {
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
  color: black;
}

.link-light {
  color: #fff;
}
.arrow {
  margin-left: 8px;
  width: 12px;
  path {
    fill: #000;
  }
}
.arrow-light {
  path {
    fill: #fff;
  }
}
.blog-card-wrap {
  position: relative;
  padding: 80px 16px;
  @media (min-width: 500px) {
    padding: 100px 16px;
  }
  // .blog-cards {
  //   display: grid;
  //   gap: 32px;
  //   grid-template-columns: 1fr;
  //   @media (min-width: 500px) {
  //     grid-template-columns: repeat(2, 1fr);
  //   }
  //   @media (min-width: 900px) {
  //     grid-template-columns: repeat(3, 1fr);
  //   }
  //   @media (min-width: 1200px) {
  //     grid-template-columns: repeat(4, 1fr);
  //   }
  // }
}
</style>
