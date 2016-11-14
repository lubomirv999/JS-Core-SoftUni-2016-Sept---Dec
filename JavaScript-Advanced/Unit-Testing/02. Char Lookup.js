function lookupChar(string, index) {
    if (typeof(string) !== 'string' || !Number.isInteger(index)) {
        return "Incorrect Type!";
    }
    if (string.length <= index || index < 0) {
        return "Incorrect Parameters!";
    }

    return string.charAt(index);
}
