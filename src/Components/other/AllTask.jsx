import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

function AllTask() {
     const [userData,setUserData] =  useContext(AuthContext)

  return (
    <div className=' bg-[#1c1c1c] p-5  rounded mt-5 '>
       <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded '>
          <h2 className=' text-lg font-medium  w-1/5 '>Employee Name</h2>
            <h3 className=' text-lg font-medium  w-1/5 '> New Task</h3>
            <h5 className=' text-lg font-medium  w-1/5 '>Accepted Task</h5>
            <h5 className=' text-lg font-medium  w-1/5 '>Completed Task</h5>
            <h5 className=' text-lg font-medium w-1/5'>Failed</h5>
            </div>

       <div >
         {userData.map(function(elem,idx){
        return    <div key={idx} className=' border-2  border-emerald-500 mb-2 py-2 px-4 flex justify-between rounded '>
          <h2 className='text-lg font-medium w-1/5'>{elem.firstName}</h2>
            <h3 className=' text-lg font-medium w-1/5  text-blue-300'>{elem.taskNumber.newTasks}</h3>
            <h5 className=' text-lg font-medium w-1/5 text-red-500'>{elem.taskNumber.acceptedTasks}</h5>
            <h5 className=' text-lg font-medium w-1/5  text-white'>{elem.taskNumber.completedTasks}</h5>
            <h5 className=' text-lg font-medium w-1/5  text-red-500'>{elem.taskNumber.failedTasks}</h5>
         </div>
        })}
      </div>
      
    </div>
  )
}

export default AllTask
