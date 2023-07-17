import React from 'react'
import { useState } from 'react'
import './Event.css'

function Event() {

  // let users={hell0:"naveen",age:20}
  let [users,setUsers]=useState({name:"naveen",age:20,city:"Hyderabad"});
  let [counter,setCount]=useState(0);
  function changeA(){
    console.log(users)
    let obj = users;
    obj.name="suresh"
    console.log(users)
    setUsers(obj);
  // 
  

    
  }

  
  // let changeI=(value)=>{

  //   setCount(a+value);
  // }
  // let changeD=(value)=>{

  //   setCount(a-value);
  // }
  return (
    <div className='container border m-10 border-dark border-opacity-100  '>
      <div className='mt-3 mx-auto text-dark'>

      
     <h2> Name of the user is-{users.name}</h2>
     <h2> Age  is-{users.age}</h2>
     <h2> City is-{users.city}</h2>
     <h1> {counter}</h1>
     </div>

     <button onClick={changeA} className='btn btn-success border border-rounded' > click here</button>
    </div>
  );
}


export default Event