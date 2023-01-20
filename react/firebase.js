import { initializeApp } from "firebase/app";
import { getPerformance } from "firebase/performance";
import { getAnalytics } from "firebase/analytics";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyDTLpIYJi3Wd2oKzkU-5Fx7GS-2pqCM9bk",
    authDomain: "oahp-161ba.firebaseapp.com",
    projectId: "oahp-161ba",
    storageBucket: "oahp-161ba.appspot.com",
    messagingSenderId: "919316172871",
    appId: "1:919316172871:web:b8a6564c0cb9a0b3a5e162",
    measurementId: "G-VXWW8DBLPH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Performance Monitoring and get a reference to the service
const perf = getPerformance(app);
const analytics = getAnalytics(app);