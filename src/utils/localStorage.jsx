 
 localStorage.clear()
 const employees = [
  {
    id: 1,
    firstName: "Arjun",
    email: "employee1@example.com",
    password: "123",
    taskNumber: {
      newTasks: 1,
      acceptedTasks: 1,
      completedTasks: 1,
      failedTasks: 0
    },
    tasks: [
      {
        title: "Submit report",
        description: "Submit the weekly progress report",
        date: "2025-06-01",
        category: "Reporting",
        active: true,
        newTask: true,
        complete: false,
        failed: false
      },
      {
        title: "Client call",
        description: "Attend a call with client ABC Corp",
        date: "2025-06-02",
        category: "Meeting",
        active: true,
        newTask: false,
        complete: false,
        failed: false
      },
      {
        title: "Code review",
        description: "Review code submitted by team",
        date: "2025-05-30",
        category: "Development",
        active: false,
        newTask: false,
        complete: true,
        failed: false
      }
    ]
  },
  {
    id: 2,
    firstName: "Sneha",
    email: "employee2@example.com",
    password: "123",
    taskNumber: {
      newTasks: 1,
      acceptedTasks: 1,
      completedTasks: 1,
      failedTasks: 1
    },
    tasks: [
      {
        title: "Design UI",
        description: "Create homepage UI design",
        date: "2025-05-28",
        category: "Design",
        active: false,
        newTask: false,
        complete: true,
        failed: false
      },
      {
        title: "Fix bugs",
        description: "Resolve issues from QA testing",
        date: "2025-05-29",
        category: "Development",
        active: true,
        newTask: false,
        complete: false,
        failed: false
      },
      {
        title: "Create test cases",
        description: "Write test cases for new features",
        date: "2025-06-03",
        category: "Testing",
        active: true,
        newTask: true,
        complete: false,
        failed: false
      },
      {
        title: "Weekly sync",
        description: "Join weekly sync-up meeting",
        date: "2025-06-01",
        category: "Meeting",
        active: false,
        newTask: false,
        complete: false,
        failed: true
      }
    ]
  },
  {
    id: 3,
    firstName: "Rohan",
    email: "employee3@example.com",
    password: "123",
    taskNumber: {
      newTasks: 1,
      acceptedTasks: 1,
      completedTasks: 1,
      failedTasks: 0
    },
    tasks: [
      {
        title: "Data backup",
        description: "Ensure database backup is done",
        date: "2025-05-27",
        category: "Maintenance",
        active: false,
        newTask: false,
        complete: true,
        failed: false
      },
      {
        title: "Optimize queries",
        description: "Improve database query performance",
        date: "2025-05-30",
        category: "Database",
        active: true,
        newTask: false,
        complete: false,
        failed: false
      },
      {
        title: "Documentation",
        description: "Update project documentation",
        date: "2025-06-02",
        category: "Documentation",
        active: true,
        newTask: true,
        complete: false,
        failed: false
      }
    ]
  },
  {
    id: 4,
    firstName: "Priya",
    email: "employee4@example.com",
    password: "123",
    taskNumber: {
      newTasks: 2,
      acceptedTasks: 1,
      completedTasks: 1,
      failedTasks: 1
    },
    tasks: [
      {
        title: "Deploy app",
        description: "Deploy the app to production",
        date: "2025-06-01",
        category: "Deployment",
        active: true,
        newTask: false,
        complete: false,
        failed: false
      },
      {
        title: "Security audit",
        description: "Run a security audit of all APIs",
        date: "2025-06-03",
        category: "Security",
        active: true,
        newTask: true,
        complete: false,
        failed: false
      },
      {
        title: "Update SSL",
        description: "Renew and apply SSL certificate",
        date: "2025-05-29",
        category: "Security",
        active: false,
        newTask: false,
        complete: true,
        failed: false
      },
      {
        title: "Incident report",
        description: "Document recent server downtime",
        date: "2025-05-30",
        category: "Reporting",
        active: false,
        newTask: false,
        complete: false,
        failed: true
      },
      {
        title: "Team mentoring",
        description: "Mentor juniors on deployment practices",
        date: "2025-06-04",
        category: "Training",
        active: true,
        newTask: true,
        complete: false,
        failed: false
      }
    ]
  },
  {
    id: 5,
    firstName: "Karan",
    email: "employee5@example.com",
    password: "123",
    taskNumber: {
      newTasks: 2,
      acceptedTasks: 1,
      completedTasks: 1,
      failedTasks: 1
    },
    tasks: [
      {
        title: "Onboard intern",
        description: "Help onboard new intern in the team",
        date: "2025-06-01",
        category: "HR",
        active: true,
        newTask: true,
        complete: false,
        failed: false
      },
      {
        title: "Create survey",
        description: "Design feedback survey for users",
        date: "2025-05-30",
        category: "Research",
        active: false,
        newTask: false,
        complete: true,
        failed: false
      },
      {
        title: "Marketing brief",
        description: "Prepare brief for marketing team",
        date: "2025-05-31",
        category: "Marketing",
        active: true,
        newTask: false,
        complete: false,
        failed: false
      },
      {
        title: "Feedback analysis",
        description: "Analyze user feedback from app store",
        date: "2025-06-02",
        category: "Research",
        active: true,
        newTask: true,
        complete: false,
        failed: false
      },
      {
        title: "Missed deadline report",
        description: "Prepare report on missed deadlines",
        date: "2025-05-28",
        category: "Reporting",
        active: false,
        newTask: false,
        complete: false,
        failed: true
      }
    ]
  }
];


const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123"
  }
];



export  const setLocalStorage = ()=>{
    localStorage.setItem('employees',JSON.stringify(employees) )
    localStorage.setItem('admin', JSON.stringify(admin))

}
export const getLocalStorage = ()=>{
 const employees  =  JSON.parse(localStorage.getItem('employees'))
 const admin  =  JSON.parse(localStorage.getItem('admin'))
  return {employees,admin}
}