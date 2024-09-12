// problem 2:  Notification Generator
function sendNotification(email) {
  if (email.indexOf("@") === -1) {
    return "Invalid Email";
  }

  let check = email.split("@");
  let userName = check[0];
  console.log(userName);
  let domainName = check[1];
  console.log(domainName);

  let notifiaction = userName + " sent you an email from " + domainName;
  return notifiaction;
}
console.log(sendNotification("zihad@gmail.com"));
console.log(sendNotification("farhan34@yahoo.com"));
console.log(sendNotification("nadim.naem5@outlook.com"));
console.log(sendNotification("ahim234.hotmail.com"));
console.log(sendNotification("sadia8icloud.com"));
