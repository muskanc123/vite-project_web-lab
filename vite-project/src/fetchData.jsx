import React, { useState } from "react";
import "./fetchData.css"
import { User } from "./User";

function FetchData() {
    const [users, setUsers] = useState([]);
    const [posts, setposts] = useState([]);

    // const [loading, setLoading] = useState(true);

    const fetchUsers = () => {
        alert("Hello fetch Users")
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then((data) => {
                const newData = data.slice(0, 3)
                console.log(newData)
                setUsers((prev) => [...prev, ...newData])
            })
    };

    const fetchPosts = () => {
        alert("Hello posts ")
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then((data) => {
                const newPosts = data.slice(0, 3)
                console.log(newPosts)
                setposts((prev) => [...prev, ...newPosts])
            })
    };


    return (
        <>
            <div className="divider">
                <div className="column">
                    <h2>Column 1</h2>

                    <button onClick={fetchUsers}>Load more users</button>
                    {" "}
                    <hr />
                    <span>No of user= {users.length}</span>
                    <div className="users">
                        {users.map((item, index) => (
                            <User
                                name={item.name}
                                email={item.email}
                                username={item.username}
                                address={item.address}
                                index={index}
                            />

                        ))}
                    </div>


                </div>
                <div className="column">
                    <h2>Column 2</h2>

                    <button onClick={fetchPosts}>Load more posts</button>
                    {" "}
                    <hr />
                    <span>No of posts= {posts.length}</span>
                    <div className="posts">
                        {posts.map((item, index) => (
                            <div key={index} className="post-box">
                                <div >ID: {item.id}</div>
                                <div >Title: {item.title}</div>
                                <img
                                    src={`https://api.dicebear.com/8.x/adventurer/svg?seed=Angel`}
                                    alt={`avatar`}
                                />
                            </div>
                        ))}

                    </div>

                </div>
            </div>
        </>


    );




}
export default FetchData