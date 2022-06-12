// let logs = document.getElementById("logs");
// let lastLogin = [];


// const findState = () => {
//   const success = (position) => {
//     console.log(position);
//     const latitude = position.coords.latitude;
//     const longitude = position.coords.longitude;

//     const geoApiUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`;

//     fetch(geoApiUrl)
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         var country = data.countryName;
//         var state = data.principalSubdivision;
//         var locality = data.locality;
//         const d = new Date();
//         firebase.auth().onAuthStateChanged((user) => {
//           if (user) {
//             db.collection("Geo")
//               .doc(user.uid)
//               .collection("Locations")
//               .doc()
//               .set({
//                 country: country,
//                 state: state,
//                 locality: locality,
//                 date: d,
//               })
//               .then(() => {
//                 console.log("location uploaded");
//               });

//             //Getting data
//             var uid = user.uid;
//             db.collection("Patients")
//               .doc(uid)
//               .collection("Locations")
//               .get()
//               .then((querySnapshot) => {
//                 querySnapshot.forEach((doc) => {
//                   console.log(doc.data());
//                   lastLogin.push(doc.data());
                  
//                 });
//                 const mappedLastLogins = lastLogin.map(function (element) {
//                   document.getElementById(
//                     logs
//                   ).innerHTML += `<li>Date: ${element.date} Country: ${element.country}/li>`;
//                 });
//               });
//           }
//         });
//       });
//   };
//   const error = () => {
//     console.log(error);
//   };

//   navigator.geolocation.getCurrentPosition(success, error);
// };
// console.log(lastLogin);