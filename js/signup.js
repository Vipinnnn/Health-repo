
const signupForm= document.getElementById("signupForm")
if(signupForm){signupForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    //Getting users input
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const repassword = document.getElementById("repassword").value;
    const uname = document.getElementById("name").value;
    const dob = document.getElementById("dob").value;
    const age = document.getElementById("age").value;
    const gender = document.getElementById("gender").value;
    
    console.log(email, password, repassword);
    //Chechking for password
    if (password.length < 6) {
      alert("Enter Password greater than or equal to 6 characters")
      
    }
    else{
    if (password !== repassword){
      alert("Entered Passwords doesnot match!")
      // location.reload()
    }
    else{
      //Creating user 
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        var user = userCredential.user;
        console.log(userCredential);

        //Creating Users collection in firestore
        function createUserCollection(user) {
          firebase.firestore().collection("Patients").doc(user.uid)
          .set({
            uid: user.uid,
            name: uname,
            email: user.email,
            dateOfBirth : dob,
            age: age,
            gender: gender


          }).then(()=>{
            alert("You have Succesfully Signed Up")
            authchanges();
            
          })
          
        }
         
        createUserCollection(userCredential.user)
      
        
        
    
      
        
       

      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ..
        alert("ERROR")
      })
    }
   
  }

  

})}

//listen for auth status changes
function authchanges(){
  firebase.auth().onAuthStateChanged((user)=>{
    if (user) {
      location.replace("home.html")
      console.log(user.email);
    }
    else{
      location.replace("signin.html")
    }
    })
  
}


