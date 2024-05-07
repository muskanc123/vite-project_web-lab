import React from "react";

export default function ButtonHandler() {
  const users = ["Ali", "hamza", "ahmed"];
  const notifyMe = () => {
    alert("this is  notify function");
  };
  return (
    <div style={{ padding: "20px" }}>
      ButtonHandler
      <hr />
      <button
        onClick={() => {
          alert("button is clicked");
        }}
      >
        This is me as button
      </button>
      <button onClick={notifyMe}>This is me as button with a function </button>
      <div>
        {users.map((item, index) => {
          return (
            <div>
              {index + 1}. {item}
            </div>
          );
        })}
      </div>
    </div>
  );
}