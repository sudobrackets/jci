const APP_TYPE = 1;
const BRANCH = 1;
const AUTHORIZATION = ''
const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];

class Constants {
    static formatDate(input) {
        var datePart = input.match(/\d+/g),
            year = datePart[0],// get only two digits
            month = monthNames[(+datePart[1]) - 1],
            day = datePart[2];

        return day + ' ' + month + ' ' + year;
    }
    static formatAMPM(time) {
        var split = time.split(':');
        var hours = split[0];
        var minutes = split[1];
        var ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = (minutes > 10) ? '0' + minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
    }
}

export default Constants;