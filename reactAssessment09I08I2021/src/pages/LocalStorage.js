import React ,{useEffect,useState} from 'react'

export default function LocalStorage() {

    const [count,setCounter] = useState(()=>
    {
        let val;
        val=JSON.parse(window.localStorage.getItem("my-app-new-counter"));
        console.log(val);
        return val;

    });
    const [name,setName] = useState(()=>
    {
        // let name;
        // name=JSON.parse(window.localStorage.getItem("nameValue"));
        // console.log(name);
        // return name;

    });
    const handleOnChange = (event) => {
    

        const { name, value } = event.target;
        console.log(name);
        console.log(value);
        setName((prev) => {
          return {
            ...prev,
            [name]: value,
          };
        });}

    const counterInc =() =>
    {
        setCounter(prev =>prev+1);
    }

    useEffect(() => {
        window.localStorage.setItem("my-app-new-counter",count);
        // window.localStorage.setItem("nameValue",);
        document.title='LocalStorage $ {count}';
    }, [count])
    
    return (
        <div>
            <h2>TOTAL NUMBER OF ACCOUNTS CREATED ::CLICK HERE TO UPDATE</h2>
            <br>
            </br>
            <label>enter new student name</label>
            <br>
            </br>
            <input name="name" type="name" id="name" size="30"onChange={handleOnChange} />
            <br>
            </br>
            <label>click to increment Account(store in local storage)</label>
            <button onClick={counterInc}>{count} </button>
        </div>
    )
}
