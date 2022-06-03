<template>
  <footer class="bg-dark text-center text-white">
    <!-- section social media -->
    <div class="icons mb-4 container p-4">
      <a
        class="btn btn-primary btn-lg btn-floating"
        style="background-color: #3b5998"
        href="#!"
        role="button"
      >
        <li>
          <font-awesome-icon
            :icon="{ prefix: 'fab', iconName: 'facebook' }"
            class="mr-1"
          /></li
      ></a>
      <a
        class="btn btn-primary btn-lg btn-floating"
        style="background-color: #ac2bac"
        href="#!"
        role="button"
      >
        <li>
          <font-awesome-icon
            :icon="{ prefix: 'fab', iconName: 'instagram' }"
            class="mr-1"
          /></li
      ></a>
      <a
        class="btn btn-primary btn-lg btn-floating"
        style="background-color: #55acee"
        href="#!"
        role="button"
      >
        <li>
          <font-awesome-icon
            :icon="{ prefix: 'fab', iconName: 'twitter' }"
            class="mr-1"
          /></li
      ></a>
      <a
        class="btn btn-primary btn-lg btn-floating"
        style="background-color: #171515"
        href="#!"
        role="button"
      >
        <li>
          <font-awesome-icon
            :icon="{ prefix: 'fab', iconName: 'github' }"
            class="mr-1"
          /></li
      ></a>
      <!-- section social media ends -->

      <div class="row">
        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <ul class="list-unstyled mb-0">
            <li class="active">
              <router-link class="text-white" :to="{ name: 'Home' }"
                >Home</router-link
              >
            </li>
            <li class="">
              <router-link class="text-white" :to="{ name: 'Blog' }"
                >Blogs</router-link
              >
            </li>
            <li class="">
              <router-link class="text-white" to="#">Create Posts</router-link>
            </li>
            <li class="">
              <router-link
                class="text-white"
                :to="{ name: 'Login' }"
                v-if="!user"
                >Login/Register</router-link
              >
            </li>
          </ul>
        </div>
        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <!-- Links -->

          <p>
            <font-awesome-icon icon="home" class="mr-3" />
            New York, NY 10012, US
          </p>
          <p>
            <font-awesome-icon icon="envelope" class="mr-3" />
            info@example.com
          </p>
          <p><font-awesome-icon icon="phone" class="mr-3" /> + 01 234 567 88</p>
          <p><font-awesome-icon icon="print" class="mr-3" /> + 01 234 567 89</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
export default {
  name: "Footer",
  components: {
    FontAwesomeIcon,
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
};
</script>

<style scoped>
* {
  list-style: none;
}
a {
  border-radius: 60%;
}
</style>
