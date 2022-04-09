import auth from '@react-native-firebase/auth';
import { firebase } from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const registration = async (email, password, fullName, callBack) => {
    try {
      const userData = await auth().createUserWithEmailAndPassword(
        email,
        password
      );
      await firebase.firestore().collection('users').doc(userData.user.uid).set({
        FullName: fullName,
        Email: email,
      });
  
      callBack();
    } catch (error) {
      alert(error.message);
    }
  };

  // export const forgotPassword = (email) => {
  //   firebase.auth().sendPasswordResetEmail(email)
  //     .then(function (user) {
  //       alert('Please check your email...')
  //     }).catch(function (e) {
  //       console.log(e)
  //     })
  // }