import React, { useState } from 'react';
import './App.css';
import UserForm from './Components/Form/UserForm';
import UserList from './Components/User/UserList';

function App() {
  const [user, setUsers] = useState([]);
  const onUserAdd = (users) => {
    setUsers([...user, ...users])
  }
  return (
    <div className="App">
      <UserForm onUserAdd={onUserAdd} />
      <hr></hr>
      <UserList users={user} />
    </div>
  );
}

export default App;
