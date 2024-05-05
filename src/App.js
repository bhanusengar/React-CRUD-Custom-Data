import React, { useState } from "react";

function App() {
  const [users, setUsers] = useState([
    { id: 1, name: "alex" },
    { id: 2, name: "martin" },
    { id: 3, name: "jon" },
  ]);

  const addUser = () => {
    const newUser = {
      id: Date.now(),
      name: `User ${users.length + 1}`,
    };
    const newUsers = [...users, newUser];

    setUsers(newUsers);
  };

  const updateUser = (user, updateName) => {
    const newState = [...users];
    const index = newState.findIndex((singleUser) => singleUser.id === user.id);
    newState[index] = { ...user, name: updateName };
    setUsers(newState);
  };

  const removeUser = (id) => {
    setUsers((preValue) => {
      return preValue.filter((valueSet) => valueSet.id !== id);
    });
  };

  return (
    <div className="App">
      <button onClick={addUser}>Add User </button>
      <table>
        <thead>
          <tr>
            <th>SL No.</th>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>
                  <button onClick={() => updateUser(user, "alex-3")}>
                    Edit
                  </button>
                  <button onClick={() => removeUser(user.id)}>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <p>No Data Found</p>
          )}
        </tbody>
      </table>
    </div>
  );
}
export default App;
