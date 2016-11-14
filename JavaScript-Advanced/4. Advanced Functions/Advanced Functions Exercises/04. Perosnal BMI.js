function personalBMI(name, age, weight, height) {
    let result = ''; // holds the result

    let obj = { // making the object that holds everything
        name: name,
        personalInfo: {age: age, weight: weight, height: height},
        BMI: (() => {
            let meters = height / 100;
            return result = Math.round(weight / (meters * meters))
        })(),
        status: (() => { // check if the person is underweight, normal, overweight or obese
            if (result < 18.5) { return 'underweight';
            } else if (result < 25) { return 'normal';
            } else if (result < 30) { return 'overweight';
            } else { return 'obese'; }
        })()
    };

    if (obj.status === 'obese') {
        obj['recommendation'] = 'admission required';
    }

    return obj;
}