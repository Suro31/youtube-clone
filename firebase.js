import firebase from 'firebase/app'

import 'firebase/auth'

const firebaseConfig = {
   apiKey: 'AIzaSyCOoquLockIxYZVE5nreKPDMDbVTh6KT-U',
   authDomain: 'yt-cl.firebaseapp.com',
   projectId: 'yt-cl',
   storageBucket: 'yt-cl.appspot.com',
   messagingSenderId: '713650135776',
   appId: '1:713650135776:web:3612f40b495bd9e6ef6685',
}

firebase.initializeApp(firebaseConfig)

export default firebase.auth()
