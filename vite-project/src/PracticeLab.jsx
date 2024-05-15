// import React, { useState } from 'react'

// function PracticeLab() {
//     const [list, setList] = useState(""); 
//     const [lists , setLists] = useState([]); 
//     const [friendType,setFriendType]= useState("Acha");
//     return (
//         <div>
//             {list}
//             <input type="text" value={list} onChange={(e) => {
//                 setList(e.target.value);
//             }} />
//             <select value={friendType} onChange={(e) =>{setFriendType(e.target.value)}}>
//         <option> Acha</option>
//         <option > Bura</option>
//      </select>
//             <button
//         onClick={() => {
//             setLists((prev) => [...prev, { name: list , type: friendType}]);
//         }}
//       >
//         Add
//       </button>
//       {/* {lists.map((item)=>(
       
//             <li>
//                 {item.name}
//             </li>
        
//      ) )} */}
     
     
//         {friendType}  
//         {lists.filter((item) => item.type==='Acha')
//         .map((friendItem) => (
//             <li>
//               {friendItem.name} ({friendItem.type})
//             </li>
//           ))}
//           {lists.filter((item) => item.type==='Bura')
//         .map((friendItem) => (
//             <li>
//               {friendItem.name} ({friendItem.type})
//             </li>
//           ))}
        
//         </div>
//     );
// }

// export default PracticeLab;

import React, { useState } from 'react';

function PracticeLab() {
  const [list, setList] = useState(""); 
  const [lists, setLists] = useState([]); 
  const [friendType, setFriendType] = useState("Acha");

  const handleAdd = () => {
    if (list.trim() === "") return; // Prevent adding empty strings
    setLists(prev => [...prev, { name: list, type: friendType }]);
    setList(""); // Clear input field after adding
  };

  const handleRemove = (index) => {
    setLists(prev => prev.filter((item, i) => i !== index));
  };

  return (
    <div>
      <input type="text" value={list} onChange={(e) => setList(e.target.value)} />
      <select value={friendType} onChange={(e) => setFriendType(e.target.value)}>
        <option>Acha</option>
        <option>Bura</option>
      </select>
      <button onClick={handleAdd}>Add</button>
      
      <ul>
        {lists.map((item, index) => (
          <li key={index}>
            {item.name} ({item.type})
            <button onClick={() => handleRemove(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PracticeLab;

