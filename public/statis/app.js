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
  databaseURL:
    "https://demo1-1ee9d-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "demo1-1ee9d",
  storageBucket: "demo1-1ee9d.appspot.com",
  messagingSenderId: "247353066341",
  appId: "1:247353066341:web:4b8f133a68a3d85679578c",
  measurementId: "G-5N6BTMR62T",
};

//some var ---------------------------------------------
const app = initializeApp(firebaseConfig);
const auth = await getAuth(app);
const db = getFirestore(app);
const realDb = getDatabase(app);
let totalTree = 0;
const dude = collection(db, "modniiTorloor");

// some arrays ---------------------------------------------

let aimagGraphArrId = [];
let trees = [];
let arrNiitmod = [];
let modniiId = [];
let aimagGraphArrNiitmod = [];

// Graphics ----------------------------------------------------

async function totalGraph(modniiId, arrNiitmod) {
  const ctx = document.getElementById("myChart").getContext("2d");
  const myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: arrNiitmod,
      datasets: [
        {
          label: "# of Votes",
          data: modniiId,
          backgroundColor: [
            "green",
            "red",
            "orange",
            "yellow",
            "white",
            "black",
            "maroon",
            "dodgerblue",
            "brown",
            "aqua",
            "azure",
            "purple",
            "navy",
            "salmon",
          ],
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}

async function aimagGraph(aimagGraphArrId, aimagGraphArrNiitmod) {
  const cts = document.getElementById("myGraph").getContext("2d");
  const myGraph = new Chart(cts, {
    type: "pie",
    data: {
      labels: aimagGraphArrId,
      datasets: [
        {
          label: "# of Votes",
          data: aimagGraphArrNiitmod,
          backgroundColor: [
            "green",
            "red",
            "orange",
            "yellow",
            "white",
            "black",
            "purple",
            "aqua",
            "gray",
            "pink",
            "blue",
            "dodgerblue",
            "lightgreen",
            "gold",
            "brown",
            "salmon",
            "navy",
            "turquoise",
            "orchid",
            "maroon",
            "azure",
            "lightblue",
          ],
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}

//Functions -----------------------------------------------------------

async function usult() {
  const howMuchUsers = collection(db, "users");
  let qwers = 0;
  getDocs(howMuchUsers).then((snap) => {
    snap.forEach((doc) => {
      qwers++;
    });
    if (Math.floor(qwers / 1000) >= 1) {
      let zxcasd = Math.floor(qwers / 1000);
      document.querySelector(".users-number").textContent = zxcasd + "K";
      if (Math.floor(zxcasd / 1000) >= 1) {
        let jncvmvnmnkmdf = Math.floor(zxcasd / 1000);
        document.querySelector(".users-number").textContent =
          jncvmvnmnkmdf + "M";
        if (Math.floor(jncvmvnmnkmdf / 1000) >= 1) {
          let mjhbvbiojcvibj = Math.floor(jncvmvnmnkmdf / 1000);
          document.querySelector(".users-number").textContent =
            mjhbvbiojcvibj + "B";
        }
      }
    } else {
      document.querySelector(".users-number").textContent = qwers;
    }
  });
}

async function haveTotalTreeNumbers() {
  const udeded = collection(db, "modniiTorloor");
  let zeroqqqwesa = 0;
  getDocs(udeded).then((snap) => {
    snap.forEach((doc) => {
      zeroqqqwesa += doc.data().niitmod;
    });
    let outTarisanModOut = document.querySelector(".tarisan-modnii-toonii-k");
    if (Math.floor(zeroqqqwesa / 1000) > 0) {
      let iuaojsidjkmkzxc = Math.floor(zeroqqqwesa / 1000);
      outTarisanModOut.textContent = iuaojsidjkmkzxc + "K";

      if (Math.floor(iuaojsidjkmkzxc / 1000) > 0) {
        let cmxkvljk23sc = Math.floor(iuaojsidjkmkzxc / 1000000);
        outTarisanModOut.textContent = cmxkvljk23sc + "M";
        if (Math.floor(cmxkvljk23sc / 1000) > 0) {
          let nmncxvmnkldsfk = Math.floor(cmxkvljk23sc / 1000);
          outTarisanModOut.textContent = nmncxvmnkldsfk + "B";
          if (Math.floor(nmncxvmnkldsfk / 1000) > 0) {
            outTarisanModOut.textContent =
              Math.floor(nmncxvmnkldsfk / 1000) + "T";
          }
        }
      }
    } else {
      outTarisanModOut.textContent = zeroqqqwesa;
    }
    let totalPercent = zeroqqqwesa / 1000000000;
    meterGraph(totalPercent);
  });
}

async function avarageAimagTarilt() {
  const holyMoly = collection(db, "aimagDuurgeer");
  let myGuys = 0;
  getDocs(holyMoly).then((snap) => {
    snap.forEach((doc) => {
      myGuys += doc.data().niitmod;
    });
    let avaragePlantAimag = document.querySelector(".dundaj-aimag-tarilt");
    if (Math.floor(myGuys / 1000) > 0) {
      let bvmmcvbvmcb = Math.floor(myGuys / 1000);
      avaragePlantAimag.textContent = bvmmcvbvmcb + "K";
      if (Math.floor(bvmmcvbvmcb / 1000) > 0) {
        let mvblkmkl = Math.floor(bvmmcvbvmcb / 1000000);
        avaragePlantAimag.textContent = mvblkmkl + "M";
        if (Math.floor(mvblkmkl / 1000) > 0) {
          let ooikkblvc = Math.floor(cmxkvljk23sc / 1000);
          avaragePlantAimag.textContent = ooikkblvc + "B";
          if (Math.floor(ooikkblvc / 1000) > 0) {
            avaragePlantAimag.textContent = Math.floor(ooikkblvc / 1000) + "T";
          }
        }
      }
    } else {
      avaragePlantAimag.textContent = myGuys;
    }
  });
}

async function meterGraph(params) {
  document.querySelector(".meterInside").style.width = params + "%";
  if (params > 100) {
    document.querySelector(".meterInside").style.width = 100 + "%";
  }
  document.querySelector(".total-tree-percent").textContent = params + "%";
}

//Firebases ----------------------------------------------------------------------------

const aimagMod = collection(db, "aimagduurgeer");
getDocs(aimagMod).then((snap) => {
  snap.forEach((doc) => {
    aimagGraphArrId.push(doc.id);
    aimagGraphArrNiitmod.push(doc.data().niitmod);
    totalTree += doc.data().niitmod;
  });
  aimagGraph(aimagGraphArrId, aimagGraphArrNiitmod);
});

getDocs(dude).then((snap) => {
  snap.forEach((doc) => {
    arrNiitmod.push(doc.data().niitmod);
    modniiId.push(doc.id);
  });
  haveTotalTreeNumbers();
  usult();
  avarageAimagTarilt();

  totalGraph(arrNiitmod, modniiId);
});
