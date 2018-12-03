package pullanappfb

import firebase.AppOptions

val app by lazy {
    firebase.initializeApp(
        AppOptions().apply {
            apiKey= "AIzaSyCk4evdCJvWCYS8GpodbBotuYfebdwbqHE"
            authDomain= "pullanapp.firebaseapp.com"
            databaseURL= "https://pullanapp.firebaseio.com"
            projectId= "pullanapp"
            storageBucket= "pullanapp.appspot.com"
            messagingSenderId= "778902419215"
        }
    )
}

