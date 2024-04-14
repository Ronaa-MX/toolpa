import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth"
import {getFirestore} from "firebase/firestore"
// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

const firebaseConfig = {

	apiKey: "AIzaSyAyBmcPo_AJTQ3GpvloJAMbIuTeqL71m88",
  
	authDomain: "toolpa-78e3a.firebaseapp.com",
  
	projectId: "toolpa-78e3a",
  
	storageBucket: "toolpa-78e3a.appspot.com",
  
	messagingSenderId: "1096572079563",
  
	appId: "1:1096572079563:web:40d2a50b01a8c7ba663a4e"
  
  };
  

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
