function capitalizeTheWords(input) {
    let text = input[0].split(' ').map(ch=>ch.substring(0, 1).toUpperCase() + ch.substring(1, ch.length).toLowerCase()).join(' ');
    console.log(text);
}
