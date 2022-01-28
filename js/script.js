// document.querySelector("#contact-form").addEventListener("submit", (e) => {
//   e.preventDefault();
//   e.target.elements.name.value = "";
//   e.target.elements.email.value = "";
//   e.target.elements.message.value = "";
// });
window.addEventListener("load", () => {
  // console.log('page is fully loaded');

  fadeOutEffect();
});

function fadeOutEffect() {
  var fadeTarget = document.getElementById("pre-loader");
  var fadeEffect = setInterval(function () {
    if (!fadeTarget.style.opacity) {
      fadeTarget.style.opacity = 1;
    }
    if (fadeTarget.style.opacity > 0) {
      fadeTarget.style.opacity -= 0.1;
    } else {
      clearInterval(fadeEffect);
    }
  }, 50);
  fadeTarget.style.zIndex = -1;
}

/*******************custom css **********/
// window.localStorage.setItem("themeName", "dark");
var themeName = window.localStorage.getItem("themeName");
var baseUrl= "https://ragenmah.github.io/portfolio/";
var fabicon =
  '<link href="'+baseUrl+'resources/images/ragen.jpg" rel="shortcut icon" type="image/x-icon">  ';
var homeCss = '<link rel="stylesheet" href="'+baseUrl+'css/dark.css" />';
var icons =
  ' <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"\
integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA=="\
crossorigin="anonymous" referrerpolicy="no-referrer" />';
var responsive = '<link rel="stylesheet" href="'+baseUrl+'css/responsive.css" />';
if (themeName == "light") {
  document.head.innerHTML =
     fabicon +
    '<link rel="stylesheet" href="'+baseUrl+'css/light.css"/>' +
    icons +
    responsive;
} else {
  document.head.innerHTML =
     fabicon +
    '<link rel="stylesheet" href="'+baseUrl+'css/dark.css"/>' +
    icons +
    responsive;
}

function toggleTheme() {
  var themeName = window.localStorage.getItem("themeName");
  // document.head.innerHTML = '<link rel="stylesheet" href="/css/light.css"/>'+icons+responsive;

  if (document.getElementById("toggleId").checked && themeName == "light") {
    window.localStorage.setItem("themeName", "dark");
    document.head.innerHTML =
       fabicon +
      '<link rel="stylesheet" href="'+baseUrl+'css/dark.css"/>' +
      icons +
      responsive;
  } else {
    window.localStorage.setItem("themeName", "light");
    document.head.innerHTML =
       fabicon +
      '<link rel="stylesheet" href="'+baseUrl+'css/light.css"/>' +
      icons +
      responsive;
  }
  if (document.getElementById("toggleId").checked && themeName == "dark") {
    window.localStorage.setItem("themeName", "light");
    document.head.innerHTML =
       fabicon +
      '<link rel="stylesheet" href="'+baseUrl+'css/light.css"/>' +
      icons +
      responsive;
  } else {
    window.localStorage.setItem("themeName", "dark");
    document.head.innerHTML =
       fabicon +
      '<link rel="stylesheet" href="'+baseUrl+'css/dark.css"/>' +
      icons +
      responsive;
  }
}

/**********responsive  ***********/
function showNavlinks() {
  var x = document.getElementById("navbarId");
  if (x.className === "container-btns") {
    x.className += " responsive";
  } else {
    x.className = "container-btns";
  }
}

/********* Contact Form *************/
function handleFormData() {
  var name = document.contactForm.name.value;
  var email = document.contactForm.email.value;
  var message = document.contactForm.message.value;
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  
  if (name == "" || name == null) {
    alert("Please provide your full name");
    document.contactForm.name.focus();
    return false;
  } else if (email == "" || email == null) {
    alert("Please provide your valid email address");
    document.contactForm.email.focus();
    return false;
    } else if(!email.match(mailformat))
    {
      alert("You have entered an invalid email address!");
      document.contactForm.email.focus();
      return false;
  }
   else if (message == "" || message == null) {
    alert("Please write some message");
    document.contactForm.message.focus();
    return false;
  } else if (message.length < 15) {
    alert("Your message should be at least 15 character long");
    return false;
  }else{
    alert("Thank You for time...")
  }
}
