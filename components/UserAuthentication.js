
import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

const UserAuthentication = ({ onLoginSuccess }) => {
    const handleLoginSuccess = (response) => {
        console.log(response);
        onLoginSuccess(response);
    };

    const handleLoginFailure = (response) => {
        console.log('Login failed', response);
    };

    return (
        <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
            <GoogleLogin
                onSuccess={handleLoginSuccess}
                onError={handleLoginFailure}
            />
        </GoogleOAuthProvider>
    );
};

export default UserAuthentication;
