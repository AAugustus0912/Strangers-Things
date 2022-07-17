import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


const Navbar = () => {
    return (

        <div>
            <Link to="/home">Home</Link>
            <Link to="/posts">Posts</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/login">Login</Link>

        </div>
    )
}

export default Navbar;