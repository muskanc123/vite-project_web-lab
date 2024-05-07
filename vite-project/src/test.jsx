import React, { useState } from "react";

function TxtContent(obj) {
    const [Friend, setFriend] = useState([
        // "Muskan", 
        // "koyal", 
        // "Ali"
    ])
    const users = ["Muskan", "koyal", "Ali"]
    const [Friends,setFriends] = useState([])
    const [friendType,SetfriendType] = useState('Acha')

    const notifyMe = () => {
        alert("This is button")
        
    };
    const Add = () => {
        // alert("This is button")
        setFriends((prev) => [...prev,Friend])
        
        
    };
   
    return (

        <>
            <h1> {obj.name}</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque mollitia veniam tenetur cumque sint vel error officiis, exercitationem sit repudiandae commodi impedit suscipit quo deleniti enim molestias odio ad harum.</p>
            <button onClick={notifyMe}>This is me button</button>
            <input type="text" value={Friend} onChange={(e)=>{
                setFriend(e.target.value);
            }}
            placeholder="Enter name"/>
           <select value={friendType}>
            <option value="Acha">Acha</option>
            <option value="Bura">Bura</option>

           </select>
            {JSON.stringify({Friend})}
            <button onClick={Add}>Add</button>
            <ol>
                {/* Map over the users array to create list items */}
                {Friends.map((user, index) => (
                    <li key={index}>{user}</li>
                ))}
            </ol>
           
        </>
    )
}

export default TxtContent