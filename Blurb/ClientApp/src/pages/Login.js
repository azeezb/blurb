import * as React from 'react';
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Login() {

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

    return (
        <>
            <h1>LoginPage</h1>
            <Link to="/home">Home</Link>






            <div className="row">
                <div className="col-sm-12">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((item) => (
                                    <tr>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.age}</td>
                                        <td>{item.email}</td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
