/*******************custom css **********/
// function to set a given theme/color-scheme
function setTheme(themeName) {
  localStorage.setItem("theme", themeName);
  document.documentElement.className = themeName;
}

// function to toggle between light and dark theme
function toggleTheme() {
  if (localStorage.getItem("theme") === "theme-dark") {
    setTheme("theme-light");
  } else {
    setTheme("theme-dark");
  }
}

// Immediately invoked function to set the theme on initial load
(function () {
  if (localStorage.getItem("theme") === "theme-light") {
    setTheme("theme-light");
  } else {
    setTheme("theme-dark");
  }
})();

/**********responsive  ***********/
var navbar = document.getElementById("navbarId");
var barsicon = document.getElementById("bars");
var closeicon = document.getElementById("close");
closeicon.style.display = "none";

function showNavlinks() {
  navbar.className += " responsive";
  barsicon.style.display = "none";
  closeicon.style.display = "block";
}

function closeNavlinks() {
  navbar.className = "container-btns";
  closeicon.style.display = "none";
  barsicon.style.display = "block";
}

/********* Contact Form *************/
function handleFormData() {
  var subject = document.contactForm.subject.value;
  var email = document.contactForm.email.value;
  var message = document.contactForm.message.value;
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (subject == "" || name == null) {
    alert("Subject cannot be empty");
    document.contactForm.subject.focus();
    return false;
  } else if (email == "" || email == null) {
    alert("Please provide your valid email address");
    document.contactForm.email.focus();
    return false;
  } else if (!email.match(mailformat)) {
    alert("You have entered an invalid email address!");
    document.contactForm.email.focus();
    return false;
  } else if (message == "" || message == null) {
    alert("Please write some message");
    document.contactForm.message.focus();
    return false;
  } else if (message.length < 15) {
    alert("Your message should be at least 15 character long");
    return false;
  } else {
    var mailto =
      "mailto:ragenmah99@gmail.com?cc=" +
      email +
      "&subject=" +
      subject +
      "&body=" +
      message;
    window.location.href = mailto;
    alert("Thank You for time...");
  }
}

function openTabcontent(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

// accordion

const accordionItemHeaders = document.querySelectorAll(
  ".accordion-item-header"
);

accordionItemHeaders.forEach((accordionItemHeader) => {
  accordionItemHeader.addEventListener("click", (event) => {
    // Uncomment in case you only want to allow for the display of only one collapsed item at a time!

    const currentlyActiveAccordionItemHeader = document.querySelector(
      ".accordion-item-header.active"
    );
    if (
      currentlyActiveAccordionItemHeader &&
      currentlyActiveAccordionItemHeader !== accordionItemHeader
    ) {
      currentlyActiveAccordionItemHeader.classList.toggle("active");
      currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
    }

    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if (accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    } else {
      accordionItemBody.style.maxHeight = 0;
    }
  });
});

document.getElementById("stats").style.display += "none";

// age calculation
userinput = "1994-11-08";
var dob = new Date("11/06/1994");
var mdate = userinput.toString();
var dobYear = parseInt(mdate.substring(0, 4), 10);
var dobMonth = parseInt(mdate.substring(5, 7), 10);
var dobDate = parseInt(mdate.substring(8, 10), 10);

//get the current date from system
var today = new Date();
//date string after broking
var birthday = new Date(dobYear, dobMonth - 1, dobDate);

//calculate the difference of dates
var diffInMillisecond = today.valueOf() - birthday.valueOf();

//convert the difference in milliseconds and store in day and year variable
var year_age = Math.floor(diffInMillisecond / 31536000000);
var day_age = Math.floor((diffInMillisecond % 31536000000) / 86400000);

var month_age = Math.floor(day_age / 30);
day_age = day_age % 30;

document.getElementById("my-age").innerHTML =
  year_age + " years " + month_age + " months " + day_age + " days";
