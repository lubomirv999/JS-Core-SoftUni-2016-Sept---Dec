function attachEvents() {
    $('#btnDelete').click(deleteTowns);

    function deleteTowns() {
        let searchBox = $('#townName');
        let needle = searchBox.val();
        searchBox.val('');

        let towns = $('#towns').find('option');

        let match = false;
        for (let town of towns) {
            if ($(town).val() == needle) {
                town.remove();
                match = true;
            }
        }

        if (match) {
            $('#result').text(needle + ' deleted.');
        } else {
            $('#result').text(needle + ' not found.');
        }
    }
}


// <!DOCTYPE html>
// <html>
// <head>
// <title>Delete Town by Name</title>
// <style>select, input { width: 100px }</style>
// <script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
//     </head>
//     <body onload="attachEvents()">
//     <div>Towns</div>
//     <select id="towns" size="4">
//     <option>Sofia</option>
//     <option>Varna</option>
//     <option>Pleven</option>
//     </select>
//     <div>
//     <input type="text" id="townName" />
//     <button id="btnDelete">Delete</button>
//     </div>
//     <div id="result"></div>
//     <script>
//     function attachEvents() {
//         $('#btnDelete').click( function () {
//             let town = $('#townName').val();
//             $('#townName').val('');
//             let found = false;
//             for (let t of $('#towns option')) {
//                 if (t.textContent == town) {
//                     found = true;
//                     t.remove();
//                 }
//             }
//             if(found){
//                 $('#result').text(town + ' deleted.');
//             }else{
//                 $('#result').text(town + ' not found.');
//             }
//         });
//     }
//     </script>
//     </body>
//     </html>