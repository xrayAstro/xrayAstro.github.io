const people = [
  { name: "Dan McCammon", email: "mccammon@physics.wisc.edu", elementId: "dan" },
  { name: "Felix Jaeckel", email: "jaeckel2@wisc.edu", elementId: "felix" },
  { name: "Avirup Roy", email: "aroy22@wisc.edu", elementId: "avirup" },
  { name: "C. V. Ambarish", email: "ambarish@wisc.edu", elementId: "ambarish" },
  { name: "Miriam Marino", email: "marino6@wisc.edu", elementId: "miriam" },
  { name: "Sophia", email: "srnowak2@wisc.edu", elementId: "sophia" },
  { name: "Wei Liu", email: "wliu345@wisc.edu", elementId: "wei" },
  { name: "Shaula Yan", email: "yan99@wisc.edu", elementId: "shuala" },
  { name: "Elisa John", email: "ecjohn@wisc.edu", elementId: "elisa" },
  { name: "Zelong Wang", email: "wang2447@wisc.edu", elementId: "zelong" },
];

people.forEach(function(person) {
  const emailElement = document.getElementById(person.elementId);
  emailElement.onclick = function() {
    window.location.href = "mailto:" + person.email;
  };
});

