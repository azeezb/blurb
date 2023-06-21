import { useEffect, useState } from "react"

const App = () => {

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

    // 3. Create the div and table

    return (
        <div className="container">
            <h1>Users</h1>
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
        </div>
    );
};

export default App;