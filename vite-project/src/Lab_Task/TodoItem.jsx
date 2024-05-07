import React, { useState } from 'react';


function TodoItem({ item, onStatusChange, onMoveToCompleted }) {
  return (
    <div>
      <span>{item.description}</span>
      <select value={item.status} onChange={(e) => onStatusChange(e.target.value)}>
        <option value="Backlog">Backlog</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>
      {item.status === 'Backlog' && (
        <button onClick={onMoveToCompleted}>Move to Completed</button>
      )}
    </div>
  );
}

function TodoList() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addItem = () => {
    if (inputValue.trim() !== '') {
      setItems([...items, { description: inputValue, status: 'Backlog' }]);
      setInputValue('');
    }
  };

//   const removeItem = (index) => {
//     setItems(items.filter((_, i) => i !== index));
//   };

  const updateStatus = (index, status) => {
    const updatedItems = [...items];
    updatedItems[index].status = status;
    setItems(updatedItems);
  };

  const moveToCompleted = (index) => {
    const updatedItems = [...items];
    updatedItems[index].status = 'Completed';
    setItems(updatedItems);
  };

  return (
    <div>
        <h1>To Do List App</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={addItem}>Add</button>
      {items.map((item, index) => (
        <TodoItem
          key={index}
          item={item}
          onStatusChange={(status) => updateStatus(index, status)}
          onMoveToCompleted={() => moveToCompleted(index)}
        />
      ))}
    </div>
  );
}

export default TodoList;
