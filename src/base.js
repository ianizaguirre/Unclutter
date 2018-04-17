import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyBRHyE636DE2euHErjVjwyR0vQ0M0JNSl4',
  authDomain: 'react-to-do-app-1.firebaseapp.com',
  databaseURL: 'https://react-to-do-app-1.firebaseio.com'
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
