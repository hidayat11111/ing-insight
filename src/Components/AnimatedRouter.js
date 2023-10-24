import React from "react";
import StartPage from './StartPage';
import LogSign from './LogSign';
import CreatePage from './CreatePage';
import LoginPage from './LoginPage';
import MainPage from './MainPage';
import { Routes,Route,useLocation } from "react-router-dom";
import {AnimatePresence} from "framer-motion";
import { useEffect } from 'react';
import { app } from "./../firbase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";


const auth=getAuth(app);



function AnimatedRouter(){
    const nav=useNavigate();

    const location=useLocation();
   // const [user,setUser]=useState(null);

    useEffect(()=>{


  
        const visited = localStorage.getItem('visited');
        console.log(visited);
        if (!visited || visited===false) {
          localStorage.setItem('visited', 'true');
          nav("/");
        }
        else{
         // second parameter is a call back function in which there is user object 
    onAuthStateChanged(auth ,(user)=>{
        if(user){
          //yes you are logged in
          console.log("hello user")
          
         
        }
        else{
          //user is logout
          console.log("you are logout");
          nav("/login");
         
        }
          
        })


        }
    
    
    
    }
    
    
    
    ,[nav]);

    
    




return(


<AnimatePresence>

   

    <Routes location={location} key={location.pathname} >


    <Route path='/' element={<StartPage/>}/>
    <Route path='/about' element={<LogSign/>}/>
    <Route path='/login' element={<LoginPage/>}/>
    <Route path='/create' element={<CreatePage/>}/>
    <Route path='/mainpage' element={<MainPage/>}/>

    </Routes>

    

    </AnimatePresence>
    

);


}



export default AnimatedRouter;