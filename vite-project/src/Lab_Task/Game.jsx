import React, { useState } from 'react'
import "./Game.css"

// return (
//     <>
//         <button onClick={() => (



//                     <div className='container'>
//                         <label>Alpha</label>
//                         <p>hello</p>
//                         <label>step 1</label>
//                         <label>step 2</label>
//                         <label>step 3</label>
//                         <label>step 4</label>
//                         <button>Next step</button>
//                     </div>

// )}>Create user</button>


//     </>
// );
function Game() {
    
      const [users, setUsers] = useState([]);
      
      const goForward = (index) => {
        const updatedData = [...users];
        if (updatedData[index].step < 3) {
          updatedData[index].step += 1;
        }
        setUsers(updatedData);
        console.log(updatedData.every(item => item.step===3))
      };
      const enabledUser = () => {};
      return (
        <div className="container">
          <div>
            <button
              onClick={() => {
                setUsers((prev) => [
                  ...prev,
                  {
                    userName: `user-${prev.length + 1}`,
                    step: 1,
                  },
                ]);
              }}
            >
              Create User
            </button>
          </div>
          <div>
            {users.map((userItem, index) => (
              <div style={{ display: "flex", gap: "20px", marginTop: "10px" }}>
                <div>{JSON.stringify(userItem)}</div>
                <div style={{ display: "flex", gap: "20px" }}>
                  <button disabled>Step 1</button>
                  <button disabled>Step 2</button>
                  <button disabled>Step 3</button>
                </div>
                <div>
                  <button
                    className="forward"
                    onClick={() => {
                      goForward(index);
                    }}
                  >
                    Forward
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }



export default Game;


