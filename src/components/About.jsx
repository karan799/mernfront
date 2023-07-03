import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function About() {
  const navigate= useNavigate();
  const [dataaa, setdataaa] = useState({});

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
      console.log("in signup");
      navigate({ pathname: '/Signin' })

    }
  }

  useEffect(() => {
    return () => {
      callAboutPage();
    };
  }, []);
  return (
    <>
    <h1>welcome {dataaa.name}</h1>
    </>
  );
}

export default About;
