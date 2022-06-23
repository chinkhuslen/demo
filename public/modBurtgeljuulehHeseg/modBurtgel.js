import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";


import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js";

   import {
       getStorage,ref as sRef,
       uploadBytes ,
       uploadBytesResumable
    } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-storage.js";

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
      const storage = getStorage(app);

let id=0;
 
const signUp = document.getElementById("signUp");
const signIn = document.getElementById("signIn");
const advise = document.getElementById("advise");
const statistic = document.getElementById("statistic");
var close = document.getElementById("close-x");
const tt = document.getElementsByClassName("otherTree")[0];





// on car udur

        const date_picker_element = document.querySelector('.date-picker');
        const selected_date_element = document.querySelector('.date-picker .selected-date');
        const dates_element=document.querySelector('.date-picker .dates');
        const mth_element=document.querySelector('.date-picker .dates .month .mth');
        const next_mth_element = document.querySelector('.date-picker .dates .month .next-mth');
        const prev_mth_element = document.querySelector('.date-picker .dates .month .prev-mth');
        const days_element = document.querySelector('.date-picker .dates .days');
        const months=['1 cap','2 cap','3 cap','4 cap','5 cap','6 cap','7 cap','8 cap','9 cap','10 cap','11 cap','12 cap',];

let date = new Date();
let day = date.getDate();
let month = date. getMonth();
let year = date. getFullYear();

        let selectedDate = date;
        let selectedDay =day;
        let selectedMonth =month;
        let selectedYear = year;

mth_element.textContent = months[month] + " " + year;


selected_date_element.textContent=formatDate(date);
selected_date_element.dataset.value=selectedDate;

      populateDates();
      date_picker_element.addEventListener('click',toggleDatePicker);
      next_mth_element.addEventListener('click', goToNextMonth);
      prev_mth_element.addEventListener('click',goToPrevMonth);
      function toggleDatePicker (e){

if(!checkEventPathForClass(e.path,'dates')){
  dates_element.classList.toggle('active');
}
}
function goToNextMonth (e){
    month++;
    if (month > 11){
      month = 0;
      year++;
}
mth_element.textContent = months[month] + " " + year;
populateDates();
}
function goToPrevMonth (e){
month--;
if (month<0){
  month = 11;
  year--;
}
mth_element.textContent = months[month] + " "+ year;
populateDates();
}
function populateDates (e){
days_element.innerHTML = ' ';
let amount_days=31;
if (month == 1){
  amount_days =28;
}
if (month == 3 || month == 5 || month == 8 || month == 10 ){
  amount_days =30;
}
for (let i=0; i<amount_days; i++){
  const day_element = document.createElement('div');
  day_element.classList.add('day');
  day_element.textContent = i + 1;
  if (selectedDay == (i + 1) && selectedYear == year && selectedMonth == month){
      day_element.classList.add('selected');
  }
  day_element.addEventListener('click', function(){
      selectedDate = new Date (year + '-' + (month+1) + '-' + (i+1));
      selectedDay =i +1;
      selectedMonth =month;
      selectedYear =year;
      selected_date_element.textContent= formatDate(selectedDate);
      selected_date_element.dataset.value = selectedDate;
      populateDates();
  });
  days_element.appendChild(day_element);
}
}

function checkEventPathForClass (path, selector){
for(let i=0; i< path.length; i++){
  if (path[i].classList&& path[i].classList.contains(selector)){
      return true;
  }
}
return false;
}
function formatDate (d){
let day = d.getDate();
if (day < 10){
  day = '0' + day;
}
let month = d.getMonth()+1;
if (month < 10){
  month = '0' + month;
}
let year = d.getFullYear();
return year + " оны"+ " " +month+ " сарын" + " " + day;
}
// todo list xeseg
var close=document.getElementsByClassName("test");
let w;
var ch=document.getElementsByClassName("z")
let r;
let too=document.getElementById("countmod")

document.getElementById("addBtn").addEventListener("click",async function(){
  let inputValue="";
    console.log("add button daragdlaa.",document.getElementById("SongogdsonModGargahHeseg"));

    let li = document.createElement("li");
    if(document.getElementById("modniitorol").value === "бусад"){
      inputValue = document.getElementById("ooa").value;
    }else {
      inputValue = document.getElementById("modniitorol").value
    }
      console.log(inputValue);
    let inputCount=document.getElementById("counttree").value;
      let t = document.createTextNode(inputValue);
      let span2 = document.createElement("SPAN")
      let span1 = document.createElement("SPAN");
      let span = document.createElement("SPAN");

      let txt = document.createTextNode("\u00D7");
    
      let tiim =document.createTextNode(" \u221A")
      let dots=document.createTextNode(inputCount)
      console.log(inputCount)

      li.appendChild(t);
      if (inputCount == 0 || inputCount < 0) {
      alert("Тоогоо оруулна уу!");
    } else {
      document.getElementById("myUL").appendChild(li);
      li.appendChild(span2)
      li.appendChild(span1)
      li.appendChild(span);
    
      span.appendChild(txt)
      span1.appendChild(dots)
      span2.appendChild(t)

      span2.className="modniiTorolNer"
      span1.className="tooShirheg"
      span.className = "test";
    
    
      li.className="list";
      
    }
    let sum=0;
    for(let i of close){
        sum+=parseInt(i.parentElement.getElementsByClassName("tooShirheg")[0].innerText);
        i.addEventListener('click', ()=>{
        sum-= parseInt(i.parentElement.getElementsByClassName("tooShirheg")[0].innerText);
        i.parentElement.remove();
        updateSum(sum);
        });
    }
    updateSum(sum);
    document.getElementById("counttree").placeholder

  });
  function updateSum(sum){
    if(sum>0){
  
        document.getElementById("ModniiContainer").style.display = "block";
    }else{
        document.getElementById("ModniiContainer").style.display = "none";
    }
    too.innerText = sum;
  }


function selectItem(el){
if(el.value === "бусад"){
 tt.style.display = "block";
}else {
  tt.style.display = "none";
}

}






// ********************************************************************************************************** //
onAuthStateChanged(auth,async(user)=>{
              
                  if(user)
                  {
                  console.log("hello1");
                  
                  const userUid=user.uid; 
                  console.log(userUid,auth.currentUser.uid);
                  document.getElementById("nevtreh").style.display="none";
                  document.getElementById("garah").style.display="block";
                  if(auth.currentUser.uid===userUid);
                  {
                      console.log("adilhan baina");
                      ///huvihunesehiig shalgana
                      const  huviHunEseh=await getDocs(collection(db,"huviHun"));
                      //baiguulaga esehiig shalgana
                      const  baiguulagaEseh=await getDocs(collection(db,"baiguulaga"));

                      
                      huviHunEseh.forEach(async(huviHun)=>{
                          console.log(huviHun.data().userUid,userUid)
                      if(huviHun.data().userUid===userUid){
                                    console.log("huviHun",huviHun.data().userUid,userUid);

                      }
                      });



                      baiguulagaEseh.forEach(async(baiguulaga)=>{
                          
                          if(baiguulaga.data().userUid===userUid){
                            console.log("baiguulaga",baiguulaga.data().userUid,userUid);
                      }
                      })
              
                      
                  }
                  }
});
let arr=[]
// ********************************************************************************************************** //
document.getElementById("registrationButton").addEventListener("click",async()=>{

      const listModHaruulah=document.getElementsByClassName("list");
      const listModniiNer=document.getElementsByClassName("modniiTorolNer");
      //Тухайн төрөл модны тоо ширхэг
      const torolModniiToo=document.getElementsByClassName("tooShirheg");
      // console.log(listModHaruulah,listModniiNer);
        let bairshil=document.getElementById('bairshil').value;
        // Бүх модны нийлбэр
        let tooShirheg=parseInt(document.getElementById('countmod').innerText);
        let HezeeTarisan=document.getElementsByClassName('selected-date')[0].innerText;
        let modniitorol=document.getElementById('modniitorol').value;
        let modniiiDelgerengui=document.getElementById("description").value;
            console.log(bairshil,tooShirheg,HezeeTarisan,modniitorol,modniiiDelgerengui);
            const saveBtn=document.getElementById("save");



      onAuthStateChanged(auth,async(user)=>{
              
          if(user)
          {
          console.log("hello1");
          const userUid=user.uid; 
          if(auth.currentUser.uid===userUid);
          {
              console.log("adilhan baina");
              ///huvihunesehiig shalgana
              const  huviHunEseh=await getDocs(collection(db,"huviHun"));
              //baiguulaga esehiig shalgana
              const  baiguulagaEseh=await getDocs(collection(db,"baiguulaga"));

              
              huviHunEseh.forEach(async(huviHun)=>{
                  console.log(huviHun.data().userUid,userUid)
              if(huviHun.data().userUid===userUid){
                         const tarisanModTorloor=await collection(db,"users",huviHun.data().userUid,"tarisanModTorloor")
                              console.log(tarisanModTorloor)
                                     //////Тухайн байгуулагын нийт мод нэмэгдэнэ/// UID гаар нэмэгдэнэ
                                     await setDoc(doc(db,"huviHun",userUid),{
                                          niitmod:increment(tooShirheg)
                                      },{merge:true});
                                      ///////Тухайн байгуулагын users collection  байгаа учраас users collection-nd uid гаар нь нэмэгдэнэ
                                     await setDoc(doc(db,"users",userUid),{
                                          niitmod:increment(tooShirheg)
                                      },{merge:true});

                                     await setDoc(doc(db,'aimagduurgeer',bairshil),{
                                              niitmod:increment(tooShirheg)
                                            },{merge:true});
                                    await setDoc(doc(db,"aimagduurgeer","MongolUlsiinNiitMod"),{
                                        niitmod:increment(tooShirheg)
                                    },{merge:true});
                                    await setDoc(doc(db,"jilOdroor","niitmod"),{
                                        niitmod:increment(tooShirheg)
                                    },{merge:true})
                                    await setDoc(doc(db,"jilOdroor",HezeeTarisan),{
                                      niitmod:increment(tooShirheg)
                                    },{merge:true})
                            
                    let hereglegciinTuhainOdriinTarisanModTorloor=[]

                          //////hereglegciin Modnuud Torlooroo MiniiTarisanModniiTorol gesen collectiond doc bolj orno Давталтаар авж байгаа модны төрлөөр doc үүсгэнэ
                          //////Бас Монгол болон аймгийн моднууд төрөл төрлөөрөө нэмэгдэнэ
                          for(let i=0;i<listModniiNer.length;i++)
                          {
                            
                                  await setDoc(doc(db,"users",huviHun.data().userUid,"modniiTorloor",listModniiNer[i].innerText,),{
                                    niitmod:increment(parseInt(torolModniiToo[i].innerText))
                                    },{merge:true});  

                                    await setDoc(doc(db,"huviHun",huviHun.data().userUid,"modniiTorloor",listModniiNer[i].innerText,),{
                                    niitmod:increment(parseInt(torolModniiToo[i].innerText))
                                    },{merge:true});
                                    
                                    await setDoc(doc(db,"aimagduurgeer","MongolUlsiinNiitMod","modniiTorloor",listModniiNer[i].innerText,),{
                                        niitmod:increment(parseInt(torolModniiToo[i].innerText))
                                        },{merge:true});
                                        
                                    await setDoc(doc(db,"aimagduurgeer",bairshil,"modniiTorloor",listModniiNer[i].innerText,),{
                                    niitmod:increment(parseInt(torolModniiToo[i].innerText))
                                    },{merge:true});
                                    
                                    

                                    await setDoc(doc(db,"jilOdroor",HezeeTarisan,"modniiTorloor",listModniiNer[i].innerText,),{
                                        niitmod:increment(parseInt(torolModniiToo[i].innerText))
                                        },{merge:true}); 
                                    await setDoc(doc(db,"modniiTorloor",listModniiNer[i].innerText),{
                                        niitmod:increment(parseInt(torolModniiToo[i].innerText))
                                    },{merge:true});
                                    await hereglegciinTuhainOdriinTarisanModTorloor.push(listModniiNer[i].innerText);

                            
                          }

                                      await addDoc(collection(db,"huviHun",userUid,"miniitarisanmodnuud",),{
                                              HezeeTarisan:HezeeTarisan,
                                              niithedenShirheg:tooShirheg,
                                              haana:bairshil,
                                              modniitorol:hereglegciinTuhainOdriinTarisanModTorloor
                                      });



                                      //medee collection uusgene medee oruulna
                                      const medee={
                                              HenTarisan:huviHun.data().ner,
                                              HezeeTarisan:HezeeTarisan,
                                              niithedenShirheg:tooShirheg,
                                              haana:bairshil,
                                              modniitorol:hereglegciinTuhainOdriinTarisanModTorloor,
                                              delgerengui:modniiiDelgerengui,
                                              zurag:"https://president.mn/wp-content/uploads/2021/11/1-Copy.png"
                                      } 
                                      await addDoc(collection(db,"medee"),medee);
                                      await push(ref(realDb,"medee"),{
                                        HenTarisan:huviHun.data().ner,
                                        HezeeTarisan:HezeeTarisan,
                                        niithedenShirheg:tooShirheg,
                                        haana:bairshil,
                                        modniitorol:hereglegciinTuhainOdriinTarisanModTorloor,
                                        delgerengui:modniiiDelgerengui,
                                        zurag:"https://president.mn/wp-content/uploads/2021/11/1-Copy.png"

                                      })
                                      await swal("Амжилттай бүртгэгдлээ");

                                      location.reload();


              }
              });




              baiguulagaEseh.forEach(async(baiguulaga)=>{
                  // console.log("baiguulaga",baiguulaga.data().userUid,userUid);
                  
                  if(baiguulaga.data().userUid===userUid){
                              const tarisanModTorloor=await collection(db,"users",baiguulaga.data().userUid,"tarisanModTorloor")
                              console.log(tarisanModTorloor)
                                     //////Тухайн байгуулагын нийт мод нэмэгдэнэ/// UID гаар нэмэгдэнэ
                                     await setDoc(doc(db,"baiguulaga",userUid),{
                                          niitmod:increment(tooShirheg)
                                      },{merge:true});
                                      ///////Тухайн байгуулагын users collection  байгаа учраас users collection-nd uid гаар нь нэмэгдэнэ
                                     await setDoc(doc(db,"users",userUid),{
                                          niitmod:increment(tooShirheg)
                                      },{merge:true});

                                     await setDoc(doc(db,'aimagduurgeer',bairshil),{
                                              niitmod:increment(tooShirheg)
                                            },{merge:true});
                                    await setDoc(doc(db,"aimagduurgeer","MongolUlsiinNiitMod"),{
                                        niitmod:increment(tooShirheg)
                                    },{merge:true});
                                    await setDoc(doc(db,"jilOdroor","niitmod"),{
                                        niitmod:increment(tooShirheg)
                                    },{merge:true})
                                    await setDoc(doc(db,"jilOdroor",HezeeTarisan),{
                                      niitmod:increment(tooShirheg)
                                    },{merge:true})
                            
                    let hereglegciinTuhainOdriinTarisanModTorloor=[]

                          //////hereglegciin Modnuud Torlooroo MiniiTarisanModniiTorol gesen collectiond doc bolj orno Давталтаар авж байгаа модны төрлөөр doc үүсгэнэ
                          //////Бас Монгол болон аймгийн моднууд төрөл төрлөөрөө нэмэгдэнэ
                          for(let i=0;i<listModniiNer.length;i++)
                          {
                            
                                  await setDoc(doc(db,"users",baiguulaga.data().userUid,"modniiTorloor",listModniiNer[i].innerText,),{
                                    niitmod:increment(parseInt(torolModniiToo[i].innerText))
                                    },{merge:true});  

                                    await setDoc(doc(db,"baiguulaga",baiguulaga.data().userUid,"modniiTorloor",listModniiNer[i].innerText,),{
                                    niitmod:increment(parseInt(torolModniiToo[i].innerText))
                                    },{merge:true});
                                    
                                    await setDoc(doc(db,"aimagduurgeer","MongolUlsiinNiitMod","modniiTorloor",listModniiNer[i].innerText,),{
                                        niitmod:increment(parseInt(torolModniiToo[i].innerText))
                                        },{merge:true});
                                        
                                    await setDoc(doc(db,"aimagduurgeer",bairshil,"modniiTorloor",listModniiNer[i].innerText,),{
                                    niitmod:increment(parseInt(torolModniiToo[i].innerText))
                                    },{merge:true});
                                    
                                    

                                    await setDoc(doc(db,"jilOdroor",HezeeTarisan,"modniiTorloor",listModniiNer[i].innerText,),{
                                        niitmod:increment(parseInt(torolModniiToo[i].innerText))
                                        },{merge:true}); 
                                    await setDoc(doc(db,"modniiTorloor",listModniiNer[i].innerText),{
                                        niitmod:increment(parseInt(torolModniiToo[i].innerText))
                                    },{merge:true});
                                    await hereglegciinTuhainOdriinTarisanModTorloor.push(listModniiNer[i].innerText);

                            
                          }

                                      await addDoc(collection(db,"baiguulaga",userUid,"miniitarisanmodnuud",),{
                                              HezeeTarisan:HezeeTarisan,
                                              niithedenShirheg:tooShirheg,
                                              haana:bairshil,
                                              modniitorol:hereglegciinTuhainOdriinTarisanModTorloor,
                                      });
                                      const medee={
                                        baiguulagiinNer:baiguulaga.data().baiguulaganer,
                                              HezeeTarisan:HezeeTarisan,
                                              niithedenShirheg:tooShirheg,
                                              haana:bairshil,
                                              modniitorol:hereglegciinTuhainOdriinTarisanModTorloor,
                                              delgerengui:modniiiDelgerengui,
                                      } 
                                      await addDoc(collection(db,"medee"),medee);
                                      await push(ref(realDb,"medee"),{
                                        HenTarisan:baiguulaga.data().baiguulaganer,
                                        HezeeTarisan:HezeeTarisan,
                                        niithedenShirheg:tooShirheg,
                                        haana:bairshil,
                                        modniitorol:hereglegciinTuhainOdriinTarisanModTorloor,
                                        delgerengui:modniiiDelgerengui,
                                      })
                                      const file=document.getElementById("image");
                                      await console.log(file.files[0]);
                                      await arr.push(file.files[0])
                                      console.log(arr)

                                      if(file.files[0]){
            // const storageRef = sRef(storage, auth.currentUser.uid+"/"+ HezeeTarisan ,);
              console.log("Saving...", file.files[0]);
              await push(ref(realDb,"medee"),{
                                        baiguulagiinNer:baiguulaga.data().baiguulaganer,
                                        HezeeTarisan:HezeeTarisan,
                                        niithedenShirheg:tooShirheg,
                                        haana:bairshil,
                                        modniitorol:hereglegciinTuhainOdriinTarisanModTorloor,
                                        delgerengui:modniiiDelgerengui,
                                        modzurag:arr[0].name,
                                      })
              
          }else{
            swal("zurag oruulna uu");
          }
                                     await swal("goodLuck")
                                      location.reload();
              }
          })  
          
          }

          }
});


})

const saveBtn=document.getElementById("save");

saveBtn.addEventListener("click",()=>{


        console.log("hello");
        const file=document.getElementById("image");
        let HezeeTarisan=document.getElementsByClassName('selected-date')[0].innerText;

          // 'file' comes from the Blob or File API
          if(file.files[0]){
            console.log(file.files[0]);
            const storageRef = sRef(storage, auth.currentUser.uid+"/"+ HezeeTarisan ,);
              console.log("Saving...", file.files[0]);
              
              uploadBytes(storageRef, file.files[0],).then(async(snapshot) => {
             
                await swal("Зураг амжилттай орлоо");
                id++;
            }).catch(err=>console.log(err));
          }else{
            swal("zurag oruulna uu");
          }

});

document.getElementById("garah").addEventListener("click", signout);
async function signout () {
         await signOut(auth).then(async() => {
           await console.log("signed out");
           await swal("Амжилттай Бүртгэлээс гарлаа");
           location.reload();
           document.getElementById("nevtreh").style.display="block";
          document.getElementById("garah").style.display="none";
          }).catch((error) => {
          });
  }