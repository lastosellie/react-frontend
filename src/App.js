/*
참고용

https://react.vlpt.us/basic/13-array-insert.html
*/


import React, { useRef, useState } from 'react';
import './App.css';
import UserList from './user/UserList';
import CreateUser from './user/CreateUser';
function App() {

  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });

  const { username, email } = inputs;

  const onChange = e => {

    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  }

  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com'
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com'
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com'
    }
  ]);

    const nextId = useRef(4);
    const onCreate = () => {

      setInputs({
        username: '',
        email: ''
      });
      nextId.current += 1;

    };

  
  const onRemove = id => {
    setUsers(users.filter(user => user.id !== id));
  }

  return (
    <div className="App">
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}></CreateUser>
      <UserList users={users} onRemove={onRemove} onToggle={onToggle}></UserList>
    </div>
  );
}

export default App;
