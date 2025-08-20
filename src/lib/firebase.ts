import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'

// Your web app's Firebase configuration
// Replace these with your actual Firebase config values from the console
const firebaseConfig = {
  apiKey: "AIzaSyBJacWBmxIUcW63cr21kJOUdnnXlnJDNLM",
  authDomain: "codecraft-3c15b.firebaseapp.com",
  projectId: "codecraft-3c15b",
  storageBucket: "codecraft-3c15b.firebasestorage.app",
  messagingSenderId: "483348493724",
  appId: "1:483348493724:web:430a34abbfc99404af4459",
  measurementId: "G-Q1J4VXXR70"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Firebase services
export const db = getFirestore(app)
export const auth = getAuth(app)
export const storage = getStorage(app)

export default app
