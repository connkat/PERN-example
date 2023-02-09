import { useEffect, useState } from "react";
import axios from "axios";


export default function User() {
  const [users, setUsers] = useState({});

  useEffect(() => {
    axios
      .get("/users")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        setUsers({ error: err.message });
      });
  }, []);

  console.log("USERS:", users)
  return (
    <div>
      <h1>User</h1>
	  {users}
    </div>
  );
}
