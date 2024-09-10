// Problem 02 : Notification Generator
// let person = {
//   userName: "tonmoy",
//   domainName: "gmail.com",
// };
// function sendNotification(email) {
//   let addString = email.userName + "@" + email.domainName;
//   // return addString;
//   if (addString.includes("@")) {
//     return userName + "sent you an email from " + domainName;
//   }
// }
// console.log(sendNotification(addString));

function sendNotification(email) {
  if (email.indexOf("@") === -1) {
    return "Invalid Email";
  }

  let check = email.split("@");
  let userName = check[0];
  let domainName = check[1];

  let notifiaction = userName + " sent you an email from " + domainName;
  return notifiaction;
}
console.log(sendNotification("zihad@gmail.com"));
console.log(sendNotification("sadia8icloud.com"));
