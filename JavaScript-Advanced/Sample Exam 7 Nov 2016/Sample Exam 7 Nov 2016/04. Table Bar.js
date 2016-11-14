function tableBuilder(selector) {
    let table = $('<table>');

    function createTable(columnNames) {
        let row = $('<tr>');
        for (let col of columnNames) {
            row.append($('<th>').text(col));
        }

        row.append($('<th>').text('Action'));
        row.appendTo(table);
        attachTable();
    }

    function fillData(dataRows) {
        for (let dataRow of dataRows) {
            let row = $('<tr>');
            for (let col of dataRow) {
                row.append($('<td>').text(col));
            }

            row.append($('<td>')
                .append($('<button>')
                    .text('Delete')
                    .click((event) => $(event.target).parent().parent().remove())));

            row.appendTo(table);
        }
    }

    function attachTable() {
        let selectorElement = $(selector);
        selectorElement.empty();
        selectorElement.append(table);
    }

    return {
        createTable,
        fillData
    }
}



// function tableBuilder(selector) {
//     return {
//         createTable: function(colNames) {
//             let table = $("<table>");
//             let headerRow = $("<tr>");
//             headerRow.appendTo(table);
//             for (let colName of colNames)
//                 headerRow.append($("<th>").text(colName));
//             headerRow.append($("<th>Action</th>"));
//             $(selector).empty();
//             $(selector).append(table);
//         },
//         fillData: function(dataRows) {
//             for (let dataRow of dataRows) {
//                 let row = $("<tr>");
//                 for (let cellData of dataRow)
//                     row.append($("<td>").text(cellData));
//                 let delButton = $("<button>Delete</button>");
//                 delButton.click(function() {
//                     $(this).parent().parent().remove();
//                 });
//                 row.append($("<td>").append(delButton));
//                 row.appendTo($(selector + ' table'));
//             }
//         }
//     }
// }