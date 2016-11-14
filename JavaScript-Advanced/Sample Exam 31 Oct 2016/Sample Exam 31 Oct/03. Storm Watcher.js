(function solve() {
    let nextId = 0;

    class Record {
        constructor(temperature, humidity, pressure, windSpeed) {
            this.id = nextId;
            nextId++;
            this.temperature = Number(temperature);
            this.humidity = Number(humidity);
            this.pressure = Number(pressure);
            this.windSpeed = Number(windSpeed);
        }
        toString(){
            let s = '';
            if(this.temperature < 20 &&
                (this.pressure < 700 || this.pressure > 900) &&
                this.windSpeed > 25){
                s = 'Stormy';
            }else{
                s = 'Not stormy';
            }
            let result =
                'Reading ID: ' + this.id + '\nTemperature: ' + this.temperature + '*C\n' +
                'Relative Humidity: ' + this.humidity + '%\n' + 'Pressure: ' + this.pressure + 'hpa\n' +
                'Wind Speed: ' + this.windSpeed + 'm/s\n' + 'Weather: ' + s;

            return result;
        }
    }

    return Record;
})();




// let Record = (function () {
//     let uniqueId = 0;
//
//     return class Record {
//         constructor(temperature, humidity, pressure, windSpeed) {
//             this.id = uniqueId++;
//             this.temperature = temperature;
//             this.humidity = humidity;
//             this.pressure = pressure;
//             this.windSpeed = windSpeed;
//         }
//
//         _calculateWeather() {
//             if (this.temperature < 20 &&
//                 (this.pressure < 700 || this.pressure > 900) &&
//                 this.windSpeed > 25) {
//                 return 'Stormy'
//             }
//
//             return 'Not stormy';
//         }
//
//         toString() {
//             let output = '';
//             output += `Reading ID: ${this.id}\n`;
//             output += `Temperature: ${this.temperature}*C\n`;
//             output += `Relative Humidity: ${this.humidity}%\n`;
//             output += `Pressure: ${this.pressure}hpa\n`;
//             output += `Wind Speed: ${this.windSpeed}m/s\n`;
//             output += `Weather: ${this._calculateWeather()}`;
//
//             return output;
//         }
//     }
// })();