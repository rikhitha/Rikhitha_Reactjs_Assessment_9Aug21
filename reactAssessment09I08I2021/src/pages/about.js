

import styled from 'styled-components';
import { Form, Button } from 'react-bootstrap';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import Team from "./team"
import React ,{ useState } from 'react'

const CONTAINER = styled.div`
  background: #F7F9FA;
  height: auto;
  width: 90%;
  margin: 5em auto;
  color: snow;
  -webkit-box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.4);
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.4);

  @media screen and (min-width:550px) {
    
    h1 {
      color: #DC143C;
      padding-top: .5em;
    }
  }

  label {
    color: #24B9B6;
    font-size: 1.2em;
    font-weight: 400;
  }

  h1 {
    
    color: #24B9B6;
    padding-top: .5em;
  }

  .form-group {
    margin-bottom: 2.5em;
  }

  .error {
    border: 2px solid #FF6565;
  }

  .error-message {
    color: #FF6565;
    padding: .5em .2em;
    height: 1em;
    position: absolute;
    font-size: .8em;
  }
`;

const MYFORM = styled(Form)`
  width: 90%;
  text-align: left;
  padding-top: 2em;
  padding-bottom: 2em;

  @media(min-width: 786px) {
    width: 50%;
  }
`;

const BUTTON = styled(Button)`
  background: #1863AB;
  border: none;
  font-size: 1.2em;
  font-weight: 400;

  &:hover {
    background: #1D3461;
  }
`;



const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/




const validationSchema = Yup.object().shape({
  name: Yup.string()
  .min(2, "*Names must have at least 2 characters")
  .max(100, "*Names can't be longer than 100 characters")
  .required("*Name is required"),
  email: Yup.string()
  .email("*Must be a valid email address")
  .max(100, "*Email must be less than 100 characters")
  .required("*Email is required"),
  phone: Yup.string()
  .matches(phoneRegExp, "*Phone number is not valid")
  .required("*Phone number required"),
  
  age: Yup.number()
  .min(18, "You must be at least 18 years")
  .max(60, "You must be at most 60 years")
  .required("*Age required"),
  
  
});
const About = () => {
  const [user, setUser] = useState({})
    return (
        <CONTAINER>
      
      <center><h1>APPLY CREDIT CARD </h1></center>
      <Formik
        initialValues={{ name:"", email:"", phone:"",age:""}}
        validationSchema={validationSchema}
        onSubmit={(values, {setSubmitting, resetForm}) => {
            
            setSubmitting(true);

            
            
          setTimeout(() => {


        //     const reqOptios = {
        //       method: "POST",
        //       headers: {
        //           "Content-Type": "application/json"
        //       },
        //       body: JSON.stringify(values)
        //   };

        //   fetch("http://localhost:8080/api/application", reqOptios).then(res => res.json()).then((data) => {
            

           

        //   console.log(data);
        //     console.log("saved");
            
        // });

        fetch("http://localhost:4000/students",
        {
            method:"POST",
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json',

            },
            body:JSON.stringify(values)

        }).then((resp)=>
        {
            resp.json().then((result)=>
            {
                console.log("Result",result);
            })
        })
    console.log(values);
    
    console.log("Submitted");
        // alert("registered successfully")
        alert(JSON.stringify(values, null, 2));

            // alert(JSON.stringify(values, null, 2));
            resetForm();
            setSubmitting(false);
          }, 500);
        }}
      >
        
      {( {values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting }) => (
        <MYFORM onSubmit={handleSubmit} className="mx-auto">
          {console.log(values)}
          <Form.Group controlId="formName">
            <Form.Label>Name :</Form.Label>
            <Form.Control
              type="text"
              
              name="name"
              placeholder="Full Name"
              
              onChange={handleChange}
              
              onBlur={handleBlur}
              
              value={values.name}
              
              className={touched.name && errors.name ? "error" : null}
              />
              
              {touched.name && errors.name ? (
                <div className="error-message">{errors.name}</div>
              ): null}
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Label>Email :</Form.Label>
            <Form.Control
              type="text"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              className={touched.email && errors.email ? "error" : null}
            />
            {touched.email && errors.email ? (
                <div className="error-message">{errors.email}</div>
              ): null}
          </Form.Group>
          <Form.Group controlId="formPhone">
            <Form.Label>Phone :</Form.Label>
            <Form.Control
              type="text"
              name="phone"
              placeholder="Phone"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.phone}
              className={touched.phone && errors.phone ? "error" : null}
              />
              {touched.phone && errors.phone ? (
                <div className="error-message">{errors.phone}</div>
              ): null}
          </Form.Group>
          
          <Form.Group controlId="formAge">
            <Form.Label>Age :</Form.Label>
            <Form.Control
              type="text"
              name="age"
              placeholder="Age"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.age}
              className={touched.age && errors.age ? "error" : null}
              />
              {touched.age && errors.age ? (
                <div className="error-message">{errors.age}</div>
              ): null}
          </Form.Group>
          
         
          <BUTTON variant="primary" type="submit" disabled={isSubmitting}>
            Submit
          </BUTTON>
          
          <Team reacentname={values.name}/>
          
          
        </MYFORM>
       
      )}
      </Formik>
    </CONTAINER>
    
    )
    

};
 
export default About;