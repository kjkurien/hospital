import './App.css'
import Footer from './components/Layout/FixedBottomNavigation'
import Home from './components/Home'
import Rating from './components/Rating'
import Profile from './components/Profile'
import { Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react'
import {Amplify} from 'aws-amplify'
import config from "./aws-exports.ts";
import { Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import {
  AuthUser,
  fetchAuthSession,
  AuthSession,
  getCurrentUser,
  signInWithRedirect,
  signOut,
} from "aws-amplify/auth";
import { Hub } from "aws-amplify/utils";

Amplify.configure(config)

function App() {
  
  const [user, setUser] = useState<AuthUser | null>(null);
  const [session, setSession] = useState<AuthSession | null>(null);
  const [customState, setCustomState] = useState<string | null>(null);

  useEffect(() => {
    document.title = 'Health';
    getUser();
  }, []);

  const getUser = async (): Promise<void> => {
    try {
      const currentUser = await getCurrentUser();
      setUser(currentUser);
      const session = await fetchAuthSession();
      setSession(session);
      console.log(session.tokens?.idToken?.payload);
      const { accessToken } = (await fetchAuthSession()).tokens ?? {};
      console.log(accessToken);
    } catch (error) {
      console.error(error);
      console.log("Not signed in");
    }
  };

  return (
    <>
      <Authenticator>
       {({ signOut, user }) => (
          <div>
            {user ? (
              <div>
                <h1>Hello </h1>
                <button onClick={signOut}>Sign Out</button>
                <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/rating' element={<Rating />} />
                  <Route path='/profile' element={<Profile />} />
                </Routes>
                <Footer/>
              </div>
            ) : (
              <div>
                <h1>Sign In</h1>
              </div>


            )}
          </div>
        )}
          
      </Authenticator>

      
      
    </>
  )
}


export default App
