function validateForm() {
    var name = document.forms["myForm"]["name"].value;
    var email = document.forms["myForm"]["email"].value;
    var age = document.forms["myForm"]["age"].value;
    var password = document.forms["myForm"]["password"].value;
    var confirmPassword = document.forms["myForm"]["confirmPassword"].value;
    if (name == "" || email == "" || age == "" || password == "" || confirmPassword == "") {
        alert("All fields must be filled out");
        return false;
    }
    if (isNaN(age) || age < 18) {
        alert("Age must be a number and greater than or equal to 18");
        return false;
    }
    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return false;
    }
    alert("Logged in successfully");
    return true;
}
