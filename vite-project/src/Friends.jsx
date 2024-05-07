import React, { useState } from "react";
export default function Friends() {
  const [friend, setFriend] = useState("");
  const [friends, setFriends] = useState([]); // ["sahi","gaa","asdajhsd"]
  //  [{friend: "name", type: "acha"| "Bura"}]

  const [friendType, setFriendType] = useState("Acha");
  return (
    <div>
      <input
        type="text"
        value={friend}
        onChange={(e) => {
          setFriend(e.target.value);
        }}
        placeholder="Abdullah"
      />
      <select
        value={friendType}
        onChange={(e) => {
          setFriendType(e.target.value);
        }}
      >
        <option value="Acha">Acha</option>
        <option value="Bura">Bura</option>
        <option value="Neutral">Neutral</option>
      </select>
      <button
        onClick={() => {
          setFriends((prev) => [...prev, { name: friend, type: friendType }]);
        }}
      >
        Add
      </button>
      Friends
      <div>
        Achay Dost :
        {friends
          .filter((item) => item.type === "Acha")
          .map((friendItem) => (
            <li>
              {friendItem.name} ({friendItem.type})
            </li>
          ))}
        <hr />
        Buray Dost :
        {friends
          .filter((item) => item.type === "Bura")
          .map((friendItem) => (
            <li>
              {friendItem.name} ({friendItem.type})
            </li>
          ))}
        <hr />
        Neutral Dost :
        {friends
          .filter((item) => item.type === "Neutral")
          .map((friendItem) => (
            <li>
              {friendItem.name} ({friendItem.type})
            </li>
          ))}
      </div>
    </div>
  );
}
