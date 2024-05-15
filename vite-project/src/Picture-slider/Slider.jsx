// import React from 'react';
// import { useState } from 'react';
// import "./slider.css"


// function Slider() {
//   const images = [

//     "https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-mountain-scenery-with-flowers-free-photo.jpg?w=600&quality=80",
//     "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSgCc1s48AZnlIv-kRzmjvTApiXRC8xPvWZ44nznD3JA&s",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfITP26_gUssSYjmfD_-FgWacgjzuMSgCqsQsY0E05gQ&s",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBvp8kzWqbw3wM7dTSpV_bJCvG1h9T9p5eZ9MY72tW4KjSDfgcU3tJnsIL34hZUadNlZg&usqp=CAU"
//   ]
//   const [current, setCurrent] = useState(0);

//   const previousImage = () => {
//     setCurrent(current === 0 ? images.length - 1 : current - 1);

//   }
//   const nextImage = () => {
//     console.log("Helo next")
//     setCurrent(current === images.length - 1 ? 0 : current + 1);


//   }

//   return (
//     <>
//     <style>
//       {`
//         body {
//           background-color: aqua; 
//         }
//       `}
//     </style>
//     <h1> Picture Slider</h1>
//     <br />
//     <br />
//     <div className='picture-container'>
//       {images.map(
//         (image, index) =>
//           current === index && (
//             // <img src={image} alt="images" />

//             <div key={image} >
//               <img src={image} alt="images" />
//             </div>
//           )
//       )}
//       <button className='previous' onClick={previousImage}> ⬅ </button>
//       <button className='next' onClick={nextImage}>⮕</button>
//     </div>
//     </>
    
    
//   );
// }

// export default Slider;

import React, { useState, useEffect } from 'react';
import "./slider.css";

function Slider() {
  const [users, setUsers] = useState([]);
  const [current, setCurrent] = useState(0);

  const fetchUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((data) => {
        // const newData = data.slice(0, 3); // Limiting to the first 3 users for this example
        setUsers(data);
      })
      .catch(error => console.error('Error fetching users:', error));
  };

  useEffect(() => {
    fetchUsers();
  }, []); // Fetch users on component mount

  const previousUser = () => {
    setCurrent(current === 0 ? users.length - 1 : current - 1);
  };

  const nextUser = () => {
    setCurrent(current === users.length - 1 ? 0 : current + 1);
  };

  return (
    <>
      <style>
        {`
          body {
            background-color: aqua; 
          }
        `}
      </style>
      <h1>User Slider</h1>
      <br />
      <br />
      <div className='user-container'>
        {users.length > 0 && (
          <div key={users[current].id}>
            <h2>{users[current].name}</h2>
            <p>Username: {users[current].username}</p>
            <p>Email: {users[current].email}</p>
            {/* Add other user details you want to display */}
          </div>
        )}
        <button className='previous' onClick={previousUser}> ⬅ </button>
        <button className='next' onClick={nextUser}>⮕</button>
      </div>
    </>
  );
}

export default Slider;

