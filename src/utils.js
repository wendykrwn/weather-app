export const iconWeather = {
    ni: "/no-image-icon.png",
    sn : "/Snow.png",
    sl : "/Sleet.png",
    h : "/Hail.png",
    t : "/Thunderstorm.png",
    hr: "/HeavyRain.png",
    lr : "/LightRain.png",
    s : "/Shower.png",
    hc : "/HeavyCloud.png",
    lc : "/LightCloud.png",
    c : "/Clear.png"
}

export const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
]

export const days = [
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
    "Sun"
]


const digitFormat = (digit,n) => {
    let zero = "";
    for(let i = 0; i < n - 1; i++){
        zero += "0";
    }
    return (zero + digit).slice(-n);
}

export const dateToString = (date) => {
    const dateDay = new Date(date);
    const dayOfWeek = days[dateDay.getDay()];
    const day = dateDay.getDate();
    const month = months[dateDay.getMonth()];

    return `${dayOfWeek}, ${day} ${month}`;
}

export const dateFormat = (date) => {
    const dateValid = new RegExp('[0-9]{4}-[0-9]{2}-[0-9]{2}');
    if(!dateValid.test(date)){
        return date;
    }
    const [year,month,day] = date.split("-");
    const dateDay = new Date(year,parseInt(month,10) - 1,parseInt(day));
    const today = new Date();
    const todayWithoutTime = new Date(today.getFullYear(),today.getMonth(),today.getDate());

    if(todayWithoutTime.getTime() === dateDay.getTime() ){
        return "Today";
    }
    if(todayWithoutTime.getTime() + 24 * 3600 * 1000  === dateDay.getTime() ){
        return "Tomorrow";
    }

    return dateToString(date);
}