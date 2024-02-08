import React, { useEffect, useState } from "react";

function ContactFetch() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    try {
      async function fetching() {
        const res = await fetch("http://localhost:5000/api/contacts", {
          method: "GET",
        });
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
      {users.map((user) => (
        <li key={user.id}>{user.firstName}</li>
      ))}
    </div>
  );
}

export default ContactFetch;
