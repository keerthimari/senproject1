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
// side panel bacgroundcolor
function highlightItem(itemId) {
    var items = document.querySelectorAll('.nav-item');
    items.forEach(function(item) {
        if (item.id === itemId) {
            item.style.backgroundColor = "rgb(80, 81, 249)";
            item.style.borderRadius = "5px";
            item.style.margin = "5px"
        } else {
            item.style.backgroundColor = ""; // Remove background color
            item.style.borderRadius = "";
            item.style.margin = "";
        }
    });
}


// Dropdown function
function toggleDropdown() {
    var checkbox = document.getElementById("toggleCheckbox");
    var dropdown = document.getElementById("myDropdown");
    var button = document.querySelector(".dropbtn");

    if (checkbox.checked) {
        dropdown.classList.remove("d-none");
        button.classList.add("show");
    } else {
        dropdown.classList.add("d-none");
        button.classList.remove("show");
    }
}

//   function toggleDropdown() {
//     var dropdown = document.getElementById("myDropdown");
//     dropdown.classList.toggle("show");
// }

// window.onclick = function(event) {
//     var dropdown = document.getElementById("myDropdown");
//     if (!event.target.matches('.dropbtn') && !event.target.matches('#toggleCheckbox')) {
//         dropdown.classList.remove('show');
//     }
// }

function toggleDropdown() {
    var checkbox = document.getElementById("toggleCheckbox");
    var dropdown = document.getElementById("myDropdown");
    var button = document.querySelector(".dropbtn");

    if (checkbox.checked) {
        dropdown.classList.add("show");
        button.style.display = "block";
    } else {
        dropdown.classList.remove("show");
        button.style.display = "none";
    }
}

window.onclick = function(event) {
    var dropdown = document.getElementById("myDropdown");
    if (!event.target.matches('.dropbtn')) {
        dropdown.classList.remove('d-none');
    }
}

  
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

// expand button after click the auditlog




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


// Search Icon

const searchIcon = document.querySelector(".search-icon");
const closeSearchIcon  = document.querySelector(".close-search-icon");

searchIcon.addEventListener("click", (e) => {
   document.querySelector(".popup").style.flex = "3.5";
   document.querySelector(".popup").style.display = "block";
   document.querySelector(".page-count-container").style.width = "63.35%";
})

closeSearchIcon.addEventListener("click", (e) => {
   document.querySelector(".popup").style.display = "none";
   document.querySelector(".page-count-container").style.width = "100%";
})
