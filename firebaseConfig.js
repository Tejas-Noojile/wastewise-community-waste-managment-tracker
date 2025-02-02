import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyB2fFt8mQZBqK7r9VwXb0v8iK5iUzj4fE4',
    authDomain: 'waste-management-3b1b7.firebaseapp.com',
    projectId: 'waste-management-3b1b7',
    storageBucket: 'waste-management-3b1b7.appspot.com',
    messagingSenderId: '1028476753997',
    appId: '1:1028476753997:web:d7f4b7d1d7f4b7d1d7f4b7'
  };
  export const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);