function attachEvents() {
    const hostUrl = 'https://phonebook-nakov.firebaseio.com/phonebook';
    let phoneBook = $('#phonebook');

    $('#btnLoad').click(loadNumbers);
    $('#btnCreate').click(addNewNumber);

    function loadNumbers() {
        $.ajax({
            method: 'GET',
            url: hostUrl + '.json',
            success: renderPhoneNumbers
        });
    }

    function renderPhoneNumbers(data) {
        phoneBook.empty();
        let keys = Object.keys(data);

        for (let key of keys) {
            let number = data[key];
            let li = $('<li>')
                .text(`${number.person}: ${number.phone} `)
                .append($('<button>')
                    .text('[Delete]')
                    .on('click', () => deleteEntry(key)));

            $('#phonebook').append(li);
        }
    }

    function deleteEntry(id) {
        $.ajax({
            method: 'DELETE',
            url: hostUrl + '/' + id + '.json',
            success: loadNumbers
        })
    }

    function addNewNumber() {
        let person = $('#person').val().trim();
        let phone = $('#phone').val().trim();

        if (person != '' && phone != '') {
            $.ajax({
                method: 'POST',
                data: JSON.stringify({
                    person, phone
                }),
                url: hostUrl + '.json',
                success: function () {
                    $('#person').val('');
                    $('#phone').val('');

                    loadNumbers();
                }
            })
        }
    }
}