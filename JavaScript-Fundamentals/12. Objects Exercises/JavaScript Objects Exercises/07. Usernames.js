function usernames(input) {
    let userNames = new Set;

    for (let name of input) {
        userNames.add(name);
    }

    function nameComparator(nameA, nameB) {
        if (nameA.length < nameB.length) {
            return -1;
        }
        if (nameA.length > nameB.length) {
            return 1;
        }

        return nameA.localeCompare(nameB);
    }
    console.log([...userNames].sort(nameComparator).join('\n'));
}