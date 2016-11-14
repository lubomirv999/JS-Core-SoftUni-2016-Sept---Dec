function domSearch(selector, type) {
    let mainDiv = $(selector);
    mainDiv.attr('class', 'items-control');

    let firstDiv = $('<div class="add-controls"></div>');
    let firstLabel = $('<label>Enter text: </label>');
    let input = $('<input>');
    let a = $('<a class="button" style="display: inline-block">Add</a>');

    firstLabel.append(input);
    firstDiv.append(firstLabel);
    firstDiv.append(a);
    mainDiv.append(firstDiv);

    let secondDiv = $('<div class="search-controls">');
    let secondLabel = $('<label>Search:</label>');
    secondLabel.on('input', function () {
        search()
    });

    let secondInput = $('<input>');

    secondLabel.append(secondInput);
    secondDiv.append(secondLabel);
    mainDiv.append(secondDiv);

    let thirdDiv = $('<div class="result-controls"></div>');
    let ul = $('<ul class="items-list"></ul>');
    thirdDiv.append(ul);
    mainDiv.append(thirdDiv);

    a.on('click', function () {
        let textValue = input.val();
        let li = $('<li class="list-item"></li>');
        let del = $('<a class="button">X</a>');
        del.click({li: li}, deleteItem);

        let strong = $('<strong></strong>');
        strong.text(textValue);

        li.append(del);
        li.append(strong);
        ul.append(li);
        search();
    });

    function deleteItem(event) {
        event.data.li.remove();
        search();
    }

    function search() {
        let searchVal;

        if (type) {
            searchVal = secondInput.val()
        } else {
            searchVal = secondInput.val().toLowerCase()
        }

        let allLi = $('.items-list li').each((index, item)=> {

            if (type) {
                if (item.textContent.substr(1).indexOf(searchVal) !== -1) {
                    $(item).css('display', '')
                } else {
                    $(item).css('display', 'none')
                }
            } else {
                if (item.textContent.substr(1).toLowerCase().indexOf(searchVal) !== -1) {
                    $(item).css('display', '')
                } else {
                    $(item).css('display', 'none')
                }
            }
        })
    }
}