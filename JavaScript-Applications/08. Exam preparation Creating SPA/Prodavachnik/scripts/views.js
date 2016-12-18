function showView(viewName) {
    $('main > section').hide();
    $('#' + viewName).show();
}

//Shows when logged or not logged menu links
function showHideMenuLinks() {
    $('#linkHome').show();
    
    if(sessionStorage.getItem('authToken')){
        $('#linkLogin').hide();
        $('#linkRegister').hide();
        $('#linkListAds').show();
        $('#linkCreateAd').show();
        $('#linkLogout').show();
    } else {
        $('#linkLogin').show();
        $('#linkRegister').show();
        $('#linkListAds').hide();
        $('#linkCreateAd').hide();
        $('#linkLogout').hide();
    }
}

function showHomeView() {
    showView('viewHome');
}

function showLoginView() {
    showView('viewLogin');
    $('#formLogin').trigger('reset');
}

function showRegisterView() {
    showView('viewRegister');
    $('#formRegister').trigger('reset');
}

function showCreateAd() {
    showView('viewCreateAd');
    $('#formCreateAd').trigger('reset');
}