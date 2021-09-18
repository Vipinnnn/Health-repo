//listen for auth status changes
auth.onAuthStateChanged(user =>{
  
  if (user){
    location.replace("./home.html");
  }
  else()=>{
  location.replace("./signin.html");
  }
 
})

const signupForm= document.getElementById("signupForm")
signupForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const repassword = document.getElementById("repassword").value;
    console.log(email, password, repassword);
    if (password.length < 6) {
      alert("Enter Password greater than or equal to 6 characters")
      
    }
    else{
    if (password !== repassword){
      alert("Entered Passwords doesnot match!")
      // location.reload()
    }
    else{
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        alert("You have Succesfully Signed Up")
        // Signed in 
        // var user = userCredential.user;
        // return db.collection("users").doc(user.uid).set({
        //   age: document.getElementById("age").value
        // })
        // console.log(user);
        signupForm.reset();
        location.replace("./signin.html");
        
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ..
        alert("ERROR")
      });
    }
  }

  

})




