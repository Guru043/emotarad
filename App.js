
import React, { useState } from 'react';
import UserAuthentication from './components/UserAuthentication';
import UserProfile from './components/UserProfile';
import Dashboard from './components/Dashboard';

function App() {
    const [user, setUser] = useState(null);

    const handleLoginSuccess = (profile) => {
        setUser(profile);
    };

    return (
        <div>
            {!user ? (
                <UserAuthentication onLoginSuccess={handleLoginSuccess} />
            ) : (
                <>
                    <UserProfile user={user} />
                    <Dashboard />
                </>
            )}
        </div>
    );
}

export default App;
