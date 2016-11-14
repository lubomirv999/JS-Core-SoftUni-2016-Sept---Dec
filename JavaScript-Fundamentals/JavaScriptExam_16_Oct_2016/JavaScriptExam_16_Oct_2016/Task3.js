function arithmephile(input) {
    let result = input.map(Number);
    let n = 0;
    let resultArr = [];
    let mult = 1;

    for (let i = 0; i < result.length; i++) {
        if (result[i] >= 0 && result[i] < 10) {
            n = result[i];

            for (let j = i+1; j <= Math.min(i + n, result.length); j++) {
                mult *= result[j]
            }

            resultArr += mult + " ";
            mult = 1;
        }
    }
    resultArr = resultArr.split(" ").filter(w=>w!='');

    function sortNumber(a, b) {
        a = Number(a);
        b = Number(b);
        return b - a;
    }

    resultArr.sort(sortNumber)
    console.log(resultArr[0])
}

