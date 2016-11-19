function attachEvents() {
    $('#submit').click(send);
    $('#refresh').click(refresh);

    let hostUrl = "https://messenger-b6747.firebaseio.com/.json";

    function send() {
        let message = {
            author: $('#author').val(),
            content: $('#content').val(),
            timestamp: Date.now()
        };

        $.post(hostUrl, JSON.stringify(message)).then(refresh);
    }

    function refresh() {
        $.get(hostUrl)
            .then((result) => {
                $('#messages').empty();
                let keys = Object.keys(result).sort((m1, m2) => result[m1].timestamp - result[m2].timestamp);

                for (let msg of keys) {
                    $('#messages').append(`${result[msg].author}: ${result[msg].content}\n`)
                }
            });
    }
}