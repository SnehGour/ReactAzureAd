import logo from './logo.svg';
import './App.css';
import { config, loginRequest } from './config';
import { AuthenticatedTemplate, MsalProvider, UnauthenticatedTemplate, useMsal } from '@azure/msal-react'

const WrappedView = () => {
  const { instance } = useMsal();
  const activeAccount = instance.getActiveAccount();

  const handleRedirect = () => {
    instance.loginRedirect({ ...loginRequest, prompt: 'create' })
      .catch(err => console.log(err))
  };


  return (
    <div className="App">
      <AuthenticatedTemplate>
        {activeAccount ? (
          <p>Hello {activeAccount.name}</p>
        ) : null}
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        <button onClick={handleRedirect}>Sign up</button>
      </UnauthenticatedTemplate>
    </div>
  );
}

const App = ({ instance }) => {
  return (
    <MsalProvider instance={instance}>
      <WrappedView />
    </MsalProvider>
  )
}
export default App;
