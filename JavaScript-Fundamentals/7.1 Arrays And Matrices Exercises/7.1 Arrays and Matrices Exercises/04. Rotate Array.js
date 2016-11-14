function rotateArr(input) {
    let rot = Number(input.pop());
    rot %= input.length;

    for(let i=0; i < rot; i++) {
        input.unshift(input.pop());
    }
    console.log(input.join(' '));
}

