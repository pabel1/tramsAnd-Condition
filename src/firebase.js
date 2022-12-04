// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth,GoogleAuthProvider,signInWithPopup} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyAMYkdap8zX5-oyvsWNJ04NFmjK28bFLDU",
  authDomain: "authentication-c58eb.firebaseapp.com",
  projectId: "authentication-c58eb",
  storageBucket: "authentication-c58eb.appspot.com",
  messagingSenderId: "415859973961",
  appId: "1:415859973961:web:29c524ad66b0e026cdc498",
  measurementId: "G-SZ5833PWVG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth=getAuth(app)
const provider = new GoogleAuthProvider();

export const signInWithGoogle=()=>{
    signInWithPopup(auth,provider).then((result)=>{
        console.log(result)
        console.log(result.user.providerData[0].uid)
        
    }).catch((error)=>{
        console.log(error)
    })
}