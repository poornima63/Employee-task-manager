import React from 'react'

function TaskListNumbers({data}) {
  return (
    <div className=' flex mt-10 mr-2 justify-between gap-5 screen'>
      <div className=' rounded-xl py-5 px-6 w-[45%] bg-red-400'>
        <h1 className=' text-3xl font-semibold '>{data.taskNumber.newTasks}</h1>
        <h3 className=' text-xl font-medium'>New Task</h3>
      </div>
      <div className=' rounded-xl py-5 px-6 w-[45%] bg-blue-400'>
        <h1 className=' text-3xl font-semibold '>{data.taskNumber.completedTasks}</h1>
        <h3 className=' text-xl font-medium'>Completed Task</h3>
      </div>
      <div className=' rounded-xl py-5 px-6 w-[45%] bg-green-400'>
        <h1 className=' text-3xl font-semibold '>{data.taskNumber.acceptedTasks} </h1>
        <h3 className=' text-xl font-medium'>Accepted Task</h3>
      </div>
      <div className=' rounded-xl py-5 px-6 w-[45%] bg-yellow-400'>
        <h1 className=' text-3xl font-semibold '>{data.taskNumber.failedTasks}</h1>
        <h3 className=' text-xl font-medium'>failed Task</h3>
      </div>
    </div>
  )
}

export default TaskListNumbers
