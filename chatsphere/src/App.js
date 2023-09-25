import Messenger from "./components/Messenger";
import { GoogleOAuthProvider } from "@react-oauth/google";
import AccountProvider from './context/AccountProvider';
function App() {

  const clientId = '352089009529-bcuaqekjuimjd1i6olg48pbj80i076cf.apps.googleusercontent.com';

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
        <Messenger/>
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
