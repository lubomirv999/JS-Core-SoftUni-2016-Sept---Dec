(function vectorMath() {
    return {
        add: (firstEl, secondEl) => {
            let result = [];
            result[0] = Number(firstEl[0]) + Number(secondEl[0]);
            result[1] = Number(firstEl[1]) + Number(secondEl[1]);
            return result
        },
        multiply: (firstEl, power) => {
            let result = [];
            result[0] = Number(firstEl[0]) * Number(power);
            result[1] = Number(firstEl[1]) * Number(power);
            return result;
        },
        length: (firstEl) => {
            let result = Math.sqrt(Math.pow(firstEl[0], 2) + Math.pow(firstEl[1], 2));
            return result;
        },
        dot: (firstEl, secondEl) => {
            let result = firstEl[0] * secondEl[0] + firstEl[1] * secondEl[1];
            return result;
        },
        cross: (firstEl, secondEl) => {
            let result = firstEl[0] * secondEl[1] - firstEl[1] * secondEl[0];
            return result;
        }
    };
})()
