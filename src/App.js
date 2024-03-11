import './App.css';
import { useState,useEffect } from "react";
function App() {
  const[onlineStatus,setOnlineStatus]=useState(true);

  const checkOnline=()=>{
     window.addEventListener("offline", () => {
       setOnlineStatus(false);
     });

     window.addEventListener("online", () => {
       setOnlineStatus(true);
     });
     return onlineStatus;
  }

  useEffect(()=>{
   checkOnline();
  },[])

  const isOnlineStatus = checkOnline();

  if(!isOnlineStatus){
    return <h1>Your Internet seems to be down,please check your network</h1>;
  }else{
  return (
    <div>
       <h1>Your Internet seems to be working fine</h1>;
    </div>
  );
  }
}

export default App;
