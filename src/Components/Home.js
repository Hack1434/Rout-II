import React from 'react';
const Home = () => {
    const handleLogout = () => {
        localStorage.setItem('isLoggedIn','false');
    };

    return (
        <div className =" Home">
            <h1>Welcome to Home Page</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

 export default Home;