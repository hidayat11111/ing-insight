import React from "react";
import './../Css/LoginPage.css';
import loginBck from './../Images/loginBck.png';
import { Link } from "react-router-dom";
 import googl from './../Images/googl.png';
 import facebook from './../Images/facebook.png';
 import twit from './../Images/twit.png';
 import { motion } from "framer-motion";
import UserLogin1 from './../Images/UserLogin1.png'
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
//import { Alert } from 'reactstrap';

const auth = getAuth();

function LoginPage(){

    const navi=useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const[result,setResult]=useState("");


const loginDone = (event)=>{
    event.preventDefault();
    setEmail("");
    setPassword("");
}

const SigninUser = ()=>{

 signInWithEmailAndPassword(auth,email,password)

 .then((value) =>{
     alert("sign in success");
     navi("/mainpage");
  })

    .catch((data) => {  
        
        setResult(data.message);
 }
 );

 

}


return(

<motion.div className="main_div" 



      
// initial={{opacity: 0}}
// animate={{opacity: 1}}
// exit={{opacity: 0} }

    
initial={{width: 0}}
animate={{width: "100%"}}
exit={{ x: window.innerWidth, transition:{ duration: 0.1}} }

>



 
<div className="snd_div" style={{backgroundImage:`url(${loginBck})`}}>


<div className="ist">
    
    
     <h2 className="para_1">Welcome&nbsp;<h2 className="ui">Back!</h2></h2>

 <p className="para_2">   To keep connected with us please login with your Personal information and Pick up where you left off</p>  


 </div>

      <img className="img" src={UserLogin1} alt="not loaded" />  

</div>


<div className="third_divv">


    <div className="third_div1">

   <h2 className="head_1">Sign</h2> &nbsp;&nbsp;

   <h2 className="head_2">In</h2>

    </div>
    
    <p className="login_para">Enter Details to Sign In</p>

<div className="form"> 


    <form onSubmit={loginDone} >


<div className="input">   
<i id="icon" class="fa-solid fa-user fa-fade"></i>
<input className="input_1"   
type="text"
 placeholder="Email" 
 value={email} 
 onChange={(e) => setEmail(e.target.value)}  />
</div>
 


<div className="input_">   
<i id="icon" class="fa-solid fa-lock fa-fade"></i>
<input className="input_1"
 type="password"
  placeholder="Password" 
  value={password}
  onChange={(e) => setPassword(e.target.value)} /> 
</div>
 

 
<p className="forget">Forgot Password?</p>

<input className="btnlog" type="submit" value="Login" onClick={SigninUser}  />

    </form>


    </div>




 <p className="continue">or Continue with</p>



 <div className="gfa">

    
 <img className="google"  src={googl} alt="not loaded"  />
 <img className="facebook" src={facebook} alt="not loaded"  />
<img className="twit" src={twit} alt="not loaded"/>


 </div> 


 <div className="account">

<p className="dont">Don't Have an Account ?</p>
<Link className="lin" to="/create"> <p className="register"> &nbsp; Register</p></Link>
 </div>

 <p>{result}</p>

 {/* <Alert color="danger">
         {result}
      </Alert>  */}
    



</div> 




</motion.div>








);

}

export default LoginPage;