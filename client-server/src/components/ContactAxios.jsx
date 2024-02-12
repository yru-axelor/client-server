
import { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "./Card/Card";
export const ContactAxios = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/api/contacts").then((response) => {
      setUsers(response.data);
    });
  }, []);

  return (
    <div>
      <ol>
        <div className="container">
          {users.map((user) => (
            <Card key={user.id} user={user} />
          ))}
        </div>
      </ol>

    </div >
  );
}
