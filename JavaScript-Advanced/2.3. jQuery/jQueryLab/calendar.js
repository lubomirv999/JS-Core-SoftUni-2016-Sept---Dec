function calendar([day, month, year]) {
    let date = new Date(year, month , 0);
    let months = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    let tBody = $('<tbody>')
        .append($('<tr>')
            .append($('<th>').text('Mon'))
            .append($('<th>').text('Tue'))
            .append($('<th>').text('Wed'))
            .append($('<th>').text('Thu'))
            .append($('<th>').text('Fri'))
            .append($('<th>').text('Sat'))
            .append($('<th>').text('Sun')));

    let calendar = $('<table>')
        .append($('<caption>').text(months[date.getMonth()] + ' ' + date.getFullYear()))
        .append(tBody);

    let firstDay = (new Date(year, month - 1, 1).getDay() - 1);
    firstDay = firstDay < 0 ? 6 : firstDay;

    let firstWeek = $('<tr>');
    let dayOfMonth = 1;

    for (let i = 0; i < 7; i++) {
        if (i < firstDay) {
            firstWeek.append($('<td>'));
        } else {
            if (dayOfMonth == day) {
                firstWeek.append($('<td>').addClass('today').text(dayOfMonth++));
            } else {
                firstWeek.append($('<td>').text(dayOfMonth++));
            }
        }
    }

    tBody.append(firstWeek);

    let lastDay = new Date(year, month, 0).getDate();
    let numOfRemainingRows = (lastDay + 1 - dayOfMonth) / 7;

    for (let i = 0; i < numOfRemainingRows; i++) {
        let currentWeek = $('<tr>');
        for (let j = 0; j < 7; j++) {
            if (dayOfMonth > lastDay) {
                currentWeek.append($('<td>'));
            } else {
                if (dayOfMonth == day) {
                    currentWeek.append($('<td>').addClass('today').text(dayOfMonth++));
                } else {
                    currentWeek.append($('<td>').text(dayOfMonth++));
                }
            }
        }
        tBody.append(currentWeek);
    }
    $('#content').append(calendar)
}