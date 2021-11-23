var username = document.getElementById("Username");
var password1 = document.getElementById("Password1");

function test(callback) {
    if (username.value == "admin" && password1.value == "12345") {
        alert("Authorized Login Successful");
        //    alert("hi");
        callback();
    } else if (username.value == "admin" && password1.value != "12345") {
        alert("Incorrect Password");
    } else if (username.value != "admin" && password1.value == "12345") {
        alert("User Not Registered");
    } else {
        alert("Incorrect UserID and Password");
    }
}

function myFunction() {
    //  window.location.href = "https://smithatom78.github.io/samp1/mern-case/welcome.html"
    window.location.href = "\welcome.html";
    //window.location.href = "https://smithatom78.github.io/samp1/mern-case/welcome.html";

}