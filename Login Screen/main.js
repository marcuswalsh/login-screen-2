//Checks for login
document.getElementById('login-button').addEventListener('click', verifyLogin);

function verifyLogin() {
    //Gets credentials
    let username = document.getElementById('username-input').value;
    let password = document.getElementById('password-input').value;
    //Checks credentials
    if(username=="A" && password=="B"){
        alert("Login successful");
    } else {
        if(username!="A"){
            alert("Wrong Username");
        }
        if(password!="B"){
            alert("Wrong password");
        }
    }
}