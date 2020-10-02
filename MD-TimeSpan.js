module.exports = class TimeSpan {
    Hour = 0;
    Minute = 0;
    Second = 0;

    constructor(hour, minute, second) {
        this.Hour = hour;
        this.Minute = minute;
        this.Second = second;
    }

    setHour = (hour) => {
        this.Hour = hour;
    }

    setMinute = (minute) => {
        this.Minute = minute;
    }

    setSecond = (second) => {
        this.Second = second;
    }

    setSpan = (date1, date2) => {
        const diff = (date2.getTime() - date1.getTime());
        this.setHour(Math.trunc(diff / 1000 / 60 / 60));
        this.setMinute(Math.trunc(diff / 1000 / 60) - (this.Hour * 60));
        this.setSecond(Math.trunc(diff / 1000) - (this.Minute * 60) - (this.Hour * 3600));
    }

    toString = () =>
        this.Hour + ' : ' + this.Minute + ' : ' + this.Second;

    toShortString = () =>
        this.Hour + ' : ' + this.Minute;
}