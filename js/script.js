// document.querySelector("#contact-form").addEventListener("submit", (e) => {
//   e.preventDefault();
//   e.target.elements.name.value = "";
//   e.target.elements.email.value = "";
//   e.target.elements.message.value = "";
// });

/*******************custom css **********/

var themeName = window.localStorage.getItem("themeName");

if (themeName == "style") {
  // window.localStorage.setItem("themeName", "style");
  document.head.innerHTML = '<link rel="stylesheet" href="../css/style.css"/>';
} 
else {
  document.head.innerHTML = '<link rel="stylesheet" href="../css/light.css"/>';
}

function toggleTheme() {
  // window.localStorage.clear();
  window.localStorage.setItem("themeName", "dark");
  document.head.innerHTML = '<link rel="stylesheet" href="../css/light.css"/>';
}
