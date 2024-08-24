// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { BookingProvider } from "./BookingContext";
import Dashboard from "./Dashboard";
import Booking from "./Booking";
import Navbar from "./Navbar";
import Mentor from "./Mentor";
import Student from "./Student";
function App() {
  return (
    <BookingProvider>
      <Router>
      
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/student" element={<Student/>}/>
          <Route path="/mentor" element={<Mentor/>}/>
        </Routes>
      </Router>
    </BookingProvider>
  );
}

export default App;
