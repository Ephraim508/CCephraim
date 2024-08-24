import './App.css'
import Navbar from './Navbar';
const mentors = [
    {
      name: "Raju",
      availability: "6:00PM - 6:30PM",
      expert: "JavaScript",
      premium: "No",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrMpBAziIwi-ow2pNbPCxoWE9jWZdAkf4-ag&s",
    },
    {
      name: "Aditi",
      availability: "7:00PM - 7:30PM",
      expert: "HTML",
      premium: "Yes",
      img: "https://t4.ftcdn.net/jpg/07/06/11/27/360_F_706112771_kXxl6umxCpyNVB0AHNqyVuh5BhYj0XIx.jpg",
    },
    {
      name: "Vijay",
      availability: "8:00AM - 9:30AM",
      expert: "CSS",
      premium: "No",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrMpBAziIwi-ow2pNbPCxoWE9jWZdAkf4-ag&s",
    },
    {
      name: "Ravi",
      availability: "9:00AM - 10:30AM",
      expert: "Node.js",
      premium: "Yes",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrMpBAziIwi-ow2pNbPCxoWE9jWZdAkf4-ag&s",
    },
    {
      name: "Priya",
      availability: "11:00AM - 11:30AM",
      expert: "React.js",
      premium: "No",
      img: "https://t4.ftcdn.net/jpg/07/06/11/27/360_F_706112771_kXxl6umxCpyNVB0AHNqyVuh5BhYj0XIx.jpg",
    },
    {
      name: "Karan",
      availability: "12:00PM - 12:30PM",
      expert: "JavaScript",
      premium: "Yes",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrMpBAziIwi-ow2pNbPCxoWE9jWZdAkf4-ag&s",
    },
    {
      name: "Sita",
      availability: "1:00PM - 1:30PM",
      expert: "HTML",
      premium: "No",
      img: "https://t4.ftcdn.net/jpg/07/06/11/27/360_F_706112771_kXxl6umxCpyNVB0AHNqyVuh5BhYj0XIx.jpg",
    },
    {
      name: "Anil",
      availability: "2:00PM - 2:30PM",
      expert: "CSS",
      premium: "Yes",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrMpBAziIwi-ow2pNbPCxoWE9jWZdAkf4-ag&s",
    },
    {
      name: "Rita",
      availability: "1:00PM - 3:30PM",
      expert: "Node.js",
      premium: "No",
      img: "https://t4.ftcdn.net/jpg/07/06/11/27/360_F_706112771_kXxl6umxCpyNVB0AHNqyVuh5BhYj0XIx.jpg",
    },
    {
      name: "Manoj",
      availability: "4:00PM - 4:30PM",
      expert: "React.js",
      premium: "Yes",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrMpBAziIwi-ow2pNbPCxoWE9jWZdAkf4-ag&s",
    },
    {
      name: "Lata",
      availability: "5:00PM - 5:30PM",
      expert: "JavaScript",
      premium: "No",
      img: "https://t4.ftcdn.net/jpg/07/06/11/27/360_F_706112771_kXxl6umxCpyNVB0AHNqyVuh5BhYj0XIx.jpg",
    },
    {
      name: "Rajesh",
      availability: "6:00PM - 6:30PM",
      expert: "HTML",
      premium: "Yes",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrMpBAziIwi-ow2pNbPCxoWE9jWZdAkf4-ag&s",
    },
    {
      name: "Nidhi",
      availability: "6:00PM - 7:30PM",
      expert: "CSS",
      premium: "No",
      img: "https://t4.ftcdn.net/jpg/07/06/11/27/360_F_706112771_kXxl6umxCpyNVB0AHNqyVuh5BhYj0XIx.jpg",
    },
    {
      name: "Mohan",
      availability: "8:00PM - 8:30PM",
      expert: "Node.js",
      premium: "Yes",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrMpBAziIwi-ow2pNbPCxoWE9jWZdAkf4-ag&s",
    },
    {
      name: "Shreya",
      availability: "9:00PM - 9:30PM",
      expert: "React.js",
      premium: "No",
      img: "https://t4.ftcdn.net/jpg/07/06/11/27/360_F_706112771_kXxl6umxCpyNVB0AHNqyVuh5BhYj0XIx.jpg",
    },
    {
      name: "Arun",
      availability: "9:00AM - 10:30AM",
      expert: "JavaScript",
      premium: "Yes",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrMpBAziIwi-ow2pNbPCxoWE9jWZdAkf4-ag&s",
    },
    {
      name: "Neha",
      availability: "10:00AM - 10:30AM",
      expert: "HTML",
      premium: "No",
      img: "https://t4.ftcdn.net/jpg/07/06/11/27/360_F_706112771_kXxl6umxCpyNVB0AHNqyVuh5BhYj0XIx.jpg",
    },
    {
      name: "Ramesh",
      availability: "11:00AM - 11:30AM",
      expert: "CSS",
      premium: "Yes",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrMpBAziIwi-ow2pNbPCxoWE9jWZdAkf4-ag&s",
    },
    {
      name: "Meena",
      availability: "12:00PM - 12:30PM",
      expert: "Node.js",
      premium: "No",
      img: "https://t4.ftcdn.net/jpg/07/06/11/27/360_F_706112771_kXxl6umxCpyNVB0AHNqyVuh5BhYj0XIx.jpg",
    },
    {
      name: "Suresh",
      availability: "1:00PM - 1:30PM",
      expert: "React.js",
      premium: "Yes",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrMpBAziIwi-ow2pNbPCxoWE9jWZdAkf4-ag&s",
    },
    {
      name: "Anita",
      availability: "2:00PM - 2:30PM",
      expert: "JavaScript",
      premium: "No",
      img: "https://t4.ftcdn.net/jpg/07/06/11/27/360_F_706112771_kXxl6umxCpyNVB0AHNqyVuh5BhYj0XIx.jpg",
    },
    {
      name: "Vikas",
      availability: "3:00PM - 3:30PM",
      expert: "HTML",
      premium: "Yes",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrMpBAziIwi-ow2pNbPCxoWE9jWZdAkf4-ag&s",
    },
    {
      name: "Kavita",
      availability: "4:00PM - 4:30PM",
      expert: "CSS",
      premium: "No",
      img: "https://t4.ftcdn.net/jpg/07/06/11/27/360_F_706112771_kXxl6umxCpyNVB0AHNqyVuh5BhYj0XIx.jpg",
    },
    {
      name: "Rohan",
      availability: "5:00PM - 6:30PM",
      expert: "Node.js",
      premium: "Yes",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrMpBAziIwi-ow2pNbPCxoWE9jWZdAkf4-ag&s",
    },
    {
      name: "Sunita",
      availability: "6:00PM - 6:30PM",
      expert: "React.js",
      premium: "No",
      img: "https://t4.ftcdn.net/jpg/07/06/11/27/360_F_706112771_kXxl6umxCpyNVB0AHNqyVuh5BhYj0XIx.jpg",
    },
  ];
const Mentor=()=>{
    return(
        <div>
         <h1  className="studentHeading">Student Data</h1>
           <div className='student-main-container'>
            <div><Navbar/></div>
           <div className='studentData'>
                 {
                    mentors.map((each)=>{
                        return(
                            <div className="mentor-right studentDescription">
                            <h2>Name: {each.name}</h2>
                            <p className="availability">Availability: {each.availability}</p>
                            <p>Expert: {each.expert}</p>
                            <p>Premium: {each.premium}</p>
                          </div>
                        )
                    })
                 }
           </div>
           </div>
           
        </div>
    )
}


export default Mentor