
import ReactDOM from 'react-dom';
import React, { useState, useEffect } from 'react';
import {Header, AllPosts, Home, Profile, Navbar, Login } from './components/index';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const App = () => {
    const [home, setHome] = useState ();
    const [posts, setPosts] = useState([]);
    const [profile, setProfile] = useState([]);
    const [login, setLogin] = useState();

    useEffect(() => {
      const fetchPostsInfo = async () => {
        try {
          const response = await fetch('https://strangers-things.herokuapp.com/api/2206-ftb-et-web-ft-b/posts');
          console.log('The response:', response);
          const data = await response.json();
          setPosts(data.data.posts);
          console.log(posts)
        } catch (error) {
          console.error(error);
        }
      }
      fetchPostsInfo();
    }, []);

        return (
     <div>
        <Router>
        <Header />

        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/posts" element={<AllPosts posts={posts}/>} /> 
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />

        </Routes>
         
        </Router>
        {/* <Home /> */}
        {/* <Profile /> */}
     </div>
        );
}

const appElement = document.getElementById("testapp");
const root = ReactDOM.createRoot(appElement);
root.render(<App />)