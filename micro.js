var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})

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


$(document).ready(function(){
$( "#all_extension" ).click(function() {
    $( "#homeContent" ).hide();
    $("#all_content").show();

  });
})

// ("body").on("click", "#all_extension",function(){
//     $("#all_content").removeClass("d-none")
// })