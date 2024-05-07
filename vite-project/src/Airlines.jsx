import React, { useState } from "react";
export default function Friends() {
  const [airLine, setAirLine] = useState();
  const [airLines, setAirLines] = useState([]);
  return (
    <div>
      <input
        type="text"
        value={airLine}
        onChange={(e) => {
          setAirLine(e.target.value);
        }}
        placeholder="Abdullah"
      />
      {JSON.stringify({ airLine })}
      <button
        onClick={() => {
          setAirLines((prev) => [...prev, airLine]);
          // setAirLines([...airLines, airLine]);
        }}
      >
        {" "}
        Add{" "}
      </button>
      {airLines.map((name) => (
        <li>{name}</li>
      ))}
    </div>
  );
}
