function handleAjaxError(response) {
    let errorMsg = JSON.stringify(response);
    
    if (response.readyState === 0)
        errorMsg = "Cannot connect due to network error.";
    
    if (response.responseJSON && response.responseJSON.description)
        errorMsg = response.responseJSON.description;
    
    showError(errorMsg);
}

function showError(errorMsg) {
    $('#errorBox').text("Error: " + errorMsg);
    $('#errorBox').show();
}

function showInfo(message) {
    $('#infoBox').text(message);
    $('#infoBox').show();
    
    setTimeout(function () {
        $('#infoBox').fadeOut();
    }, 3000);
}