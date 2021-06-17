
import { useEffect, useState } from 'react';
import './App.css';
import Viewpage from './coponents/Viewpage';



function App() {

  const [username,setusername] = useState('')
  const [password,setpassword] = useState('')
  const [users,setUsers] = useState([])
  const [data,setData]= useState({})


  useEffect(()=>{
    setUsers([...users,data])
  },[data])

   const changeHandlerUser =((e)=>{
      setusername(e.target.value)
   })
   const changeHandlerPass =((e)=>{
    setpassword(e.target.value)
  })
   const submitHandler =((e) =>{
     e.preventDefault()
     setData({x1:username,x2:password})
    setpassword('')
    setusername('')
  
   })
//  console.log(users,"users")

  return ( 
    <>
    <h1 className="siva">Helle siva</h1>
    <div className="card">

      <div className="card-body">
       
       <form onSubmit={submitHandler}>
        <input type ="text" name="username" value={username} onChange={changeHandlerUser} />
        <input type ="password" name="password" value={password} onChange={changeHandlerPass}/>
        <input type ="submit" />
      </form>
  
       </div>
      <Viewpage file={data} list={users} />
    
    </div>
    </>
    );
}

export default App;
