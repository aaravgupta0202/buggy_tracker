<!-- Firebase SDKs (compat – required for plain HTML) -->
<script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-database-compat.js"></script>

<script>
  const firebaseConfig = {
    apiKey: "AIzaSyBupPnckDbBcqNOIcCGVucOfEeUd_uo22A",
    authDomain: "tracker-mit.firebaseapp.com",
    databaseURL: "https://tracker-mit-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "tracker-mit",
    storageBucket: "tracker-mit.appspot.com",
    messagingSenderId: "1055743844534",
    appId: "1:1055743844534:web:b770c413e908951f470617"
  };

  firebase.initializeApp(firebaseConfig);
  const database = firebase.database();
</script>
