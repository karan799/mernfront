import React,{useState} from 'react';
import axios from "axios"
import { useNavigate } from 'react-router-dom';


function Register() {
    const navigate = useNavigate();

    const [user, setUser] = useState({
        name: "", email:"", phone:"", work:"", password:""  , cpassword: ""
  });
  let name, value;

  const handleEvents=(e)=>{

    console.log(user);
    name = e.target.name;
    value = e.target.value;

    setUser({...user,[name]:value})
  }
  // const postData=async(e)=>
  // {
  //      e.preventDefault();
  //    const { name, email, phone, work, password, cpassword } = user;
      
  //     const msg=JSON.stringify({
  //       name, email,  work,phone, password, cpassword
  //   })
  //   const config = {
  //       headers: {'Access-Control-Allow-Origin': '*'}
  //   };       

    const postData = async (e)=> {
      e.preventDefault();
      const { name, email, phone, work, password, cpassword } = user;
      const res = await fetch("/api/Registerr", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, phone, work, password, cpassword
            })
      });

      const data =await res.json();

     if (res.status === 422 || !data) {
        window.alert(" email used or password not matching");
        console.log("Invalid Registration");
    } else {
          window.alert(" Registration Successfull");
        console.log("Successfull Registration");
        navigate({ pathname: '/Signin' }) 
       }



      }

  return (
    <>
    <form method='POST' >

    <div class="mb-3">
  <label for="formGroupExampleInput" class="form-label">Name</label>
  <input type="text" class="form-control" value={user.name} 
  onChange={handleEvents} name="name" id="formGroupExampleInput3" placeholder="Example input placeholder"/>
</div>

  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" value={user.email} 
    onChange={handleEvents} name="email" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  

  

<div class="mb-3">
  <label for="formGroupExampleInput" class="form-label">work</label>
  <input type="text" class="form-control" value={user.work} 
  onChange={handleEvents} name="work" id="formGroupExampleInput" placeholder="Example input placeholder"/>
</div>

<div class="mb-3">
  <label for="formGroupExampleInput" class="form-label">Phone Number</label>
  <input type="text" class="form-control" value={user.phone} 
  onChange={handleEvents} name="phone" id="formGroupExampleInput2" placeholder="Example input placeholder"/>
</div>

  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" value={user.password} 
    onChange={handleEvents} name="password" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">CPassword</label>
    <input type="password" class="form-control" value={user.cpassword} 
    onChange={handleEvents} name="cpassword" id="exampleInputPassword2"/>
  </div>
  <button type="submit" class="btn btn-primary" value="Register" onClick={postData}>Submit</button>
</form>
    </>
    
  );
}

export default Register;
