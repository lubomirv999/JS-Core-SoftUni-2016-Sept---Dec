function townsToJSON(input) {
    let firstRow = input[0].split(' ').join('').split('|').filter(Boolean);
    let town = firstRow[0];
    let latitude = firstRow[1];
    let length = firstRow[2];

    let output = '[';
    let result;
    for (let i = 1; i < input.length; i++) {
        let curent = input[i].split('|').filter(Boolean);
        let currentTown = curent[0].trim(); 
        let currentLatitude = Number(curent[1]);
        let curentLongtitude = Number(curent[2]);

        result = '{"Town":"' + currentTown + '","Latitude":' + currentLatitude + ',"Longitude":' + curentLongtitude + '}';

        if (i == input.length - 1) {
            output += result;
        }
        else {
            output += result + ",";
        }
    }
    console.log(output + "]");
}