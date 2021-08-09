import React,{useState} from "react";

import 'react-credit-cards/es/styles-compiled.css';

import Cards from 'react-credit-cards';

import './Ccdetails.css';
  
export default function AnnualReport() 
{

  const [number, setNumber] = useState('');

  const [name, setName] = useState('');

  const [expiry, setExpiry] = useState('');

  const [cvc, setCvc] = useState('');

  const [focus, setFocus] = useState('');

  const options ={
    num:number,
    nam:name,
    exp:expiry,
    cv:cvc
  };
// const [formvalues,setformvalues]=useState(options);
  

  const handleClick = (e) =>
     {
      //  setformvalues(options);
        // e.preventDefault();
        // console.log("details"+JSON.stringify(formvalues));

        e.preventDefault();
        console.log("inside handledosubmit"+JSON.stringify(options));

        const reqOptios = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(options)
     };
     fetch("http://localhost:8080/api/ccdetails", reqOptios).then(res => res.json()).then((data) => {
            

           

          console.log(data);
            console.log("saved register data");
            
        });
    }

  return (

    <div>
        <br />
        <br />

       <Cards class="hai"

          cvc={cvc}

          expiry={expiry}

          focused={focus}

          name={name}

          number={number}

        />

      <form>

      <br>
        </br>
          <center>

        <input className="inputcc"

          type="tel"

          name="number"

          val={number}

          placeholder={"Enter Number"}

          onChange={e => setNumber(e.target.value)}

          onFocus={e=>setFocus(e.target.name)}

        />

        <br>
        </br>

        <br>
        </br>

        <input className="inputcc"

          type="tel"

          name="name"

          val={name}

          placeholder={"Enter Name"}

          onChange={e => setName(e.target.value)}

          onFocus={e=>setFocus(e.target.name)}

        />

        <br>
        </br>

        <br>
        </br>


        <input className="inputcc"

          type="tel"

          name="expiry"

          val={expiry}

          placeholder={"Enter Expiry date"}

          onChange={e => setExpiry(e.target.value)}

          onFocus={e=>setFocus(e.target.name)}

        />

        <br>
        </br>

        <br>
        </br>

        <input className="inputcc"

          type="tel"

          name="cvc"

          val={cvc}

          placeholder={"Enter Cvc"}

          onChange={e => setCvc(e.target.value)}

          onFocus={e=>setFocus(e.target.name)}

        />
        <br />
        
        <button  className="buttcc" type="button" onClick={handleClick}>Send </button>

        </center>

      </form>

    </div>

  );

}