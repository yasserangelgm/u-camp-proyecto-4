// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA65aKQIuNS8xow3VGWvRZmVrwkO9a9kI0',
  authDomain: 'chila-quiles-rest.firebaseapp.com',
  projectId: 'chila-quiles-rest',
  storageBucket: 'chila-quiles-rest.appspot.com',
  messagingSenderId: '206982928568',
  appId: '1:206982928568:web:42098192d6efb3d5063c4d',
  experimentalForceLongPolling: true, // this line
  useFetchStreams: false, // and this line
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
