import * as firebase from "firebase/app"
import "firebase/auth"

/* if (typeof window !== "undefined") {
  app(config)
} */

const app = firebase.initializeApp({
  apiiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
})

export default app
