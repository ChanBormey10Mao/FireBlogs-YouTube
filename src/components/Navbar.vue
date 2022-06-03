<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link class="nav-link" to="/">FireBlogs</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link class="nav-link" :to="{ name: 'Home' }"
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'Blog' }"
              >Blogs</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="#">Create Posts</router-link>
          </li>
          <li class="nav-item" v-if="!user">
            <router-link class="nav-link" :to="{ name: 'Login' }"
              >Login/Register</router-link
            >
          </li>
        </ul>

        <!-- Add sth here if you want to expand more functionalities -->
        <ul class="nav navbar-nav pull-right" v-if="user">
          <div class="dropdown">
            <button
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              class="mr-2 profile-in"
            >
              {{ this.$store.state.profileInitials }}
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <div class="dropdown-item">
                <div class="col-4">
                  <div class="mr-2 profile-in">
                    <router-link to="#" class="text-white">
                      {{ this.$store.state.profileInitials }}
                    </router-link>
                  </div>
                </div>

                <div class="col-10">
                  <h3>
                    {{
                      this.$store.state.profileFristName +
                      " " +
                      this.$store.state.profileLastName
                    }}
                  </h3>
                  <p>{{ this.$store.state.profileUsername }}</p>
                  <p>{{ this.$store.state.profileEmail }}</p>
                </div>
              </div>

              <div class="dropdown-item">
                <router-link to="#" class="link-no-decor">
                  <font-awesome-icon
                    icon="user-astronaut"
                    class="mr-2 profile-in"
                  />
                  <p>Admin</p>
                </router-link>
              </div>
              <div class="dropdown-item" @click="signOut">
                <font-awesome-icon icon="sign-out" class="mr-2 profile-in" />
                <p>Sign Out</p>
              </div>
            </div>
          </div>
        </ul>
      </div>
    </nav>
  </header>
</template>
<script>
import firebase from "firebase/app";
import "firebase/auth";

export default {
  name: "navigation",
  components: {},
  methods: {
    signOut() {
      firebase.auth().signOut();
      window.location.reload();
    },
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
};
</script>

<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
  text-decoration: none;
  list-style: none;
}

.profile-in {
  padding: 7px 7px;
  background-color: black;
  border-radius: 50%;
  color: #fff;
  cursor: pointer;
}
.dropdown-menu {
  left: auto;
  right: 0;
  cursor: pointer;
}
.link-no-decor {
  text-decoration: none;
  color: black;
  cursor: pointer;
}
</style>
