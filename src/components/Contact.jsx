import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

function Contact() {
  const navigate= useNavigate();
  const [dataaa, setdataaa] = useState({});
  const [userdata, setuserdata] = useState({namee:"",email:"",message:""});


  const callcontactPage=async()=>{
    try{
      const res=await fetch("/api/about",{
      method:'GET',
      headers:{
        "Content-Type":"application/json"
      },
      credentials:"include"
      }
      );
      console.log(res)
      const data=await res.json();
      setdataaa(data);
      console.log(dataaa);
      setuserdata({...userdata,namee:data.name,email:data.email})


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
  const handleEvents=(e)=>{

    console.log(userdata);
    const namee= e.target.name;
    const value = e.target.value;

    setuserdata({...userdata,[namee]:value})
  }
  
  const contactsubmit=async(e)=>{

  e.preventDefault();
  const {namee,email,message}=userdata;
  console.log("await called");


  const res = await fetch("/api/contact", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
         name:namee,email:email,message:message
    })
  })  
  console.log("await called");
  const data =await res.json();
  if(!data)
  {console.log("message not sent");}
  else
  {
    console.log("message sent");
    setuserdata({...userdata,message:""})
  }

}

  useEffect(() => {
    return () => {
      callcontactPage();
    };
  }, []);
  return (
 


    <div className="container">
      <h1 className="text-center">Contact Us</h1>

      <Form  onSubmit={contactsubmit} method='POST'>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            value={userdata.namee}
            name="namee"
            onChange={handleEvents}
            required
          />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            value={userdata.email}
            name="email"
            onChange={handleEvents}
            required
          />
        </Form.Group>

        <Form.Group controlId="formMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            placeholder="Enter your message"
            value={userdata.message}
            name="message"
            onChange={handleEvents}
            required
          />
        </Form.Group>

        <Button onClick={contactsubmit} variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  
  );
}

export default Contact;
