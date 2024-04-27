var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})
// side panel
function toggleNav() {
    var sidepanel = document.getElementById("mySidepanel");
    var bodyDiv = document.getElementById("body-div");
    var width = sidepanel.style.width;
    if (width === "200px") {
        sidepanel.style.width = "0";
        bodyDiv.style.marginLeft = "0";
    } else {
        sidepanel.style.width = "200px";
        bodyDiv.style.marginLeft = "200px";
    }
}


// background color function

function openNav() {
    document.body.style.backgroundColor = "rgb(80,81,249);";
}

function openNav(contentId) {
    var contentSections = document.querySelectorAll(".content-section");
    contentSections.forEach(function (section) {
        section.style.display = "none";
    });
    document.getElementById(contentId).style.display = "block";
    var sidepanel = document.getElementById("mySidepanel");
    var bodyDiv = document.getElementById("body-div");
    sidepanel.style.width = "200px";
    bodyDiv.style.marginLeft = "200px";
}

//  for sidepanel dropdown
// function openNav(contentId) {
//     var contentSections = document.querySelectorAll(".content-section");
//     contentSections.forEach(function (section) {
//         section.style.display = "none";
//     });
//     document.getElementById(contentId).style.display = "block";
//     var sidepanel = document.getElementById("mySidepanel");
//     var bodyDiv = document.getElementById("body-div");
//     sidepanel.style.width = "200px";
//     bodyDiv.style.marginLeft = "200px";
// }


// Dropdown function
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


// function toggleNav() {
//     var sidepanel = document.getElementById("mySidepanel");
//     var bodyDiv = document.getElementById("body-div");
//     var buttonIcon = document.querySelector("#button i.fa-solid");

//     if (sidepanel.classList.contains("open")) {
//         sidepanel.classList.remove("open");
//         bodyDiv.classList.remove("open");
//         buttonIcon.classList.remove("fa-angles-right");
//         buttonIcon.classList.add("fa-angles-left");
//     } else {
//         sidepanel.classList.add("open");
//         bodyDiv.classList.add("open");
//         buttonIcon.classList.remove("fa-angles-left");
//         buttonIcon.classList.add("fa-angles-right");
//     }
// }

// button left and right toggle 

function toggleNav() {
    var sidepanel = document.getElementById("mySidepanel");
    var bodyDiv = document.getElementById("body-div");
    var buttonIcon = document.querySelector("#button i.fa-solid");

    if (sidepanel.style.width === "200px") {
        sidepanel.style.width = "0";
        bodyDiv.style.marginLeft = "0";
        buttonIcon.classList.remove("fa-angles-left");
        buttonIcon.classList.add("fa-angles-right");
    } else {
        sidepanel.style.width = "200px";
        bodyDiv.style.marginLeft = "200px";
        buttonIcon.classList.remove("fa-angles-right");
        buttonIcon.classList.add("fa-angles-left");
    }
}

// audit log
$(document).ready(function() {
    $("#audit_log").click(function() {
        $("#homeContent").addClass("d-none"); // Hide the home content
        $("#audit").removeClass("d-none");
        $("#all_content").addClass("d-none"); // Show the all extension content
    });
});




// all extension

$(document).ready(function() {
    $("#all_extension").click(function() {
        $("#homeContent").addClass("d-none"); // Hide the home content
        $("#all_content").removeClass("d-none");
         $("#audit").addClass("d-none"); // Show the all extension content
    });
});
