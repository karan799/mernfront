import React, { useState } from 'react';
import { useEffect } from 'react';


function Home() {

  const [dataaa, setdataaa] = useState({})
  
  const callAboutPage=async()=>{
    try{
      const res=await fetch("/api/about",{
      method:'GET',
      headers:{
        accept:"application/json",
        "Content-Type":"application/json"
      },
      credentials:"include"
      }
      );
      console.log(res)
      const data=await res.json();
      setdataaa(data);
      console.log(dataaa);


      if(res.status!==200)
      {
        throw new Error(res.error)
     }


      
    }
    catch(err){
      console.log("please login");
      

    }
  }

  useEffect(() => {
    return () => {
      callAboutPage();
    };
  }, []);
  return (
    <div>
      <h1>home {dataaa.name}</h1>
    </div>
  );
}

export default Home;
