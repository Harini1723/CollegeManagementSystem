
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token'); // Get the JWT token from localStorage

    if (!token) {
      navigate('/signin'); // Redirect to signin if no token is found
    }
  }, [navigate]); // Add navigate as a dependency

  return (
    <div>
      <h1>Welcome to Home Page</h1>
      {/* Your home page content */}
    </div>
  );
}

export default Home;
