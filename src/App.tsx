import React, { useState, useEffect } from 'react';
import User from './components/User';
import axios from 'axios';
import { IUser } from './interfaces/IUser';

function App() {

  const [users, setUsers] = useState<IUser[]>();

  useEffect(() => {

    const fetchUsers = () => {

      axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then((res) => {
          setUsers(res.data)
        })
    }

    fetchUsers()
  }, [users])

  return (
    <div className="App">
      <h1>Props & Interfaces</h1>
      {users?.map((i) => <User key={i.id} id={i.id} name={i.name} username={i.username} address={i.address} email={i.email} website={i.website} phone={i.phone} />)}
    </div>
  );
}

export default App;
