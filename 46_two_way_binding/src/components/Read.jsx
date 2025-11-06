import React from "react";

const Read = ({users}) => {

  const renderUsers = users.map((user, index) => {
    return (
      <li key={index}>
        {user.name} | {user.age}
      </li>
    );
  });
  return (
    <div>
      <h1>Users Data:</h1>
      <ul>{renderUsers}</ul>
    </div>
  );
};

export default Read;
