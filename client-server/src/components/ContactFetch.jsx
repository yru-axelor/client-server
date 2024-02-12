import React, { useEffect, useState } from "react";
import { Card } from "./Card/Card";

function ContactFetch() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    try {
      async function fetching() {
        const res = await fetch("http://localhost:5000/api/contacts");
        const data = await res.json();
        setUsers(data);
      }
      fetching();
    } catch (e) {
      console.log(e.message);
    }
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

export default ContactFetch;
