import React from "react";
import './../Css/MainPage.css';
import { motion } from "framer-motion";
import { getAuth,signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
//import {app} from './../firbase';
//import { getDatabase, ref, set} from "firebase/database";

//const db=getDatabase(app);
const auth=getAuth();


function MainPage()
{

  const navv=useNavigate();

  // code for testing firerbase connection


  // const putData=()=>{
  //   set(ref(db,'user/hidayat'),{
  //     id:1,
  //     name:"hidayat",
  //     age:23,
  //   },
    
  //   );
  // }


    function hidAt(e){
    const fileSelected = e.target.files[0];
    //console.log(fileSelected);

      const formData = new FormData();
      formData.append("image", fileSelected);
       fetch("http://127.0.0.1:3000/predict", {
         method: "POST",
        body: formData,
      })
        .then((resp) => resp.json())
        .then((data) => {
          console.log("DATA: ", data);
          //out.innerText = `Prediction: "${data.prediction}"`;
          // const [label,setlabel]=useState('');
          // setlabel(label);
        }
        );
    }

    const sgOut=()=>{
      signOut(auth).then(()=>{
        console.log("statement succesfull");
        navv("/login");
      })
      .catch((err)=>{
        console.error(err);
      })
    }


return(

<motion.div className="container"



          
initial={{width: 0}}
animate={{width: "100%"}}
exit={{ x: window.innerWidth, transition:{ duration: 0.1}} }
>

    <div className="upload_wrapper">

     <label for="file" >Scan</label>

      <input type="file" name="photo" id="file" onChange={(e)=>hidAt(e)}/>


      <button className="nam"  onClick={sgOut}>signout </button>


      {/* <button className="bn" onClick={putData} >click</button> */}

</div>

</motion.div>

);


}
export default MainPage;