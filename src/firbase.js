// this is used to intializ our firebase app
import {initializeApp} from 'firebase/app';

//contains api keys which helps to connect this firebase account

const firebaseConfig = {
    apiKey: "AIzaSyASpGWH22p9J8kiwOELc2KPFDlcbyB8jHE",
    authDomain: "insight-4bf47.firebaseapp.com",
    projectId: "insight-4bf47",
    storageBucket: "insight-4bf47.appspot.com",
    messagingSenderId: "892348780057",
    appId: "1:892348780057:web:7d0ebc40702bff92a26488",
    measurementId: "G-1DW6H5H5ND",
    databaseUrl: 'https://insight-4bf47-default-rtdb.firebaseio.com/',
  };

  // the intializeapp coming fromn firebase on that we pass firebaseConfiq
  //by doing this our firebase app is connect to firebase account 
  export const app=initializeApp(firebaseConfig);
  