function attachEvents() {
    const url = 'https://baas.kinvey.com/appdata/kid_SJo3fInbe';
    const user = "peter";
    const password = "1";
    const authorisation = btoa(user + ":" + password);
    const authHeaders = {"Authorization": "Basic " + authorisation};

    $('#btnLoadPosts').click(loadAllPosts);
    $('#btnViewPost').click(viewPost);

    function displayPosts(data) {
        let allPosts = $('#posts');
        for (let opt of data) {
            let option = $('<option>').val(opt._id).text(opt.title);
            allPosts.append(option)
        }
    }

    function displayError(error) {
        $('#post-body').text('Error ' + error.status +" " + error.statusText)
    }

    function loadAllPosts() {
        let request = {
            method:"GET",
            url:url + '/posts',
            headers:authHeaders
        };

        $.ajax(request)
            .then(displayPosts)
            .catch(displayError)
    }

    function displayPostWithComments([post, comments]) {
        $("#post-title").text(post.title);
        $("#post-body").text(post.body);

        for (let comment of comments) {
            let li = $('<li>').text(comment.text);
            $('#post-comments').append(li);
        }
    }

    function viewPost() {
        let id = $("option:selected").val();

        let request = {
            method:"GET",
            url:url + '/posts/' + id,
            headers:authHeaders
        };

        let post = $.ajax(request);
        
        let requestComment = $.ajax({
            method:"GET",
            url:url + `/comments/?query={"post_id":"${id}"}`,
            headers:authHeaders
        });

        $.ajax(requestComment);

        Promise.all([post, requestComment])
            .then(displayPostWithComments)
            .catch(displayError);
    }
}