function bugTracker() {
    let id = 0; // initialising id, bugs and print
    let bugs = [];
    let print = undefined;

    function report(author, description, reproducible, severity) { // report func
        let newReport = {
            ID: id++,
            author: author,
            description: description,
            reproducible: reproducible,
            severity: severity,
            status: 'Open'
        };
        bugs.push(newReport); // pushing
        sort();
    }

    function setStatus(id, newStatus) { // status func
        bugs.filter(x => x.ID == id)[0].status = newStatus;
        sort();
    }

    function remove(id) { // remove func
        bugs = bugs.filter(x => x.ID != id);
        sort();
    }

    function sort(method = 'ID') { // sort func
        switch (method) {
            case 'ID': // sort by ID
                bugs = bugs.sort((a, b) => a.ID - b.ID);
                break;
            case 'author': // sort by Author
                bugs = bugs.sort((a, b) => a.author.toString().localeCompare(b.author.toString()));
                break;
            default: // severity
                bugs = bugs.sort((a, b) => a.severity - b.severity)
        }
        updateScreen();
    }

    function output(selector) { // output func
        print = selector;
    }

    function updateScreen() { // updating the screen
        if (print) {
            let parent = $(print);
            parent.text('');

            for (let bug of bugs) {
                let html = formatBug(bug);
                parent.append(html);
            }
        }
    }

    function formatBug(bug) { // formating the bugs func
        return $('<div>')
            .attr('id', 'report_' + bug.ID)
            .addClass('report')
            .append($('<div>')
                .addClass('body')
                .append($('<p>')
                    .text(bug.description)))
            .append($('<div>')
                .addClass('title')
                .append($('<span>')
                    .addClass('author')
                    .text('Submitted by: ' + bug.author))
                .append($('<span>')
                    .addClass('status')
                    .text(bug.status + ' | ' + bug.severity)));
    }
    return {report, setStatus, remove, sort, output}; // returning the bugs
}