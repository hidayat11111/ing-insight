
import sec from "./../Images/sec.jpg";
import "./../Css/LogSign.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";



function LogSign(){


return(

<motion.div id="hello2"  


      
// initial={{opacity: 0}}
// animate={{opacity: 1}}
// exit={{opacity: 0} }
      
    
initial={{width: 0}}
animate={{width: "100%"}}
exit={{ x: window.innerWidth, transition:{ duration: 0.1}} }

>

<div className="frm2">

<div className="imgdiv1">

<img className="im1" src={sec} alt="not loaded"/>

</div>


<div className="frm2a"> 

  <div className="frm2aa">
    
    <h2 className="headd">Eat Smart,Stay Healthy</h2>

    <p className="paraa"> &nbsp;  Discover a healthtier you with Ingredient Insight,guiding your food choices  for a balanced and vibrant lifestyle every day</p>


       <div className="logcreate">
          <Link className="link1"  to="/login" >< button className="loginp" >Login</button></Link>
           <Link   to="/create"><button className="createp"  >Create Account</button></Link>
        </div>


    </div>

</div>



</div>


</motion.div>

);

}
export default LogSign;