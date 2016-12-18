function attachEvents() {
    const kinveyKey = "kid_BJ_Ke8hZg";
    const kinveyUrl= "https://baas.kinvey.com/";
    const username = "guest";
    const password = "pass";
    const base64auth = btoa(username+":"+password);
    const authHeader = {"Authorization" : "Basic " + base64auth};
    const contentType = "application/json";

    $('#getVenues').on('click', loadVenues);

    let venuesInfo = $('#venue-info');

    function loadVenues() {
        let venueDate = $('#venueDate').val();
		
        let requestUrl = kinveyUrl + "rpc/" + kinveyKey + "/custom/calendar?query="+ venueDate;
        let postRequest = {
            method: "POST",
            url: requestUrl,
            headers: authHeader,
        };
        $.ajax(postRequest).then(getVenues).catch(displayError);
    }
    function getVenues(venueIds) {
        for (let venueId of venueIds) {
            let getRequest = {
                method: "GET",
                url: kinveyUrl + "appdata/" + kinveyKey + "/venues/" + venueId,
                headers: authHeader
            };
            $.ajax(getRequest).then(displayVenue).catch(displayError);
        }
    }
    function displayVenue(data) {
        $('#venue-info')
            .append($('<div>').addClass("venue").attr('id', data._id)
                .append($('<span>').addClass("venue-name").text(data.name)
                    .append($('<input>').addClass("info").attr("type", "button").val("More info").click(showInfo)))
                .append($('<div>').addClass("venue-details").css("display", "none")
                    .append($('<table>')
                        .append($('<tr>')
                            .append($('<th>').text("Ticket Price"))
                            .append($('<th>').text("Quantity"))
                            .append($('<th>')))
                        .append($('<tr>')
                            .append($('<td>').addClass("venue-price").text(`${data.price} lv`))
                            .append($('<td>')
                                .append($('<select>').addClass("quantity")
                                    .append($('<option>').val("1").text("1"))
                                    .append($('<option>').val("2").text("2"))
                                    .append($('<option>').val("3").text("3"))
                                    .append($('<option>').val("4").text("4"))
                                    .append($('<option>').val("5").text("5"))))
                            .append($('<td>')
                                .append($('<input>').addClass("purchase").attr("type", "button").val("Purchase").click(purchase)))))
                    .append($('<span>').addClass("head").text("Venue description:"))
                    .append($('<p>').addClass("description").text(data.description))
                    .append($('<p>').addClass("description").text(`Starting time: ${data.startingHour}`))
                )
            );
    }
	function showInfo() {
        $('.venue-details').hide();
        $(this).parent().parent().find('.venue-details').show();
    }
	function purchase() {
        let id = $(this).parent().parent().parent().parent().parent().attr('id');
        let name = $(this).parent().parent().parent().parent().parent().find(".venue-name").text();
        let qty = Number($(this).parent().parent().find(".quantity").val());
        let price = Number($(this).parent().parent().find(".venue-price").text().substring(0, $(this).parent().parent().find(".venue-price").text().length-2));

        $('#venue-info').html(
			`<span class="head">Confirm purchase</span>
			<div class="purchase-info">
			  <span>${name}</span>
			  <span>${qty} x ${price}</span>
			  <span>Total: ${qty * price} lv</span>
			  <input type="button" value="Confirm">
			</div>`);

        $('#venue-info input').click(function () {
            let postRequest = {
                method: "POST",
                url: kinveyUrl + "rpc/" + kinveyKey + "/custom/purchase?venue=" + id + "&qty=" + qty,
                headers: {
                    "Authorization": "Basic " + base64auth
                }
            };
            
            $.ajax(postRequest).then(function (data) {
                $('#venue-info').html("You may print this page as your ticket" + data.html);
            })
        })
    }
	
	$
    function displayError(error) {
        console.log(error);
    }
}