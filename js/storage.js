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
console.log(month, monthNo);



//Upload
const upload = document.getElementById("upload");
const upload2 = document.getElementById("upload2");


//uploading File 1
upload.addEventListener("click", (e)=>{
    var file = document.getElementById("file").files[0];
    const storage = firebase.storage().ref(`Reports/Blood Test/${month} ${year}/` + file.name);
    // console.log(file);
    const task = storage.put(file)
    const ref = firebase.storage().ref("file.name")
    task.on("state_changed", 
    function (snap){
       const progress =(snap.bytesTransferred / snap.totalBytes * 100);
       const progressBar = document.getElementById("progressBar");
       progressBar.value = progress;
       console.log(progress);
       if (progress === 100) {
           alert("File Uploaded")
           location.reload();
       }
    }
   

    )
    
    


    
})
//uploading File 2
upload2.addEventListener("click", (e)=>{
    var file2 = document.getElementById("file2").files[0];
    const storage = firebase.storage().ref(`Reports/Cancer Test/${month} ${year}/` + file2.name);
    console.log(file2);
    const task = storage.put(file2)
    const ref = firebase.storage().ref("file2.name")
    task.on("state_changed", 
    function (snap){
       const progress =(snap.bytesTransferred / snap.totalBytes * 100);
       const progressBar2 = document.getElementById("progressBar2");
       progressBar2.value = progress;
       console.log(progress);
       if (progress === 100) {
           alert("File Uploaded")
           location.reload();
       }
    }
   

    )
    

    
})