import React, { useState,useContext } from "react";
import Modal from "react-modal";
import Navbar from "./Navbar";
import { IoLogoJavascript } from "react-icons/io";
import { RiReactjsLine } from "react-icons/ri";
import { FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { TbBrandNodejs } from "react-icons/tb";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BookingContext } from './BookingContext'; 
import "./App.css";


Modal.setAppElement("#root");

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

const Dashboard = () => {
  const [selectedDomain, setSelectedDomain] = useState("JavaScript");
  const [selectedMentor, setSelectedMentor] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [paymentModalIsOpen, setPaymentModalIsOpen] = useState(false);
  const [bookingFormData, setBookingFormData] = useState({});
  const { addBooking } = useContext(BookingContext); 
 
  const handleDomainClick = (domain) => {
    setSelectedDomain(domain);
    setSelectedMentor(null);
  };

  const handleMentorClick = (mentor) => {
    setSelectedMentor(mentor);
  };

  const handleBookClick = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setPaymentModalIsOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      availability: e.target.availability.value || selectedMentor.availability,
      mentorName: e.target.mentorName.value || selectedMentor.name,
    };
    setBookingFormData(formData); // Update bookingFormData state here
    if (selectedMentor.premium === "Yes") {
      setModalIsOpen(false);
      setPaymentModalIsOpen(true);
    } else {
      addBooking(formData);
      console.log("Booking Submitted:", formData);
      toast.success("Your booking is submitted!", {
        position: "top-left"
      });
    closeModal(); 
    }
  };

  
  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    const paymentData = {
      ...bookingFormData, // Include name and email from booking form
      amount: e.target.amount.value,
    };
    addBooking(paymentData); // Add payment details to the context
    console.log(paymentData);
    toast.success("Payment submitted successfully!", {
      position: "top-left"
    });
    closeModal();
  };

  const filteredMentors = selectedDomain
    ? mentors.filter((mentor) => mentor.expert === selectedDomain)
    : [];

  const getImageSrc = (mentorName) => {
    const femaleNames = [
      "Aditi", "Priya", "Sita", "Rita", "Neha", "Kavita", "Sunita", "Meena", "Shreya", "Lata", "Anita"
    ];
    return femaleNames.includes(mentorName)
      ? "https://t4.ftcdn.net/jpg/07/06/11/27/360_F_706112771_kXxl6umxCpyNVB0AHNqyVuh5BhYj0XIx.jpg"
      : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrMpBAziIwi-ow2pNbPCxoWE9jWZdAkf4-ag&s";
  };

  return (
    <div>
      
      <ToastContainer />
      
      <h1 className="main-heading">CareerCrave</h1>
      <div className="main-container-app">
        <div className="app-left">
          <Navbar />
        </div>
        <div className="app-right">
          <h1 className="heading">Dashboard</h1>

          <div className="dashboard-section2">
            <div className="domain" onClick={() => handleDomainClick("JavaScript")}>
              <div className="icon-container">
                <IoLogoJavascript className="icon" />
              </div>
              <div className="domain-heading">
                <p>JavaScript</p>
              </div>
            </div>

            <div className="domain" onClick={() => handleDomainClick("React.js")}>
              <div className="icon-container">
                <RiReactjsLine className="icon" />
              </div>
              <div className="domain-heading">
                <p>React Js</p>
              </div>
            </div>

            <div className="domain" onClick={() => handleDomainClick("CSS")}>
              <div className="icon-container">
                <FaCss3Alt className="icon" />
              </div>
              <div className="domain-heading">
                <p>CSS</p>
              </div>
            </div>

            <div className="domain" onClick={() => handleDomainClick("Node.js")}>
              <div className="icon-container">
                <TbBrandNodejs className="icon" />
              </div>
              <div className="domain-heading">
                <p>Node Js</p>
              </div>
            </div>

            <div className="domain" onClick={() => handleDomainClick("HTML")}>
              <div className="icon-container">
                <FaHtml5 className="icon" />
              </div>
              <div className="domain-heading">
                <p>HTML</p>
              </div>
            </div>
          </div>

          <div className="app-right-sec2-main">
            <div className="app-right-sec2">
              <h1 className="heading">Mentors</h1>

              {filteredMentors.map((mentor, index) => (
                <div className="mentor" key={index} onClick={() => handleMentorClick(mentor)}>
                  <div className="mentor-left">
                    <img
                      src={getImageSrc(mentor.name)}
                      className="mentor-img"
                      alt="mentor"
                    />
                  </div>
                  <div className="mentor-right">
                    <h2>Name: {mentor.name}</h2>
                    <p className="availability">Availability: {mentor.availability}</p>
                    <p>Expert: {mentor.expert}</p>
                    <p>Premium: {mentor.premium}</p>
                  </div>
                </div>
              ))}

              {filteredMentors.length === 0 && (
                <p>No mentors available for this domain.</p>
              )}
            </div>

            <div className="app-right-sec2-right">
              {selectedMentor ? (
                <div className="mentor-profile">
                  <img
                    src={getImageSrc(selectedMentor.name)}
                    className="mentor-img-status"
                    alt="mentor"
                  />
                  <p className="mentor-name">{selectedMentor.name}</p>
                  <p className="mentor-heading">Mentor</p>
                  <div className="mentor-description">
                    <p>Expert in {selectedMentor.expert}</p>
                    <p>Available: {selectedMentor.availability}</p>
                    <button onClick={handleBookClick}>Book</button>
                  </div>
                </div>
              ) : (
                <p className="select-mentor">Please select a mentor to view details</p>
              )}
            </div>
          </div>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modal"
        overlayClassName="modal-overlay"
      >
        <button onClick={closeModal} className="close-button">×</button>
        <h2>Booking Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" name="email" />
          </div>
          <div className="form-group">
            <label htmlFor="availability">Availability Time</label>
            <input type="text" id="availability" name="availability" value={selectedMentor ? selectedMentor.availability : ''} readOnly />
          </div>
          <div className="form-group">
            <label htmlFor="mentorName">Mentor Name</label>
            <input type="text" id="mentorName" name="mentorName" value={selectedMentor ? selectedMentor.name : ''} readOnly />
          </div>

          <button type="submit" className="submit-button">Submit</button>
        </form>
      </Modal>

      <Modal
        isOpen={paymentModalIsOpen}
        onRequestClose={closeModal}
        className="modal"
        overlayClassName="modal-overlay"
      >
        <button onClick={closeModal} className="close-button">×</button>
        <h2>Complete Your Payment</h2>
        <form onSubmit={handlePaymentSubmit}>
          <div className="form-group">
            <label htmlFor="mentorName">Mentor Name</label>
            <input type="text" id="mentorName" name="mentorName" value={selectedMentor ? selectedMentor.name : ''} readOnly />
          </div>
          <div className="form-group">
            <label htmlFor="domain">Domain</label>
            <input type="text" id="domain" name="domain" value={selectedDomain} readOnly />
          </div>
          <div className="form-group">
            <label htmlFor="availability">Availability Time</label>
            <input type="text" id="availability" name="availability" value={selectedMentor ? selectedMentor.availability : ''} readOnly />
          </div>
          <div className="form-group">
            <label htmlFor="amount">Amount</label>
            <input type="text" id="amount" name="amount" placeholder="Enter amount" />
          </div>

          <button type="submit" className="submit-button">Submit Payment</button>
        </form>
      </Modal>
    </div>
  );
};

export default Dashboard