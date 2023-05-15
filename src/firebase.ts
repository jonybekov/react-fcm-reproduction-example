import { initializeApp } from 'firebase/app';
import 'firebase/messaging';
import { getMessaging } from 'firebase/messaging';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

export const VAPID_KEY =
  'BNCjp7668RnigMxFDpbUn8T3KL-8PJ4z1LAwSjSjEcPpouZcEG8aT1rOo1G5Om6k1r9HDYvtpDJtoUOkC8a3OG4';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDu-WsxqwxLB9CBe7wBfl4zF3pnKymO9nU',
  authDomain: 'iron-core-371011.firebaseapp.com',
  projectId: 'iron-core-371011',
  storageBucket: 'iron-core-371011.appspot.com',
  messagingSenderId: '1009262964387',
  appId: '1:1009262964387:web:7958ca2ba79c57af2c1916',
};

const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);
