function radioCrystals(input) {
    let desireThickness = Number(input[0]);

    for (let i = 1; i < input.length; i++) {
        let startingThikness = Number(input[i]);
        let counter = 0;
        console.log('Processing chunk ' + startingThikness + ' microns');

        while (startingThikness / 4 >= desireThickness) {
            startingThikness /= 4;
            counter++;
        }
        if (counter != 0) {
            console.log('Cut x' + counter);
            console.log('Transporting and washing');
            if (startingThikness == desireThickness) {
                console.log('Finished crystal ' + startingThikness + ' microns');
            }
            counter = 0;
        }
        startingThikness = Math.floor(startingThikness);

        while (startingThikness * 0.8 >= desireThickness) {
            startingThikness *= 0.8;
            counter++;
        }
        if (counter != 0) {
            console.log('Lap x' + counter);
            console.log('Transporting and washing');
            if (startingThikness == desireThickness) {
                console.log('Finished crystal ' + startingThikness + ' microns');
            }
            counter = 0;
            startingThikness = Math.floor(startingThikness);
        }

        while (startingThikness - 20 >= desireThickness) {
            startingThikness -= 20;
            counter++;
        }
        if (counter != 0) {
            console.log('Grind x' + counter);
            console.log('Transporting and washing');

            if (startingThikness == desireThickness) {
                console.log('Finished crystal ' + startingThikness + ' microns');
                break
            }
            counter = 0;
            startingThikness = Math.floor(startingThikness);
        }

        while (startingThikness -1 >= desireThickness) {
            startingThikness -= 2;
            counter++;
        }
        if (counter != 0) {
            console.log('Etch x' + counter);
            console.log('Transporting and washing');
            if (startingThikness == desireThickness) {
                console.log('Finished crystal ' + startingThikness + ' microns');
                break
            }
            counter = 0;
        }
        startingThikness = Math.floor(startingThikness);

        if (startingThikness + 1 == desireThickness) {
            console.log('X-ray x1');
            console.log('Finished crystal ' + Number(startingThikness + 1) + ' microns');
        }
    }
}