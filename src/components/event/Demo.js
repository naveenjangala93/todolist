import React from 'react'
import {useState,useEffect} from 'react'

function Demo() {

 let [photos,setPhotos]=useState([])
 useEffect(

    ()=>{
     fetch("https://jsonplaceholder.typicode.com/photos")
     .then(resObj=>resObj.json())
     .then(data=>{setPhotos(data) ;console.table(data)})
     .catch(err=>console.log(err))
    },[]
 )
 console.log(photos )



  return (
    <div className='container'>
    <h1 className='text-center mb-3 '>  This is demo component</h1>
    {/* <table className='table border border-dark striped=columns hover variant="dark'>
        <thead>
            <tr>
             <th>UserID</th>
             <th>ID</th>
             <th>Title</th>
            
            </tr>

        </thead> 
        <tbody>
        {
         todos.map((todosObj)=> {
         
         return<tr> 
            <td>
                { todosObj.userId}
            </td>
            <td>
                {todosObj.id}
            </td>
            <td>
                {todosObj.title}
            </td>

         </tr>
         
         }


)


        }

        </tbody>
        



    </table> */}
{/* {Grid of cards displayimg} */}
    {/* <div className='row row-cols-1 row-cols-sm-2  row-cols-md-3 row-cols-lg-6'>

        {

            todos.map((todoObj)=>
            <div className='main mb-2'>
            <div className='card card-body h-100 w-100  border border-dark bg-warning  '>
               <p>  UserId={todoObj.userId}</p>
               <p>  Id={todoObj.id}</p>
               <span className='text-success'><p> Title is ={todoObj.title}</p></span>
            </div>
            </div>
            )
        }

    </div> */}


   <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 ">

    {

        photos.map((photoObj)=>
        <div className='main3 mb-3  '>
           <div className='card card-body border border-dark '>
            <p> Albumn id={photoObj.albumId}</p>
            <p>  ID={photoObj.id}</p>
            <img src={photoObj.url} height="100px" width="230px"/>
             <img src={photoObj.thumbnailUrl} className='mt-3' height="100px" width="230px"/>

            </div>

        </div>

        
        )
    }


   </div>



    </div>
  )
}

export default Demo 