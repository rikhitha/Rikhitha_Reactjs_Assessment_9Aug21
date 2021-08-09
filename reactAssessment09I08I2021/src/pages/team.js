import React ,{ useState } from 'react';
  
const Teams = (props) => 
{

  const data = {
    sname:props.name
       
  };
console.log(data.sname);
  // const [formValues, setFormValues] = useState(initialValues);
  
  

  return (
    <div>
      <center>
      <h1>Student Report Generated for {props.name}</h1>
           </center>
            </div>
            
  );
};
  
export default Teams;