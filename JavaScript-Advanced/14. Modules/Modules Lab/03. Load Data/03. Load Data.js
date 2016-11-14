let data = require('./data');

function sort(property) { // sort func
    return data
        .sort((a, b) => a[property].localeCompare(b[property]));
}

function filter(property, value) { // filter func
    return data
        .filter(el => el[property] === value);
}

module.exports = {sort, filter};