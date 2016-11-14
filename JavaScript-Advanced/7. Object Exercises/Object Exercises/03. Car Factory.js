function carRequirement(requirements) {
    let carFactory = (function () {
        let engineTypes = {
            90: {power: 90, volume: 1800},
            120: {power: 120, volume: 2400},
            200: {power: 200, volume: 3500}
        };

        let typeCar = {
            hatchback: {type: 'hatchback', color: ''},
            coupe: {type: 'coupe', color: ''}
        };

        function chooseEngine(power) {
            return engineTypes[Object.keys(engineTypes).filter(x => x >= power)[0]];
        }

        function chooseTypeCar(type, color) {
            let carriage = typeCar[type];
            carriage.color = color;
            
            return carriage;
        }

        function chooseWheels(size) {
            if (size % 2 == 0) 
                size--;

            let wheels = [];
            for (let i = 0; i < 4; i++) {
                wheels.push(size)
            }

            return wheels;
        }

        function produceCar(requirements) {
            let finishedCar = {};
            finishedCar.model = requirements.model;
            finishedCar.engine = chooseEngine(requirements.power);
            finishedCar.carriage = chooseTypeCar(requirements.carriage, requirements.color);
            finishedCar.wheels = chooseWheels(requirements.wheelsize);

            return finishedCar;
        }

        return {produceCar};
    })();

    return carFactory.produceCar(requirements);
}