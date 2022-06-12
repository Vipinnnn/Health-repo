//Month and Year
const currentDate = new Date();
const monthNo = currentDate.getMonth();
var month =""
const year = currentDate.getFullYear();
switch (monthNo) {
  case 0:
    month = "Jan";
    break;
  case 1:
    month = "Feb";
    break;
  case 2:
    month = "Mar";
    break;
  case 3:
    month = "April";
    break;
  case 4:
    month = "May";
    break;
  case 5:
    month = "June";
    break;
  case 6:
    month = "July";
    break;
  case 7:
    month = "Aug";
    break;
  case 8:
    month = "Sept";
    break;
  case 9:
    month = "Oct";
    break;
  case 10:
    month = "Nov";
    break;
  case 11:
    month = "Dec";
    break;
  default:
    break;
}



firebase.auth().onAuthStateChanged((user)=>{
  if (user) {
    console.log(user.email);
    
  }
  else{
    location.replace("signin.html")
  }
  })




//Upload
const upload = document.getElementById("upload");
const upload2 = document.getElementById("upload2");


//uploading File 1
firebase.auth().onAuthStateChanged((user)=>{
  if (user) {
   var uid = user.uid; 
   var email = user.email;
  }


upload.addEventListener("click", (e)=>{

    var file = document.getElementById("file").files[0];
    const storage = firebase.storage().ref(`Reports/${email}/Blood Test/${month} ${year}/` + file.name);
  
    const task = storage.put(file)
    
  
    const ref = firebase.storage().ref(file.name)
    task.on("state_changed", 
    function progress (snap){
       const progress =(snap.bytesTransferred / snap.totalBytes * 100);
       const progressBar = document.getElementById("progressBar");
       progressBar.value = progress;
       console.log(progress);
       if (progress === 100) {
        
           alert("File Uploaded")
          
       }
    },
    function error(err){
      console.log(err.message);
    },
    function completed (){
      storage.getDownloadURL().then(url=>{
        // console.log(ref.location.path_);
        // console.log(url);
        // console.log(uid);
        firebase.firestore().collection("fileNames").doc(ref.location.path_).set({
          fileName : ref.location.path_
        })
        firebase.firestore().collection("Patients").doc(user.uid).collection("Blood Reports").doc(ref.location.path_)
        .set({
          fileName: file.name,
          fileUrl: url
        }).then(()=>{
          console.log(task);
          console.log(task.uploadUrl_);
          console.log("fileuploaded");
          location.reload();
        })
      })
      
    }
   

    )

   


    
})


//uploading File 2

upload2.addEventListener("click", (e)=>{
    var file2 = document.getElementById("file2").files[0];
    const storage = firebase.storage().ref(`Reports/${email}/Radiology Test/${month} ${year}/` + file2.name);
    console.log(file2.name);
    const task = storage.put(file2)
    const ref = firebase.storage().ref(file2.name)
    task.on("state_changed", 
    function progress (snap){
      const progress =(snap.bytesTransferred / snap.totalBytes * 100);
      const progressBar = document.getElementById("progressBar2");
      progressBar.value = progress;
      console.log(progress);
      if (progress === 100) {
          alert("File Uploaded")
          
      }
   },
   function error(err){
     console.log(err.message);
   },
   function completed (){
     storage.getDownloadURL().then(url=>{
       
      firebase.firestore().collection("Patients").doc(user.uid).collection("Radiology Reports").doc(ref.location.path_)
        .set({
          fileName: file2.name,
          fileUrl: url
       }).then(()=>{
         console.log("fileuploaded");
         location.reload();
       })
     })
   }
   

    )
    

    
})
})


