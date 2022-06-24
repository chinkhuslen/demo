import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
import {
    getFirestore,
    collection,
    getDocs,
    addDoc,
    getDoc,
    setDoc,
    doc,
    updateDoc,
    increment,
} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js";
import {
    getDatabase,
    onValue,
    ref,
    push,
    query,
    orderByChild,
    orderByKey,
    child,
    set,
    get,
    onChildChanged,
} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyDgYAy6FkKAJ2_0e07Xh8LhzYOpP1ra9Q8",
    authDomain: "demo1-1ee9d.firebaseapp.com",
    databaseURL: "https://demo1-1ee9d-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "demo1-1ee9d",
    storageBucket: "demo1-1ee9d.appspot.com",
    messagingSenderId: "247353066341",
    appId: "1:247353066341:web:4b8f133a68a3d85679578c",
    measurementId: "G-5N6BTMR62T"
};

  
const app = initializeApp(firebaseConfig);
const auth = await getAuth(app);
const db = getFirestore(app);
const realDb = getDatabase(app);


onValue(ref(realDb, 'medee'), snap => {
    let outHtmlInformation = ''
    snap.forEach(ref => {
        console.log(ref)
        outHtmlInformation += `<div class="imformation-trash-heseg">
                                    <div class="dude">
                                        <h1>${ref.val().HenTarisan}</h1>
                                        <h2>${ref.val().haana}</h2>
                                        <span>
                                            <p>${ref.val().delgerengui}.</p>
                                            <h2><i class="fa fa-tree"></i>${ref.val().niithedenShirheg}</h2>
                                        </span>
                                    </div>
                                </div>`
    })
    document.querySelector('.information-in-heseg').innerHTML = outHtmlInformation;
})