import firebase from 'firebase';

const FIREBASE_CONFIG = {
  apiKey: "AIzaSyBccEbercMrmhsQni4xS-9WT71glYnWQdc",
  authDomain: "the-good-concierge.firebaseapp.com",
  databaseURL: "https://the-good-concierge.firebaseio.com",
  projectId: "the-good-concierge",
  storageBucket: "the-good-concierge.appspot.com",
  messagingSenderId: "1050141364428",
  appId: "1:1050141364428:web:d36789ed134c11c496b269",
  measurementId: "G-MEGP269XZL"
}
firebase.initializeApp(FIREBASE_CONFIG)
export const FIREBASE_REF = firebase.database().ref();
export const FIREBASE_AUTH = firebase.auth;
export const FIREBASE_PROVIDER = new firebase.auth.FacebookAuthProvider();
export const FIREBASE_DB = firebase.firestore();

export const CLOUDINARY_CLOUDNAME = 'goodaccoustics';
export const CHAT_NUMBER = '85252243837';

export const COUNTRIES = [
  {
    name: 'Singapore',
    currency: 'SGD',
    symbol: '$',
    countryCode: '65'
  },
  {
    name: 'Hong Kong',
    currency: 'HKD',
    symbol: '$',
    countryCode: '852'

  },
  {
    name: 'Japan',
    currency: 'JPY',
    symbol: '¥',
    countryCode: '81'
  },
  {
    name: 'China',
    currency: 'CNY',
    symbol: '¥',
    countryCode: '86'
  }
]
