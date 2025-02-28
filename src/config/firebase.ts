import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBDllBb_eWoMiQsISOEuEFCmvUZS2Tf8h4",
  authDomain: "peakaboo-53e27.firebaseapp.com",
  projectId: "peakaboo-53e27",
  storageBucket: "peakaboo-53e27.firebasestorage.app",
  messagingSenderId: "678963515970",
  appId: "1:678963515970:web:c979ba387f08fe068153db",
  measurementId: "G-WYRH62W82T"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);