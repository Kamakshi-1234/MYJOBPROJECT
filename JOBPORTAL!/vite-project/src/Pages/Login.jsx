




import { useState } from 'react';
import { auth } from '../firebase/firebase.config.js'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { setUser } from '../store/usersSlice';

function Login() {
  const dispatch = useDispatch();

  const [loginType, setLoginType] = useState('signup'); // Default to signup
  const [userCredentials, setUserCredentials] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  onAuthStateChanged(auth, (user) => {
    if (user) {
      dispatch(setUser({ id: user.uid, email: user.email }));
    } else {
      dispatch(setUser(null));
    }
  });

  function handleCredentials(e) {
    setUserCredentials({ ...userCredentials, [e.target.name]: e.target.value });
  }

  function handleSignUp(e) {
    setError("");
    e.preventDefault();
    createUserWithEmailAndPassword(auth, userCredentials.email, userCredentials.password)
      .then((userCredential) => {
        dispatch(setUser({ id: userCredential.user.uid, email: userCredential.user.email }));
      })
      .catch((error) => {
        setError(error.message);
      });
  }

  function handleLogin(e) {
    setError("");
    e.preventDefault();
    signInWithEmailAndPassword(auth, userCredentials.email, userCredentials.password)
      .then((userCredential) => {
        dispatch(setUser({ id: userCredential.user.uid, email: userCredential.user.email }));
      })
      .catch((error) => {
        setError(error.message);
      });
  }

  function handlePasswordReset() {
    const email = prompt('Please enter your email');
    sendPasswordResetEmail(auth, email);
    alert('Email sent! Check your inbox for password reset instructions.');
  }

  return (
    <>
   
      <div style={{ textAlign: 'center', marginTop: '50px', backgroundColor: '#fff', padding: '20px' }}>
        <h1 style={{ fontSize: '2em', marginBottom: '20px', fontWeight: 'bold' }}>Job Portal</h1>
        <h2 style={{ fontSize: '1.5em', marginBottom: '10px' }}>{loginType === 'signup' ? 'Sign Up' : 'Login'} to Your Account</h2>
        <form style={{ maxWidth: '300px', margin: '0 auto', backgroundColor: '#4070f4', padding: '20px', borderRadius: '10px' }}>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ fontSize: '1em', marginBottom: '5px', display: 'block' }}>Email *</label>
            <input
              onChange={(e) => handleCredentials(e)}
              type="text"
              name="email"
              placeholder="Enter your email"
              style={{ width: '100%', padding: '15px', borderRadius: '10px', border: 'none', marginBottom: '10px' }}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ fontSize: '1em', marginBottom: '5px', display: 'block' }}>Password *</label>
            <input
              onChange={(e) => handleCredentials(e)}
              type="password"
              name="password"
              placeholder="Enter your password"
              style={{ width: '100%', padding: '15px', borderRadius: '10px', border: 'none' }}
            />
          </div>
          <button onClick={loginType === 'signup' ? handleSignUp : handleLogin} className="btn" style={{ width: '100%', padding: '15px', backgroundColor: '#007bff', color: '#fff', borderRadius: '10px', border: 'none', cursor: 'pointer', fontSize: '1.2em' }}>{loginType === 'signup' ? 'Sign Up' : 'Login'}</button>
        </form>
        {loginType === 'signup' ? (
          <p onClick={() => setLoginType('login')} style={{ marginTop: '10px', cursor: 'pointer', textDecoration: 'underline', fontSize: '1em' }}>Already have an account? Log In</p>
        ) : (
          <>
            <p onClick={() => setLoginType('signup')} style={{ marginTop: '10px', cursor: 'pointer', textDecoration: 'underline', fontSize: '1em' }}>Don't have an account? Sign Up</p>
            <p onClick={handlePasswordReset} style={{ marginTop: '10px', cursor: 'pointer', textDecoration: 'underline', fontSize: '1em' }}>Forgot Password?</p>
          </>
        )}
        {error && <div style={{ color: 'red', marginTop: '10px', fontSize: '1em' }}>{error}</div>}
      </div>
    </>
  );
}

export default Login;



{/* 

dispatch as a messenger or a postal service. Its job is to deliver actions to the Redux store. 

What is dispatch?
Messenger: Imagine dispatch as someone who takes actions and delivers them to the Redux store.
Action Delivery Service: It's like a postal service that takes actions and sends them to the Redux store for processing.


How Does dispatch Work?
Action Delivery: When you call dispatch, you're handing over an action (which is just a description of what happened in your app) to Redux.
Redux Store Handling: Redux then looks at the action and decides what to do with it based on the reducers you've set up.
. Why Use dispatch?
Control State: It's a way for your components to influence the state of your app. When something happens in your app (like a button click), you create an action and send it off with dispatch.
Update State: By dispatching actions, you're telling Redux to update its state based on what happened in your app.
dispatch is a function you use to send actions to Redux for processing.
It's like telling Redux what's happening in your app so that it can update its state accordingly.





In this context, dispatch is being used to send actions to the Redux store based on the authentication state changes. Let's break down what dispatch is doing here:

Dispatching Actions in the onAuthStateChanged Callback:
const dispatch = useDispatch();: This line initializes the dispatch function using the useDispatch hook. This function will be used to send actions to the Redux store.

onAuthStateChanged(auth, (user) => { ... }): This is a Firebase Auth method that listens for changes in the authentication state. When the authentication state changes (i.e., when a user logs in or out), the callback function is triggered.

if (user) { dispatch(setUser({ id: user.uid, email: user.email })); }:

If a user object is present (i.e., the user is logged in), an action is dispatched to set the current user in the Redux store.
The setUser action creator is called with an object containing the user's id and email, extracted from the user object provided by Firebase Auth.
This action updates the Redux store with the user's information, making it available throughout the application.
else { dispatch(setUser(null)); }:

If the user object is null (i.e., the user is logged out), an action is dispatched to clear the current user in the Redux store.
The setUser action creator is called with null as the payload, indicating that there is no current user.
This action updates the Redux store to reflect that there is no logged-in user.


Role of dispatch:
Sending Actions: dispatch is responsible for sending actions to the Redux store.
Updating State: Based on the authentication state changes, dispatch sends actions to update the user-related state in the Redux store accordingly.
Integration with React Components: By using dispatch within the onAuthStateChanged callback, you can ensure that Redux state is updated in response to changes in the authentication state, and React components can react to these state changes accordingly.

Summary:
dispatch is used to send actions to the Redux store.
In the provided code, dispatch is used within the onAuthStateChanged callback to update Redux state based on changes in the authentication state.
Depending on whether a user is logged in or out, different actions are dispatched to update the Redux store accordingly, ensuring that the application's state remains synchronized with the authentication state.









console.log(setUser)=>
  function createAction(type, prepareAction) {
  function actionCreator(...args) {
    if (prepareAction) {
      let prepared = prepareAction(...args);
      if (!prepared) {
        throw new Error(false ? formatProdErrorMessage(0) : "prepareAction did not return an object");
      }
      return {
        type,
        payload: prepared.payload,
        ..."meta" in prepared && {
          meta: prepared.meta
        },
        ..."error" in prepared && {
          error: prepared.error
        }
      };
    }
    return {
      type,
      payload: args[0]
    };
  }


setUser({ id: user.uid, email: user.email }) explain what is action and what is payload and from where I got setUser here
ChatGPT
In the expression setUser({ id: user.uid, email: user.email }), setUser is an action creator, and { id: user.uid, email: user.email } is the payload being passed to this action creator.

Explanation:
Action Creator (setUser):

An action creator is a function that creates and returns an action object. It's a helper function that simplifies the process of creating actions in Redux.
In your code, setUser is an action creator function generated by the createSlice function from Redux Toolkit.
The purpose of setUser is to create an action that will be dispatched to update the Redux store with information about the current user.
Payload:

The payload is the data that is sent along with an action. It provides additional information about what happened in your application.
In this case, the payload is an object containing the id and email of the current user.
These values are obtained from the user object, likely representing the currently authenticated user in your application.
Usage:

When you call setUser({ id: user.uid, email: user.email }), you're invoking the setUser action creator function and passing it an object containing the id and email properties.
This action creator then returns an action object with a specific structure that typically includes a type property to identify the action type and a payload property to hold the data being sent with the action.
Where setUser Comes From:

In the code snippet provided, setUser is imported from the Redux slice defined earlier in your code.
It's likely that you have defined a Redux slice named 'users' using createSlice, and setUser is one of the action creators generated by this slice.
Summary:
Action Creator (setUser): A function that creates and returns an action object.
Payload: The data sent along with the action, providing additional information about what happened.
Usage: Calling setUser({ id: user.uid, email: user.email }) creates an action object representing the action of setting the current user, with the user's id and email as the payload.
Origin: setUser is likely imported from a Redux slice defined earlier in your code, where it was generated by createSlice.









*/}
