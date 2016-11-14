class TimeSpan{
    constructor(hours, minutes, seconds){
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds + 60 * minutes + 60 * 60 * hours;
    }

    get hours(){
        return this._hours;
    }
    set hours(val){
        if(!Number.isInteger(val)){
            throw new RangeError('RangeError: Invalid hours: ' + val);
        }

        this._hours = val;
    }

    get minutes(){
        return this._minutes;
    }
    set minutes(val){
        if(!Number.isInteger(val)){
            throw new RangeError('RangeError: Invalid minutes: ' + val);
        }

        this._minutes = val;
    }

    get seconds(){
        return this._seconds;
    }
    set seconds(val){
        if(!Number.isInteger(val)){
            throw new RangeError('RangeError: Invalid seconds: ' + val);
        }

        this._seconds = val;
    }

    toString(){
        let seconds = this._seconds % 60;
        let minutes = Math.trunc(this._seconds / 60) % 60;
        let hours = Math.trunc(this._seconds / (60 * 60));
        seconds = ("0" + seconds).slice(-2);
        minutes = ("0" + minutes).slice(-2);

        return `${hours}:${minutes}:${seconds}`;
    }
}