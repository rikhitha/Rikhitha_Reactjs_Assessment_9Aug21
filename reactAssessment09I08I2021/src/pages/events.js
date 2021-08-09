import React ,{useState}from 'react';

import { useHistory } from "react-router-dom";

import ReactHTMLTableToExcel from 'react-html-table-to-excel'; 
  
const Events = () => {

  const [inData, setinData] = useState([])

  const history = useHistory();


  const fetchdata = () =>
    {
        console.log("data will be fetched");
        fetch("http://localhost:4000/students").then(res => res.json()).then(data => {
            console.log(data);
            setinData(data);
            // setSearch(data);

        }).catch(e => {
            console.log("Error cought");
            console.log(e);
        }).finally(() => {
            console.log("json working")
        })


    }

    const handleCibil = () =>
    {
      console.log("inside handleCibil");
      history.push("/about");
    }

    const handleDelete = () =>
    {
      console.log("inside handleDelete");
    }
  return (
    <div>
    <button type="submit" onClick={fetchdata}>View Registrations</button>
      <br>
      </br>
      <br>
      </br>
    <table border="3" id="student" class="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone number</th>
                    <th>Age</th>
                    

                    

                </tr>
            </thead>
            {inData.map((x)=>
            {
                return (
                    <tbody>
                        <tr>

                            <td>{x.name}</td>

                            <td>{x.email}</td>

                            <td>{x.phone}</td>

                            <td>{x.age}</td>

                            {/* <td>{x.gender}</td>

                            <td>{x.country}</td>

                            <td>{x.pannumber}</td>

                            <td>{x.income}</td>

                            <td>{x.ctype}</td>

                            <td><button onClick={handleCibil}>CibilReport</button></td>

                            <td><button onClick={handleDelete}>Delete</button></td> */}
                        </tr>
                    </tbody>
                
        );

                
            })}
    
    </table>

    <br/>
    <br/>
    <div>  

                                <ReactHTMLTableToExcel  

                                        className="btn btn-info"  
                                      table="student"  

                                        filename="Credit Card Applications"  

                                        sheet="Sheet"  

                                        buttonText="Download Applications" />  

                        </div>  
</div>
)
    
  
}
  
export default Events;