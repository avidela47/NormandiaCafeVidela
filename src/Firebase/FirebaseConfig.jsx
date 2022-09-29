import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore"
import 'firebase/compat/auth'



const firebaseConfig = {
  apiKey: "AIzaSyAPI1KPM1sq_raZBTBMwIlmQyQPGPrST4Q",
  authDomain: "cafenormandiavidela.firebaseapp.com",
  projectId: "cafenormandiavidela",
  storageBucket: "cafenormandiavidela.appspot.com",
  messagingSenderId: "418841130705",
  appId: "1:418841130705:web:0bc63be6af5781476e37f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);