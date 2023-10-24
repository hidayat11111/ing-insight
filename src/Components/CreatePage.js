import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import loginBck from './../Images/loginBck.png';
import CreatePag from './../Images/CreatePag.png';
import './../Css/CreatePage.css';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from './../firbase';
import { useNavigate } from "react-router-dom";


const auth=getAuth(app);

function CreatePage(){
    const navigate= useNavigate();

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");


    function changeEmail(e){
        setEmail(e.target.value);
    }

    function changePassword(e){
        setPassword(e.target.value);
    }

   const whenSubmit=(event)=>{
    event.preventDefault();
   }

    const signupUser = ()=>{
        createUserWithEmailAndPassword(auth, email,password)
        .then((response) =>{
            alert("created sucessfully");
            navigate("/mainpage")
            console.log(response);
        });
    }



return(


<motion.div className="main_div" 



      
initial={{width: 0}}
animate={{width: "100%"}}
exit={{ x: window.innerWidth, transition:{ duration: 0.1}} }

>

 
<div className="snd_div" style={{backgroundImage:`url(${loginBck})`}}>


<div className="istt">
    
 <h2 className="para_11">Join&nbsp;<h2 className="piu">Us</h2>&nbsp;Today!</h2> 
<p className="para_22">  Let food be thy medicine, thy medicine shall be thy food.You don’t have to eat less, you just have to eat right</p>

 </div>

      <img className="img1" src={CreatePag}  alt="not loaded" />  

</div>


<div className="third_div">


    <div className="third_div1">

   <h2 className="head_1">Sign</h2> &nbsp;&nbsp;

   <h2 className="head_2">Up</h2>

    </div>
    
    <p className="login_para">Add Your Details to Sign Up</p>

<div className="form"> 

    <form onSubmit={whenSubmit} >


<div className="input">   
<i id="icons" class="fa-solid fa-user fa-fade"></i>
<input className="input_1" type="text" placeholder="Name"/>
</div>
 


<div className="cinput_">   
<i id="icons" class="fa-solid fa-envelope fa-fade"></i>
<input className="input_1" type="text" placeholder="Email" value={email} onChange={changeEmail}/> 
</div>




<div className="cinput_">   
<i id="icons" class="fa-solid fa-phone fa-fade"></i>
<input className="input_1" type="number" placeholder="Mobile No"/> 
</div>



<div className="cinput_">   
<i id="icons" class="fa-solid fa-lock fa-fade"></i>
<input className="input_1" type="password" placeholder="Password" value={password} onChange={changePassword}/> 
</div>



<div className="cinput_">   
<i id="icons" class="fa-solid fa-lock fa-fade"></i>
<input className="input_1" type="password" placeholder="Confirm Password"/> 
</div>
 
<input className="btnlogg" type="submit" value="Sign Up" onClick={signupUser} />

    </form>

    {/* <button onClick={signupUser}> create user</button> */}


    </div>





 <div className="gfa">

 

 </div> 


 <div className="accountt">

<p className="dontt">Already Have an Account? ?</p>
<Link className="linnn" to="/login"> <p className="logg"> &nbsp; Login</p></Link>
 </div>
    



</div> 




</motion.div>









);

}

export default CreatePage;