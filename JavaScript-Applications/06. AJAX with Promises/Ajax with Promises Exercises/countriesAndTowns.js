function attachEvents() {
    const baseUrl = "https://baas.kinvey.com/appdata/kid_r1ZVKxUGx/";
    const base64Auth = btoa("guest:guest");

    loadCountries();

    $('#btnAddCountry').click(addCountry); // Executing the functions

    $('#btnEditCountry').click(editCountry);

    $('#btnDeleteCountry').click(deleteCountry);

    $('#addCountry').click(function () {
        $('.add:first').fadeIn();
    });

    $('#addTown').click(function () {
        $('.add:last').fadeIn();
    });

    $('#btnAddTown').click(addTown);

    $('#btnListTowns').click(loadTowns);

    $('#btnEditTown').click(editTown);

    $('#btnDeleteTown').click(deleteTown);

    function addCountry() { // add country func
        let countryName = $('#newCountry').val();

        if(! $('#countries option').toArray().some(c => $(c).text() == countryName)){
            let request = {
                method: "POST",
                url: baseUrl + "country",
                headers: {
                    "Authorization": "Basic " + base64Auth,
                    "Content-type": "application/json"
                },
                data: JSON.stringify({
                    name: countryName
                })
            };

            $.ajax(request)
                .then(function(){
                    $('.add:first').fadeOut();
                    loadCountries();
                    $('#newCountry').val('');
                });

        } else {
            $('#errorDiv').text("Country already in the list.");
            $('#errorDiv').fadeIn();

            $('.add:first').fadeOut();
            setTimeout(function () {
                $('#errorDiv').fadeOut()
            }, 3000);

            $('#newCountry').val('');
        }
    }

    function addTown() { // add town func
        let countryName = $('#newTownCountry').val();
        let townName = $('#newTown').val();

        if($('#countries option').toArray().some(x => $(x).text() == countryName)){
            let request = {
                method: "POST",
                url: baseUrl + "town",
                headers: {
                    "Authorization": "Basic " + base64Auth,
                    "Content-type": "application/json"
                },
                data: JSON.stringify({
                    name: townName,
                    country: countryName
                })
            };

            $.ajax(request)
                .then(function(){
                    loadTowns();
                    $('.add:last').fadeOut();
                    $('#newTown').val('');
                    $('#newTownCountry').val('');
                }).catch(displayError);
        } else {
            $('#errorDiv').text("Country does not exist in the list.");
            $('#errorDiv').fadeIn();
            $('.add:last').fadeOut();

            setTimeout(function () {
                $('#errorDiv').fadeOut()
            }, 3000);

            $('#newTown').val('');
            $('#newTownCountry').val('');
        }
    }

    function loadCountries() { // load countries func
        let request = {
            method: "GET",
            url: baseUrl + "country",
            headers: {
                "Authorization": "Basic " + base64Auth
            }
        };

        $.ajax(request)
            .then(displayCountries)
            .catch(displayError);
    }

    function displayCountries(countries) { // display countries func
        $('#countries').empty();

        for(let country of countries){
            $('#countries')
                .append($('<option>').val(country._id).text(country.name));
        }
    }


    function loadTowns() { // load towns func
        let country = $('#countries option:selected').text();

        let request = {
            method: "GET",
            url: baseUrl + "town",
            headers: {
                "Authorization": "Basic " + base64Auth
            }
        };

        $.ajax(request)
            .then(function (towns) {
                $('#towns').empty();
                towns = towns.filter(t => t.country == country);

                for(let town of towns){
                    $('#towns')
                        .append($('<option>').val(town._id).text(town.name));
                }
            }).catch(displayError);
    }

    function editCountry() { // edit country func
        let countryToEdit = $('#countries option:selected').val();

        $('#inputEditCountry').val($('#countries option:selected').text());
        $('#editCountry').fadeIn();

        $('#editCoun').click(function () {
            let request = {
                method: "PUT",
                url: baseUrl + "country/" + countryToEdit,
                headers: {
                    "Authorization": "Basic " + base64Auth,
                    "Content-type": "application/json"
                },
                data: JSON.stringify({
                    name: $('#inputEditCountry').val()
                })
            };

            $.ajax(request)
                .then(function () {
                    loadCountries();
                    $('#inputEditCountry').val('');
                    $('#editCountry').fadeOut();
                }).catch(displayError);
        })
    }

    function editTown() { // edit town func
        let townToEdit = $('#towns option:selected').val();

        $('#inputEditTownName').val($('#towns option:selected').text());
        $('#inputEditTownCountry').val('');
        $('#editTown').fadeIn();

        $('#editTownn').click(function () {
            let request = {
                method: "PUT",
                url: baseUrl + "town/" + townToEdit,
                headers: {
                    "Authorization": "Basic " + base64Auth,
                    "Content-type": "application/json"
                },
                data: JSON.stringify({
                    name: $('#inputEditTownName').val(),
                    country: $('#inputEditTownCountry').val()
                })
            };

            $.ajax(request)
                .then(function () {
                    loadTowns();
                    $('#inputEditTownName').val('');
                    $('#inputEditTownCountry').val('');
                    $('#editTown').fadeOut();
                });
        })
    }

    function deleteCountry() { // delete country func
        let countryToDelete = $('#countries option:selected').val();

        let request = {
            method: "DELETE",
            url: baseUrl + "country/" + countryToDelete,
            headers: {
                "Authorization": "Basic " + base64Auth
            }
        };

        $.ajax(request)
            .then(loadCountries)
            .catch(displayError)
    }

    function deleteTown() { // delete town func
        let townToDelete = $('#towns option:selected').val();

        let deleteRequest = {
            method: "DELETE",
            url: baseUrl + "town/" + townToDelete,
            headers: {
                "Authorization": "Basic " + base64Auth
            }
        };

        $.ajax(deleteRequest)
            .then(loadTowns)
            .catch(displayError);
    }

    function displayError(error){ // dispaly error func
        console.log(error);
    }
}