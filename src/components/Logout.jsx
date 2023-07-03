import React ,{useEffect}from 'react';
import { useNavigate } from 'react-router-dom';

function Logout() {
    const navigate=useNavigate();
    useEffect(() => {
        fetch("/api/logout",{
            method:'GET',
            headers:{
              "Content-Type":"application/json"
            },
            credentials:"include"
            }
            )
            .then((res)=>{
                navigate({ pathname: '/Signin' },{replace:true})
                
                if(res.status!==200)
                {
                  throw new Error(res.error)
               }
            })
           .catch((err)=>{
            console.log("in signup");
            navigate({ pathname: '/Signin' })
      
           })
    }, []    )
  return (
    <>
      
    </>
  );
}

export default Logout;
