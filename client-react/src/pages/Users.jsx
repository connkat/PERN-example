import { Fragment, useState, useEffect } from "react";

function Users() {
  const [users, setUsers] = useState([]);
  const getUsers = async (e) => {
    try {
      const res = await fetch("http://localhost:3000/users");
      const data = await res.json();
      setUsers(data);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getUsers();
  });
  return (
    <Fragment>
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>Username</th>
            <th>Passworkd</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.username}>
              <td>{user.username}</td>
			  <td>{user.password}</td>
			  <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
}

export default Users;
