//listen for auth status changes
auth.onAuthStateChanged(user =>{
  console.log(user);
})

const signupForm= document.getElementById("signupForm")
signupForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password);



    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // alert("You have Succesfully Signed Up")
      // Signed in 
      var user = userCredential.user;
      console.log(user);
      signupForm.reset();
      location.replace("./home.html");
      
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // ..
    });

})



