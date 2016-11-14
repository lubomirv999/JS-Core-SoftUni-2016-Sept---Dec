function gToR([grads]) {
    grads = Number(grads);
    grads = grads % 400;

    if (grads < 0){
        grads += 400;
    }

    let degrees = grads * 0.9;

    console.log(degrees);
}
