import React from 'react'
import Header from '../other/Header'
import TaskListNumbers from '../other/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

function EmployeeDashboard({changeUser,data}) {
  return (
<>
<div className='p-10 bg-[#1C1C1C] h-screen '>
 
<Header changeUser = {changeUser} data={data}/>
<TaskListNumbers  data={data}/>
<TaskList  data={data}/>



</div>


</>
  )
}

export default EmployeeDashboard
