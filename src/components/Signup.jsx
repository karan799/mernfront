import React ,{useState,useHistory}from 'react';
import {  useNavigate } from 'react-router-dom';


const Signup = () => {
  const navigate = useNavigate();

  const [userr, setuserr] = useState({ email:"",password:""  });
  let name, value;

  const handleEvents=(e)=>{

    console.log(userr);
    name = e.target.name;
    value = e.target.value;

    setuserr({...userr,[name]:value})
  }
      
  const loginUser = async (e)=> {
    e.preventDefault();
    const {  email, password } = userr;
    const res = await fetch("/api/login", {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify({
               email, password
          })
    });
    const data =await res.json();
    if (res.status === 400 || !data) {
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
  } else {
        window.alert(" login Successfull");
      console.log("Successfull login");
      navigate({ pathname: '/' }) 
    }

  }
   
  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title text-center">Login</h5>
          <form method='POST'>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username</label>
              <input type="text" className="form-control" 
              onChange={handleEvents}
              id="username" name="email" value={userr.email}  placeholder="Enter your username" />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" className="form-control"
              onChange={handleEvents}
              id="password" name="password" value={userr.password} placeholder="Enter your password" />
            </div>
            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" id="remember" />
              <label className="form-check-label" htmlFor="remember">Remember me</label>
            </div>
            <button type="submit" onClick={loginUser} className="btn btn-primary w-100">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};



export default Signup;
