document.getElementById("Heading").innerHTML="Student Information Sheet";
document.getElementById("Personal_Info").innerHTML="Personal Info";
document.getElementById("Contact_Information").innerHTML="Contact_Information";
document.getElementById("Academic_Information").innerHTML="Academic_Information";

function validationForm(){
    var form = document.forms["Form"]["FirstName"].value;

if(x==""){
    alert("Name must be filled out");
    return false;
}
}