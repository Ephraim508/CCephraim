import './App.css'

import Navbar from './Navbar'
const StudentData=[
    { "StudentName": "John", "Area_of_interest": "JavaScript", "Availability_Time": "3:00PM to 3:30PM" },
    { "StudentName": "Sophia", "Area_of_interest": "CSS", "Availability_Time": "1:00PM to 1:30PM" },
    { "StudentName": "David", "Area_of_interest": "Node.js", "Availability_Time": "4:30PM to 5:00PM" },
    { "StudentName": "Emma", "Area_of_interest": "HTML", "Availability_Time": "10:00AM to 10:30AM" },
    { "StudentName": "Michael", "Area_of_interest": "CSS", "Availability_Time": "12:00PM to 12:30PM" },
    { "StudentName": "Olivia", "Area_of_interest": "JavaScript", "Availability_Time": "11:30AM to 12:00PM" },
    { "StudentName": "Daniel", "Area_of_interest": "Node.js", "Availability_Time": "2:00PM to 2:30PM" },
    { "StudentName": "Mia", "Area_of_interest": "HTML", "Availability_Time": "9:00AM to 9:30AM" },
    { "StudentName": "James", "Area_of_interest": "JavaScript", "Availability_Time": "6:00PM to 6:30PM" },
    { "StudentName": "Isabella", "Area_of_interest": "CSS", "Availability_Time": "5:30PM to 6:00PM" },
    { "StudentName": "Joshua", "Area_of_interest": "Node.js", "Availability_Time": "3:30PM to 4:00PM" },
    { "StudentName": "Ava", "Area_of_interest": "HTML", "Availability_Time": "7:00PM to 7:30PM" },
    { "StudentName": "Ethan", "Area_of_interest": "JavaScript", "Availability_Time": "8:00AM to 8:30AM" },
    { "StudentName": "Abigail", "Area_of_interest": "CSS", "Availability_Time": "4:00PM to 4:30PM" },
    { "StudentName": "Liam", "Area_of_interest": "Node.js", "Availability_Time": "12:30PM to 1:00PM" },
    { "StudentName": "Charlotte", "Area_of_interest": "HTML", "Availability_Time": "7:30PM to 8:00PM" },
    { "StudentName": "Mason", "Area_of_interest": "JavaScript", "Availability_Time": "9:30AM to 10:00AM" },
    { "StudentName": "Harper", "Area_of_interest": "CSS", "Availability_Time": "2:30PM to 3:00PM" },
    { "StudentName": "Noah", "Area_of_interest": "Node.js", "Availability_Time": "5:00PM to 5:30PM" },
    { "StudentName": "Emily", "Area_of_interest": "HTML", "Availability_Time": "6:30PM to 7:00PM" },
    { "StudentName": "Chris", "Area_of_interest": "JavaScript", "Availability_Time": "11:00AM to 11:30AM" },
    { "StudentName": "David", "Area_of_interest": "CSS", "Availability_Time": "10:30AM to 11:00AM" },
    { "StudentName": "Alice", "Area_of_interest": "Node.js", "Availability_Time": "8:30AM to 9:00AM" },
    { "StudentName": "Bob", "Area_of_interest": "HTML", "Availability_Time": "7:30AM to 8:00AM" },
    { "StudentName": "Jane", "Area_of_interest": "JavaScript", "Availability_Time": "1:30PM to 2:00PM" }
  ]
  
const Student =()=>{

    return(
        <div>
         <h1  className="studentHeading">Student Data</h1>
           <div className='student-main-container'>
            <div><Navbar/></div>
           <div className='studentData'>
                 {
                    StudentData.map((each)=>{
                        return(
                            <div className='studentDescription'>
                                <h1 className='student'>StudentName: {each.StudentName}</h1>
                                <p>IntrestDomain: {each.Area_of_interest}</p>
                                <p>AvTime: {each.Availability_Time}</p>
                            </div>
                        )
                    })
                 }
           </div>
           </div>
           
        </div>
    )
}

export default Student