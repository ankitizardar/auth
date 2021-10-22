import React, { useState } from 'react'  
import { useHistory } from 'react-router';
function Dashboard() {  
    const [user, setuser] = useState({ Email: '', Password: '' });  
    
    const data = JSON.parse(localStorage.getItem("myData"));
    
    const history = useHistory();
     const handleLogout = () =>{
         localStorage.removeItem('mydata')
         history.push('/login')
     }   
    return (  
        <>  
            <div className="col-sm-12 btn btn-primary">  
                Dashboard  
        </div>  
            <h1>Welcome :{data.Email}</h1> 
            <input type="button" onClick={handleLogout} value="Logout" /> 
        </>  
    )  
}  
  
export default Dashboard 