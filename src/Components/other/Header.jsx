import React from 'react'
import { setLocalStorage } from '../../utils/localStorage'
 

function Header(props) {
  const logoOutUser = ()=>{
localStorage.setItem("loggedInUser", "")
 props.changeUser(null)
// window.location.reload()
  }
    const username = props.data?.firstName || "User"
  return (
    <div className=' flex items-end justify-between text-white'>
      <h1 className='text-2xl font-semibold'>Hello <br /> <span className=' text-3xl'>{username}</span> 👋</h1>
      <button onClick={ logoOutUser}    className='bg-red-600 text-lg font-medium text-white px-3 py-2 rounded-sm'> Log Out</button>
     
    </div>
  )
}

export default Header
