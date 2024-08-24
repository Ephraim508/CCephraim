import React from "react";
import './App.css';
import { Link } from "react-router-dom";
import { RiDashboardHorizontalFill } from "react-icons/ri";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { IoPeopleSharp } from "react-icons/io5";
import { TbBrandBooking } from "react-icons/tb";

const Navbar = () => {
  return (
    <div>
      <ul className="ulist">
      <Link to='/'>  <li>
         <span><RiDashboardHorizontalFill /></span> Dashboard
        </li></Link>
       <Link to='/student'> <li>
         <span><IoPeopleSharp /></span> Students
        </li></Link>
      <Link to='/mentor'>  <li>
         <span><LiaChalkboardTeacherSolid /></span> Mentors
        </li></Link>
       <Link to='/booking'> <li>
          <span><TbBrandBooking /></span> Bookings
          </li></Link>
      </ul>
    </div>
  );
};

export default Navbar;
