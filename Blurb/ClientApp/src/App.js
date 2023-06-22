import * as React from 'react';
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Home from './pages/Home';
import Login from './pages/Login';

const isAuthenticated = false;

function App() {
    const navigate = useNavigate()

    // 1. Create useState
    const [users, setUsers] = useState([])

    // 2. Call API
    useEffect(() => {
        fetch("/api/user/GetUsers")
            .then(response => response.text()) // Get the raw response text
            .then(responseText => {
                console.log(responseText); // Log the raw response text
                const responseJson = JSON.parse(responseText); // Parse the response text as JSON
                setUsers(responseJson);
            })
            .catch(error => {
                console.error("Error fetching users:", error);
            });
    }, []);


    useEffect((isAuthenticated) => {
        if (!isAuthenticated) {
            navigate('/login');
        }



    }, [isAuthenticated]);

        return (
            <div className="container">
                <h1>Blurb</h1>
                <div className="secondcontainer">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="login" element={<Login />} />
                    </Routes>
                </div>
            </div>
        );

};

export default App;