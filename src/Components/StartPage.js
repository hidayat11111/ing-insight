import React from "react";
import img1 from "./../Images/img1.png";
import logo from "./../Images/logo.jpg"
import "./../Css/StartPage.css";
//import { Router } from "react-router-dom";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import strt1 from "./../Images/strt1.jpg";
import strt2 from "./../Images/strt2.jpg";

function StartPage() {
    return (
  
      <motion.div className="div"
      
      
      
      
      // initial={{opacity: 0}}
      // animate={{opacity: 1}}
      // exit={{opacity: 0} }

          
initial={{width: 0}}
animate={{width: "100%"}}
exit={{ x: window.innerWidth, transition:{ duration: 0.1}} }


       style={{backgroundImage:`url(${strt1}),url(${strt2})`}}
      
      >
      

        <div className="div_1">
        <img className="logo" id="logo" src={logo} alt="" />
        </div>
       
<div className="div_2">

        <p  className="p1"> Welcome to Ingredient Insight </p>
         <p className="p2"> The Best App to control your Nutritional Diet Plan</p>  
</div>
  

      <div className="div_3">
 
  <img className="img_1"src={img1} alt=""/>

      </div>

     


      <Link to="/about"> <button className="bttn">Get Started</button></Link>
  
      </motion.div>
     
    );
  }
  
  export default StartPage;
  