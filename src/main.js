import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from "firebase/app";
import "firebase/auth";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faFacebook,
  faInstagram,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import {
  faHome,
  faPhone,
  faEnvelope,
  faPrint,
  faLock,
  faUser,
  faExclamationCircle,
  faUserAstronaut,
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(
  faFacebook,
  faInstagram,
  faTwitter,
  faGithub,
  faHome,
  faPhone,
  faEnvelope,
  faPrint,
  faLock,
  faUser,
  faExclamationCircle,
  faUserAstronaut,
  faSignOut
);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;
let app;
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount("#app");
  }
});
