import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import * as firebaseui from 'firebaseui'

var config = {
  apiKey: "AIzaSyAzdoAjlM9YlQ-gl8VRayCxtJbnrl9qDsw",
  authDomain: "nuxt-firebase-auth.firebaseapp.com",
  databaseURL: "https://nuxt-firebase-auth.firebaseio.com",
  projectId: "nuxt-firebase-auth",
  storageBucket: "nuxt-firebase-auth.appspot.com",
  messagingSenderId: "316484287956"
};

!firebase.apps.length ? firebase.initializeApp(config) : ''
export const GoogleProvider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export const DB = firebase.database();

// https://firebase.google.com/docs/auth/web/firebaseui
export const ui = new firebaseui.auth.AuthUI(firebase.auth())
export const uiconfig = {
  signInFlow: 'popup',
  signInSuccessUrl: '/',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.PhoneAuthProvider.PROVIDER_ID
  ],
  callbacks: {
    signInSuccessWithAuthResult: (authResult, redirectUrl) => {
      console.log(authResult, redirectUrl)
    },
    signInFailure: (error) => {
      console.log(error)
    }
  }
}

export default firebase
