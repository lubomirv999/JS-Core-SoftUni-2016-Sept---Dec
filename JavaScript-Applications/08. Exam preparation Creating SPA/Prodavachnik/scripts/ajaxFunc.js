function listAds() {
    $('#ads').empty();
    showView('viewAds');
    
    $.ajax({
        method: "GET",
        url: kinveyBaseUrl + "appdata/" + kinveyAppKey + "/advertisements",
        headers: getKinveyUserAuthHeaders(),
        success: loadAdsSuccess,
        error: handleAjaxError
    });

    function loadAdsSuccess(advertisements) {
        showInfo('Advertisements loaded.');
        
        if (advertisements.length == 0) {
            $('#ads').text('No advertisements available.');
        } else {
            let table = $(`
                <table>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Publisher</th>
                        <th>Price</th>
                        <th>Date Published</th>
                        <th>Actions</th>
                    </tr>
                </table>`);
            
            for (let advertisement of advertisements) {
                let tr = $('<tr>');
                displayTableRow(tr, advertisement);
                tr.appendTo(table);
            }
            
            $('#ads').append(table);

            function displayTableRow(tr, advertisement) {
                let detailLink = $(`<a data-id="${advertisement._id}" href="#">[Read more]</a>`)
                    .click(function () {displayAdvert($(this).attr("data-id"))});
                let links = [detailLink];
                
                if (advertisement._acl.creator == sessionStorage.getItem('userId')) {
                    let deleteLink = $(`<a data-id="${advertisement._id}" href="#">[Delete]</a>`)
                        .click(function () {deleteAdById($(this).attr("data-id"))});
                    let editLink = $(`<a data-id="${advertisement._id}" href="#">[Edit]</a>`)
                        .click(function () {loadAdForEdit($(this).attr("data-id"))});
                    
                    links.push(deleteLink);
                    links.push(" ");
                    links.push(editLink);
                }
                
                tr.append(
                    $('<td>').text(advertisement.title),
                    $('<td>').text(advertisement.description),
                    $('<td>').text(advertisement.publisher),
                    $('<td>').text(advertisement.price),
                    $('<td>').text(advertisement.date),
                    $('<td>').append(links)
                );
            }
        }
    }
}

function createAd() {
    let adData = {
        title: $('#formCreateAd input[name=title]').val(),
        publisher: sessionStorage.getItem('username'),
        description: $('#formCreateAd textarea[name=description]').val(),
        date: $('#formCreateAd input[name=datePublished]').val(),
        price: $('#formCreateAd input[name=price]').val(),
        image: $('#formCreateAd input[name=image]').val()
    };
    
    $.ajax({
        method: "POST",
        url: kinveyBaseUrl + "appdata/" + kinveyAppKey + "/advertisements",
        headers: getKinveyUserAuthHeaders(),
        data: adData,
        success: createAdSuccess,
        error: handleAjaxError
    });

    function createAdSuccess() {
        listAds();
        showInfo("Advertisement created.");
    }
}

function editAd() {
    let adData = {
        title: $('#formEditAd input[name=title]').val(),
        description: $('#formEditAd textarea[name=description]').val(),
        publisher: sessionStorage.getItem('username'),
        date: $('#formEditAd input[name=datePublished]').val(),
        price: $('#formEditAd input[name=price]').val(),
        image: $('#formEditAd input[name=image]').val()
    };
    
    $.ajax({
        method: "PUT",
        url: kinveyBaseUrl + "appdata/" + kinveyAppKey + "/advertisements/"+
        $('#formEditAd input[name=id]').val(),
        headers: getKinveyUserAuthHeaders(),
        data: adData,
        success: createAdSuccess,
        error: handleAjaxError
    });

    function createAdSuccess() {
        listAds();
        showInfo("Advertisement edited.");
    }
}

function deleteAdById(advertisementId) {
    $.ajax({
        method: "DELETE",
        url: kinveyBaseUrl + "appdata/" + kinveyAppKey + "/advertisements/" + advertisementId,
        headers: getKinveyUserAuthHeaders(),
        success: deleteAdSuccess,
        error: handleAjaxError
    });
    
    function deleteAdSuccess() {
        listAds();
        showInfo("Ad deleted.");
    }
}

function loadAdForEdit(advertisementId) {
    $.ajax({
        method: "GET",
        url: kinveyBaseUrl + "appdata/" + kinveyAppKey + "/advertisements/" + advertisementId,
        headers: getKinveyUserAuthHeaders(),
        success: loadAdForEditSuccess,
        error: handleAjaxError
    });

    function loadAdForEditSuccess(advertisement) {
        $('#formEditAd input[name=id]').val(advertisement._id);
        $('#formEditAd input[name=publisher]').val(advertisement.publisher);
        $('#formEditAd input[name=title]').val(advertisement.title);
        $('#formEditAd input[name=description]').val(advertisement.description);
        $('#formEditAd input[name=datePublished]').val(advertisement.date);
        $('#formEditAd input[name=price]').val(advertisement.price);
        $('#formEditAd input[name=image]').val(advertisement.image);
        
        showView('viewEditAd');
    }
}

function displayAdvert(advertId) {
    $.ajax({
        method: "GET",
        url: kinveyBaseUrl + "appdata/" + kinveyAppKey + "/advertisements/" + advertId,
        headers: getKinveyUserAuthHeaders(),
        success: displayAdvertSuccess,
        error: handleAjaxError
    });

    function displayAdvertSuccess(advert) {
        $('#viewDetailsAd').empty();
        let html = $('<div>');
        
        html.append(
            $('<img>').attr('src', advert.image),
            $('<br>'),
            $('<label>').text("Price:"),
            $('<h1>').text(advert.price),
            $('<label>').text("Title:"),
            $('<h1>').text(advert.title),
            $('<label>').text("Description:"),
            $('<p>').text(advert.description),
            $('<label>').text("Publisher:"),
            $('<div>').text(advert.publisher),
            $('<label>').text("Date:"),
            $('<div>').text(advert.date)
        )
        
        html.appendTo($('#viewDetailsAd'));
        showView('viewDetailsAd');
    }
}