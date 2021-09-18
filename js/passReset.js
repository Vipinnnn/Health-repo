
const forg = document.getElementById("forg");
forg.addEventListener("submit" , function(e){
  e.preventDefault();
  const email = document.getElementById("email").value;
  console.log(email);

  firebase.auth().sendPasswordResetEmail(email)
  .then(() => {
      alert("Password Reset Email Sent")
      location.replace("/signin.html")
    // Password reset email sent!
    // ..
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage)
    // ..
  });
})


