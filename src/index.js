import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from "@auth0/auth0-react";
import './index.css';
import App from './containers/App';


ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
    domain="dev-osl69701.us.auth0.com"
    clientId="LA1o78X181q96fd6SNw8UE8xAGeM8Sk2"
    redirectUri={window.location.origin}
    >
      <App />
      
    </Auth0Provider>,
  </React.StrictMode>,
  document.getElementById('root')
);

