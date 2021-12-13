import React from "react";

function users({ data }) {
  return (
    <div>
      {data.map((user) => (
        <div key={user.id}className="users-container">
            <div className="username">{user.username}</div>
            <div style={{marginBottom:"1rem"}}className="useremail">{user.email}</div>
        </div>
      ))}
    </div>
  );
}

export default users;
