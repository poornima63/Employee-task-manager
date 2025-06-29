import React, { useContext, useEffect, useState } from 'react'
import Login from './Components/Auth/Login'
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard'
import AdminDashboard from './Components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'
import { toast } from 'react-toastify';

const App = () => {

  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData,SetUserData] = useContext(AuthContext)

  useEffect(()=>{
    const loggedInUser = localStorage.getItem('loggedInUser')
    
    if(loggedInUser){
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }

  },[])


  const handleLogin = (email, password) => {
  if (email === 'admin@me.com' && password === '123') {
    setUser('admin');
    localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }));
    toast.success("Successfully Logged in as Admin");
  } else if (userData) {
    const employee = userData.find(
      (e) => email === e.email && e.password === password
    );
    if (employee) {
      setUser('employee');
      setLoggedInUserData(employee);
      localStorage.setItem(
        'loggedInUser',
        JSON.stringify({ role: 'employee', data: employee })
      );
      toast.success(`Welcome ${employee.firstName}!`);
    } else {
      toast.error("❌ User not found. Invalid credentials!", {
        position: "top-center"
      });
    }
  } else {
    toast.error("❌ User not found. Invalid credentials!", {
      position: "top-center"
    });
  }
};




  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user == 'admin' ? <AdminDashboard changeUser={setUser} /> : (user == 'employee' ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData} /> : null) }
   
   
   
    </>
  )
}

export default App