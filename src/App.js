// import Home from 'pages/Home/Home';
import React from 'react';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';

function App() {
  return (
    <div className="App">
      {/* <Home/> */}
      <GoogleOAuthProvider clientId="436701466862-ecjuageb0mo8ktlksfsad9uvfscth3jb.apps.googleusercontent.com">
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            console.log(credentialResponse);
            var decoded = jwt_decode(credentialResponse.credential);
            console.log(decoded);
          }}
          onError={() => {
            console.log('Login Failed');
          }}
        />
      </GoogleOAuthProvider>
    </div>
  );
}

export default App;
