var pass=document.getElementById("inp").value
var AdminUser2021 = "AdminUser2021"
function lognow()
{
    if (pass=AdminUser2021)
    {
        console.log("correct password");
        window.location="done.html";
    }
    else
    {
        document.getElementById("hh3").innerHTML="plz correct password";
        console.log("incorrect password");
    }
}