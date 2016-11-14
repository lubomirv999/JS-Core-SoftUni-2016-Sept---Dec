function roadRadar(input) {
    let speed = Number(input[0]);
    let area = String(input[1]);

    if (area == 'motorway'){
        let motorwaySpeed = 130;
        if (speed > motorwaySpeed){
            if (speed <= motorwaySpeed + 20) {
                console.log('speeding');
            }
            if (speed > motorwaySpeed + 20 && speed <= motorwaySpeed + 40) {
                console.log('excessive speeding');
            }
            if (speed > motorwaySpeed + 40) {
                console.log('reckless driving');
            }
        }
    } else if (area == 'residential'){
        let residentialSpeed = 20;
        if (speed > residentialSpeed){
            if (speed <= residentialSpeed + 20) {
                console.log('speeding');
            }
            if (speed > residentialSpeed + 20 && speed <= residentialSpeed + 40) {
                console.log('excessive speeding');
            }
            if (speed > residentialSpeed + 40) {
                console.log('reckless driving');
            }
        }
    } else if (area == 'city'){
        let citySpeed = 50;
        if (speed > citySpeed){
            if (speed <= citySpeed + 20) {
                console.log('speeding');
            }
            if (speed > citySpeed + 20 && speed <= citySpeed + 40) {
                console.log('excessive speeding');
            }
            if (speed > citySpeed + 40) {
                console.log('reckless driving');
            }
        }
    } else if (area == 'interstate'){
        let interstateSpeed = 90;
        if (speed > interstateSpeed){
            if (speed <= interstateSpeed + 20) {
                console.log('speeding');
            }
            if (speed > interstateSpeed + 20 && speed <= interstateSpeed + 40) {
                console.log('excessive speeding');
            }
            if (speed > interstateSpeed + 40) {
                console.log('reckless driving');
            }
        }
    }
}
