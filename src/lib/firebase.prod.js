import Firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { seedDatabase } from '~/seed';

// We need to somehow seed the database

const config = {
    apiKey: 'AIzaSyC_q0pj6JA-rzakvbv3bZ4ux7Mj3rjcOv0',
    authDomain: 'netflix-2e880.firebaseapp.com',
    projectId: 'netflix-2e880',
    storageBucket: 'netflix-2e880.appspot.com',
    messagingSenderId: '548229730710',
    appId: '1:548229730710:web:c7ccd5616cce62584d4db7',
};

const firebase = Firebase.initializeApp(config);

seedDatabase(firebase);

export { firebase };
