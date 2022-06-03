import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase/app";
import "firebase/auth";
import db from "../firebase/firebaseInit.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sampleBlogCards: [
      {
        blogTitle: "Blog Card#1",
        blogCoverPhoto: "stock-1",
        blogDate: "May1,2021",
      },
      {
        blogTitle: "Blog Card#2",
        blogCoverPhoto: "stock-2",
        blogDate: "May1,2021",
      },
      {
        blogTitle: "Blog Card#3",
        blogCoverPhoto: "stock-3",
        blogDate: "May1,2021",
      },
      {
        blogTitle: "Blog Card#4",
        blogCoverPhoto: "stock-4",
        blogDate: "May1,2021",
      },
    ],
    editPost: null,
    //user varaible doesnt store user data. Just to check if the user in loged in
    user: null,
    profileEmail: null,
    profileFristName: null,
    profileLastName: null,
    profileUsername: null,
    profileId: null,
    profileInitials: null,
  },
  //In mutation, we dont make changes or update to the app state (Edit can an update/change)
  mutations: {
    toggleEditPost(state, payload) {
      state.editPost = payload;
      console.log(state.editPost);
    },
    setProfileInfo(state, doc) {
      // use dbResult to put all value to the data variables
      state.profileId = doc.id;
      state.profileEmail = doc.data().email;
      state.profileFristName = doc.data().firstName;
      state.profileLastName = doc.data().lastName;
      state.profileUsername = doc.data().username;
    },
    //Update User state (Check if we ahve user or not)
    updateUser(state, payload) {
      state.user = payload;
    },
    setProfileInitial(state) {
      //get  initials of the user
      state.profileInitials =
        state.profileFristName.match(/(\b\S)?/g).join("") +
        state.profileLastName.match(/(\b\S)?/g).join("");
    },
  },
  //In action, we dont make changes or update to the app state (User => permenent state)
  actions: {
    // async = function that await can be used
    async getCurrentUser({ commit }) {
      // Inside an async function you can use the await keyword before a call to a function that returns a promise. This makes the code wait at that point until the promise is settled, at which point the fulfilled value of the promise is treated as a return value, or the rejected value is thrown.
      //get the info from database based on the UID using auth()
      const dataBase = await db
        .collection("users")
        .doc(firebase.auth().currentUser.uid);

      //get the result from database
      const dbResult = await dataBase.get();
      //update the all data from dbResult
      commit("setProfileInfo", dbResult); //send dbResult to setProfileInfo(is a mutation) as a payload
      commit("setProfileInitial"); //send profile initial in another mutation
      console.log(dbResult);
    },
  },
  modules: {},
});
