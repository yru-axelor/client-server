import React, { useEffect, useState } from "react";
import { Card } from "./Card/Card";

function ContactFetch() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      async function fetching() {
        const res = await fetch("http://localhost:5000/api/contacts");
        const data = await res.json();
        setUsers(data);
      }
      fetching();
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, []);
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }
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
