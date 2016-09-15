// Get jquery objects from DOM
var srchbtn = $("#srchbtn");
var pageheader = $("#page-header");
var pagecontainer = $("#page-container");
var text= $("#myinputText")
var pagecontainer= $("#headone");

refreshbtn.on("click", function () {
    // GET INPUT
    alert("You clicked the button"); //can demo with sweetAlert plugin
});

// Manipulate the DOM
function changeUI() {
    //Show detected images
    pageheader.html("Your images are: ...");

    //Display image search button
    srchbtn.css("display", "inline");

    //Remove offset at the top
    pagecontainer.css("marginTop", "20px");
};
