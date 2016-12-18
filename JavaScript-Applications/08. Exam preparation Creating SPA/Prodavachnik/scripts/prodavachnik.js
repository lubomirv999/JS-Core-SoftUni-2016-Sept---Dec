function startApp() {
    sessionStorage.clear();
    showHideMenuLinks();
    showView('viewHome');

    //Bind the navigation menu links
    $('#linkHome').click(showHomeView);
    $('#linkLogin').click(showLoginView);
    $('#linkRegister').click(showRegisterView);
    $('#linkListAds').click(listAds);
    $('#linkCreateAd').click(showCreateAd);
    $('#linkLogout').click(logoutUser);

    //Bind the submit form buttons
    $('#formLogin').submit(loginUser);
    $('#formRegister').submit(registerUser);
    $("#buttonCreateAd").click(createAd);
    $("#buttonEditAd").click(editAd);

    $("#infoBox, #errorBox").click(function () {
        $(this).fadeOut();
    });
    
    //Loading event listener
    $(document).on({
        ajaxStart: function() { $('#loadingBox').show() },
        ajaxStop: function() { $('#loadingBox').hide() }
    });
}