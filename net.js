function myFunction(toggle) {
  toggle.classList.toggle("change");
}

function toogleSlideMenu(toggle) {
  if (toggle.classList.contains("change")) {
    document.getElementById("mySidenav").style.width = "15%";
    document.getElementById("main").style.marginLeft = "230px";
  } else {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.width = "100%";
    document.getElementById("main").style.marginLeft = "0";
  }
}

/* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}
