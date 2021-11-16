import Rebase from 're-base'
import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDe2q3UCX8H-19xObYMvTSGj8K2NNHBXPM",
    authDomain: "hot-burgers-react.firebaseapp.com",
    databaseURL: "https://hot-burgers-react-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "hot-burgers-react",
    storageBucket: "hot-burgers-react.appspot.com",
    messagingSenderId: "81823398769",
    appId: "1:81823398769:web:76dee1e636c35e3dbf94d0"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp }
export default  base