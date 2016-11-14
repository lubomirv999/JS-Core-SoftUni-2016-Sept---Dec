function cookingByNumbers(input) {

    let number = Number(input[0]);

    for (let i = 1; i < input.length; i++) {
        if(input[i] == 'chop'){
            number = number / 2;
            console.log(number);
        }
        if(input[i] == 'dice'){
            number = Math.sqrt(number);
            console.log(number);
        }
        if(input[i] == 'spice'){
            number = number + 1;
            console.log(number);
        }
        if(input[i] == 'bake'){
            number = number * 3;
            console.log(number);
        }
        if(input[i] == 'fillet'){
            number = number * 0.8;
            console.log(number);
        }
    }
}
