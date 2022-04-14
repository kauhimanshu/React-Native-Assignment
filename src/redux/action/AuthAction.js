import auth, { firebase } from '@react-native-firebase/auth';
import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_SUCCESS,
  LOGIN_REQUEST,
} from './Constant';
import { storage } from '../../storage/Index';


export const loginRequest = () => {
  return {
    type: LOGIN_REQUEST,
  };
};
export const receiveLogin = user => {
  // console.log('userrr',user);
  return {
    type: LOGIN_SUCCESS,
    payload: user,
    
  };
};

export const loginError = error => {
  return {
    type: LOGIN_FAILURE,
    error: error,
  };
};

export const receiveLogout = () => {
  return {
    type: LOGOUT_SUCCESS,
  };
};










export const handleSignin = (email, password) => async dispatch => {
  console.log('Check the initialState', handleSignin);
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(response => {
      dispatch({ type: LOGIN_SUCCESS, payload: response.user });
      storage.setItem('token', response.user.uid);
    })
    .catch(error => {
      dispatch({ type: LOGIN_FAILURE, payload: authFailMessage(error.code) });
    });
};


export const handleSignOut = () => async dispatch => {
  firebase.auth().signOut().then(() => {
    dispatch(receiveLogout());
    storage.setItem('token', null);
  },
    function (error) {
      console.log('sign out error', error)
    },
  );

};

const authFailMessage = errorCode => {
  switch (errorCode) {
    case 'auth/invalid-code':
      return 'Code is invalid.';otp
    case 'auth/user-disabled':
      return 'User is disabled.';
    case 'auth/user-not-found':
      return 'User not found.';
    case 'auth/wrong-password':
      return 'Password is invalid.';
    case 'auth/email-already-in-use':
      return 'Email address is already in use.';
    case 'auth/weak-password':
      return 'Password is not strong enough.';
    default:
      return 'Authentication failed.';
  }
};

// export const phoneSignin = (phoneNumber) => async dispatch => {
//   const response = await auth().signInWithPhoneNumber(phoneNumber);
//   try {
//     if (response) {
//       setConfirm(response);
//     }
//     dispatch({ type: GET_OTP_SUCCESS, payload: response.user })
//     storage.setItem('otpToken', response?.user?.uid)
//   }
//   catch {
//     (error) = () => {
//       console.log('error', error);
//     }
//   }
// }

