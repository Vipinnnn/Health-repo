var ifr = document.getElementById("blood1");
var dispFile = document.getElementById("fileName")
let bloodReportDocs = [];
let radiologyReportDocs = [];

function deleteFile(file){
  firebase.auth().onAuthStateChanged((user)=>{
    if (user) {
      var uid = user.uid; 
      var email = user.email;

      db.collection("Patients").doc(uid).collection("Blood Reports").doc(file).delete().then(() => {
        console.log("Document successfully deleted!");
        location.reload();
    }).catch((error) => {
        console.error("Error removing document: ", error);
    });
    console.log("fileName");
    }

     
     
  })}


firebase.auth().onAuthStateChanged((user)=>{
  if (user) {
   var uid = user.uid; 
   var email = user.email;
  }




  

  db.collection("Patients").doc(uid).collection("Blood Reports").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) =>  {
      console.log(doc.data());
      bloodReportDocs.push(doc.data())
      // console.log(bloodReportDocs);


 
  })
  const mappedReports = bloodReportDocs.map(function(element){
    
    document.getElementById("bloodReports").innerHTML+=`<li >${element.fileName}<a  class="viewBtn" target="_blank" href=${element.fileUrl}>View File</a>`+`<button class="deleteFile" onclick= "deleteFile(${element.fileName})">Delete File</button>`+`</li>` 
   

  })


  
  

});


  //Radiology Reports
  db.collection("Patients").doc(uid).collection("Radiology Reports").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) =>  {
      console.log(doc.data());
      radiologyReportDocs.push(doc.data())
  })
  const mappedReports = radiologyReportDocs.map(function(element){
    document.getElementById("radiologyReports").innerHTML+=`<li>${element.fileName}<a class="viewBtn" target="_blank" href=${element.fileUrl}>View File</a><button class="deleteFile">Delete File</button></li>`
    // return  element.fileName;

  })


  
  


})});
