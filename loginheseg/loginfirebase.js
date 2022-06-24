import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    updateEmail,
    updatePassword,
    sendEmailVerification
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
  const auth=getAuth(app);
  const db=getFirestore(app);
  const realDb=getDatabase(app);
  
  //бүртгүүлэх
  const createUser=async()=>{
    console.log("Signup");
    let email=document.getElementById('email1').value;
    let password=document.getElementById('password1').value;
    let ovog=document.getElementById("ovog").value;
    let ner=document.getElementById("ner").value;
    let baiguulaganer=document.getElementById("baiguulagaNer").value;
    console.log(document.getElementById("baiguulagiinNerHeseg"))
   
// Бүртгэл үүсгэж хэрэглэгчийн UID гаар doc үүсгэнэ
//Хувь хүнээр хаяг үүсгэнэ
if((document.getElementById("baiguulagiinNerHeseg").style.display==="none")){
  
  
        createUserWithEmailAndPassword(auth,email,password)
      .then(async(userCredential)=>{
        console.log(userCredential)
        const userUidFromCred=userCredential.user.uid;
        console.log(userUidFromCred);
          await setDoc(doc(db,"huviHun",userUidFromCred,),{
          ovog:ovog,
          ner:ner,
          email:email,
          niitmod:0,
          userUid:userUidFromCred
        });
          await swal("Амжилттай нэвтэрлээ");
          window.location.href('./profile/index.html');
        // location.href = "modBurtgel.html";
        
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        alert("Нэвтрэх нэр эсвэл нууц үг буруу байна")
      })  
 }
//Байгуулагаар хаяг үүсгэнэ
        if((document.getElementsByClassName("ovogniiHeseg")[0].style.display==="none")&&(document.getElementsByClassName("nerniiHeseg")[0].style.display==="none")){
          console.log("hello");
              createUserWithEmailAndPassword(auth,email,password)
            .then(async(userCredential)=>{
              console.log(userCredential)
              const userUidFromCred=userCredential.user.uid;
              
                await setDoc(doc(db,"baiguulaga",userUidFromCred,),{
                baiguulaganer:baiguulaganer,
                email:email,
                niitmod:0,
                userUid:userUidFromCred
              });
                await swal("Амжилттай нэвтэрлээ");
                window.location.href('./profile/index.html');
          
              // location.href = "modBurtgel.html";
               
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              console.log(errorCode, errorMessage);
              alert("Нэвтрэх нэр эсвэл нууц үг буруу байна")  
             })

     }

  }




  //nevtreh
  const login=()=>{
    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;
  
    signInWithEmailAndPassword(auth,email,password)
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        let userUid = userCredential.user.uid;
        console.log("amjilttai newterlee uid= ", userUid);
        // window.location.href = "./profileHeseg/.profile.html";
        console.log(auth.currentUser.email);
        swal("Амжилттай нэвтэрлээ");
        localStorage.setItem("userid",userUid)
        window.location.href('./profile/index.html');
      
       
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  }
  // burtguuleh болон nevtreh товч дарж Функц ажиллуулна
  document.getElementById('burtguuleh').addEventListener('click',createUser);
  document.getElementById("nevtreh").addEventListener("click",async()=>{
const emailInput=document.getElementById("email").value;
    console.log(document.getElementById("email").value.length);
    let temp=emailInput.split("@");
    let ext=temp.slice(temp.length-1,temp.length);
    console.log(ext[0]);
    if(ext[0]==="yahoo.com" || ext[0]==="gmail.com")
    {
     await login();
    
     
    }else{
      swal("Нэвтрэх хаяг буруу байна")
    }
    
  });