//Logout
const logout = document.getElementById("Logout");
logout.addEventListener("click", logOut);

function logOut(e){
  e.preventDefault();
  auth.signOut().then(()=>{
    console.log("User Signed Out");
    location.replace("./signin.html");

  })
}