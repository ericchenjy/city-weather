
import './App.css';
import Dashboard from './components/Dashboard.jsx';

import './components/auth/Auth.scss';
import GoogleButton from 'react-google-button'
import withFirebaseAuth from 'react-with-firebase-auth'
import firebase from 'firebase/app'
import 'firebase/auth';
import firebaseConfig from './firebaseConfig';
const firebaseApp = firebase.initializeApp(firebaseConfig);

function App(props) {


  const {
    user,
    signOut,
    signInWithGoogle,
  } = props;


  return (
    <div className="App">
      
      {
        user
          ? 
           <Dashboard user={user} signOut={signOut} /> 
          : 
          <div className="Auth">
            <p class="title">City Weather</p>
            <GoogleButton onClick={signInWithGoogle}  />
            <span className="made-by-txt">Junyan (Eric) Chen</span>
          </div>
      }
  
    </div>
  );
}

const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);
