function populateAccount() {
    const email = JSON.parse(sessionStorage.getItem('email'));
    const fname = JSON.parse(sessionStorage.getItem('firstname'));
    const lname = JSON.parse(sessionStorage.getItem('lastname'));

    document.getElementById('email').innerHTML = email;
    document.getElementById('firstname').innerHTML = fname;
    document.getElementById('lastname').innerHTML = lname;
}