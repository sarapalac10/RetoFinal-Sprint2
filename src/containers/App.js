import LoginButton from '../components/Login';
import '../App.css';
import { AppRouter } from '../routers/AppRouter';
import { LogoutButton } from '../components/Logout';
import { Profile } from '../components/Profile';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="App">
      <div>
        {isAuthenticated ? (
            <>
              <Profile />
              <LogoutButton />
            </>
          ) : (
            <LoginButton />
          )}
      </div>

      <div>
        <AppRouter />
      </div>

    </div>
  );
}

export default App;
