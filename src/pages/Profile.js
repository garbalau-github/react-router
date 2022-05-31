import React from 'react';

import { useParams, useNavigate } from 'react-router-dom';

const buttonStyle = {
  margin: 0,
  border: 'none',
  color: '#fff',
  fontSize: '18px',
  backgroundColor: 'rebeccapurple',
  padding: '5px 15px',
};

export const Profile = () => {
  let navigate = useNavigate();
  let { username } = useParams();

  const handleClick = () => {
    navigate('/about');
  };

  return (
    <div>
      {username ? (
        <>
          <h1>Username: {username}</h1>
          <button style={buttonStyle} onClick={handleClick}>
            Go About
          </button>
        </>
      ) : (
        <>
          <h1>Default Profile. No user selected.</h1>
          <button style={buttonStyle} onClick={handleClick}>
            Go About
          </button>
        </>
      )}
    </div>
  );
};
