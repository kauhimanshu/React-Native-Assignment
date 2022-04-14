import auth from '@react-native-firebase/auth';
import { firebase } from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const registration = async (email, password,fullName,image,callBack) => {
    try {
      const userData = await auth().createUserWithEmailAndPassword(
        email,
        password,
        
        
      );
      await firebase.firestore().collection('users').doc(userData.user.uid).set({
        FullName: fullName,
        Email: email,
        Image:image,
       
        
      });
  
      callBack();
    } catch (error) {
      alert(error.message);
    }
  };

  export const getData = async() =>{
    return await firebase.firestore()
    .collection('Data')
    .get()
    .then( snap => {
      const items = []
      snap.forEach( item => items.push(item.data()))
      return items;
    })
    .catch(err => err)
  }


  export const uploadImage = async () => {
    const db = firebase
        .firestore()
        .collection('users')
        .doc(accessToken)
        .update({
            Image: image
        })

};