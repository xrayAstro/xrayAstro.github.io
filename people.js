const people = [
  { email: "109-99-99-97-109-109-111-110-64-112-104-121-115-105-99-115-46-119-105-115-99-46-101-100-117", elementId: "dan" },
  { email: "106-97-101-99-107-101-108-50-64-119-105-115-99-46-101-100-117", elementId: "felix" },
  { email: "97-114-111-121-50-50-64-119-105-115-99-46-101-100-117", elementId: "avirup" },
  { email: "97-109-98-97-114-105-115-104-64-119-105-115-99-46-101-100-117", elementId: "ambarish" },
  { email: "109-97-114-105-110-111-54-64-119-105-115-99-46-101-100-117", elementId: "miriam" },
  { email: "115-114-110-111-119-97-107-50-64-119-105-115-99-46-101-100-117", elementId: "sophia" },
  { email: "119-108-105-117-51-52-53-64-119-105-115-99-46-101-100-117", elementId: "wei" },
  { email: "121-97-110-57-57-64-119-105-115-99-46-101-100-117", elementId: "shuala" },
  { email: "101-99-106-111-104-110-64-119-105-115-99-46-101-100-117", elementId: "elisa" },
  { email: "119-97-110-103-50-52-52-55-64-119-105-115-99-46-101-100-117", elementId: "zelong" },
];

// Decryption function
function decryptEmail(encryptedEmail) {
  let decrypted = '';
  const emailChars = encryptedEmail.split('-');
  for (let i = 0; i < emailChars.length; i++) {
    decrypted += String.fromCharCode(parseInt(emailChars[i]));
  }
  return decrypted;
}

people.forEach(function(person) {
  const emailElement = document.getElementById(person.elementId);
  emailElement.onclick = function() {
    window.location.href = "mailto:" + decryptEmail(person.email);
  };
});

