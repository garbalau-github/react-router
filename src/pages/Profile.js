import React from 'react';

import { useParams, useNavigate } from 'react-router-dom';

export const Profile = () => {
  let navigate = useNavigate();
  let { username } = useParams();

  console.log(username);

  const handleClick = () => {
    navigate('/about');
  };

  return (
    <div>
      {username ? (
        <>
          <h1>Profile for {username}</h1>
          <button onClick={handleClick}>Go About</button>
        </>
      ) : (
        <>
          <h1>No user selected, showing default Profile</h1>
          <button onClick={handleClick}>Go About</button>
        </>
      )}
    </div>
  );
};
