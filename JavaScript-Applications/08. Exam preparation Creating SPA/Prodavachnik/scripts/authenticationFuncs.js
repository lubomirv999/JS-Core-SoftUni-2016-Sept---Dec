const kinveyBaseUrl = "https://baas.kinvey.com/";
const kinveyAppKey = "kid_BJWdEjuzx";
const kinveyAppSecret = "9371816e46b049d09618fa0d55c0b1a9";
const kinveyAppAuthHeaders = {'Authorization': "Basic " + btoa(kinveyAppKey + ":" + kinveyAppSecret) };

function getKinveyUserAuthHeaders() {
    return { "Authorization": "Kinvey " + sessionStorage.getItem("authToken") }
}

function loginUser(event) {
    event.preventDefault();
    
    let userData = {
        username: $('#formLogin input[name=username]').val(),
        password: $('#formLogin input[name=passwd]').val()
    };
    
    $.ajax({
        method: "POST",
        url: kinveyBaseUrl + "user/" + kinveyAppKey + "/login",
        headers: kinveyAppAuthHeaders,
        data: userData,
        success: loginUserSuccess,
        error: handleAjaxError
    });

    function loginUserSuccess(userInfo) {
        saveAuthInSession(userInfo);
        showHideMenuLinks();
        listAds();
        showInfo('Login successful');
    }
}

function registerUser(event) {
    event.preventDefault();
    
    let userData = {
        username: $('#formRegister input[name=username]').val(),
        password: $('#formRegister input[name=passwd]').val()
    };
    
    $.ajax({
        method: "POST",
        url: kinveyBaseUrl + "user/" + kinveyAppKey + "/",
        headers: kinveyAppAuthHeaders,
        data: userData,
        success: registerUserSuccess,
        error: handleAjaxError
    });

    function registerUserSuccess(userInfo) {
        saveAuthInSession(userInfo);
        showHideMenuLinks();
        listAds();
        showInfo('Registration successful');
    }
}

function logoutUser() {
    sessionStorage.clear();
    $('#loggedInUser').text('');
    
    showHideMenuLinks();
    showView("viewHome");
    showInfo("Logout successful");
}

function saveAuthInSession(userInfo) {
    sessionStorage.setItem('username', userInfo.username);
    sessionStorage.setItem('authToken', userInfo._kmd.authtoken);
    sessionStorage.setItem('userId', userInfo._id);
    
    $('#loggedInUser').text('Welcome, ' + userInfo.username);
}