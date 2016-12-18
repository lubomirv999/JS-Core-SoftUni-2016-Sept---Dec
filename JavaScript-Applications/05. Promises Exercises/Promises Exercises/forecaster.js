function attachEvents() {
    const url = 'https://judgetests.firebaseio.com';
    const weather = $('#forecast');
    const todayWeather = $('#current');
    const upcomingWeather = $('#upcoming');

    $('#submit').on('click', locationCode);

    function locationCode() {
        let locationName = $('#location').val().trim();
        
        if (locationName !== '') {
            $.get({
                url: url + '/locations.json'
            })
                .then(function (data) {
                    let locationCode = data.filter(e => e.name === locationName)[0].code;
                    if (locationCode) {
                        locationReport(locationCode);
                    }
                })
                .catch(error);
        }
    }

    function locationReport(code) {
        let currentConditions = $.get({
            url: url + '/forecast/today/' + code + '.json'
        });

        let threeDaysConditions = $.get({
            url: url + '/forecast/upcoming/' + code + '.json'
        });

        Promise.all([currentConditions, threeDaysConditions])
            .then(conditions)
            .catch(error);
    }

    function conditions([today, threeDays]) {
        weather.show();
        renderTodayWeather(today);
        renderThreeDaysWeather(threeDays);
    }

    function renderTodayWeather(data) {
        todayWeather.find('.label').nextAll().remove();
        todayWeather
            .append($('<span>')
                .addClass('condition symbol')
                .html(getWeatherIcon(data.forecast.condition)))
            .append($('<span>')
                .addClass('condition')
                .append($('<span>')
                    .addClass('forecast-data')
                    .text(data.name))
                .append($('<span>')
                    .addClass('forecast-data')
                    .html(`${data.forecast.low}&#176;/${data.forecast.high}&#176;`))
                .append($('<span>')
                    .addClass('forecast-data')
                    .text(data.forecast.condition)));
    }

    function renderThreeDaysWeather(data) {
        upcomingWeather.find('.label').nextAll().remove();

        for (let condition of data.forecast) {
            appendWeather(upcomingWeather, condition);
        }
    }

    function appendWeather(container, stats) {
        container
            .append($('<span>')
                .addClass('upcomming')
                .append($('<span>')
                    .addClass('symbol')
                    .html(getWeatherIcon(stats.condition)))
                .append($('<span>')
                    .addClass('forecast-data')
                    .html(`${stats.low}&#176;/${stats.high}&#176;`))
                .append($('<span>')
                    .addClass('forecast-data')
                    .text(stats.condition))
            );
    }

    function getWeatherIcon(condition) {
        return {
            'Sunny': '&#x2600;',
            'Partly sunny': '&#x26C5;',
            'Overcast': '&#x2601;',
            'Rain': '&#x2614;'
        }[condition];
    }

    function error() {
        weather.show();
        weather.text('Error');
    }
}