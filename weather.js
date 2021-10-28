// Danny Beaudoin
// 9 October 2021
// Objects and Arrays for the weather application


// The following objects are used to populate all weather tables throughout the project
// Using the following naming conventions The application is able to distinguish 
// between the different cities, and days of the week
const mondayWeatherKingston =
{
    day: "monday",
    temperature: "17",
    wind: "16 NE",
    low: "14",
    high: "17",
    hoursOfSun: "0",
    totalRain: "10mm",
    location: "kingston",
    hrsOfSun: "3",
};

const tuesdayWeatherKingston =
{
    day: "tuesday",
    temperature: "19",
    wind: "16 N",
    low: "13",
    high: "19",
    hoursOfSun: "1",
    totalRain: "0mm",
    location: "kingston",
    hrsOfSun: "1",
};

const wednesdayWeatherKingston =
{
    day: "wednesday",
    temperature: "20",
    wind: "16 NE",
    low: "13",
    high: "19",
    hoursOfSun: "3",
    totalRain: "0mm",
    location: "kingston",
    hrsOfSun: "2",
};

const thursdayWeatherKingston =
{
    day: "thursday",
    temperature: "20",
    wind: "14 E",
    low: "15",
    high: "21",
    hoursOfSun: "7",
    totalRain: "0mm",
    location: "kingston",
    hrsOfSun: "6",
};

const fridayWeatherKingston =
{
    day: "friday",
    temperature: "20",
    wind: "15 NE",
    low: "15",
    high: "22",
    hoursOfSun: "2",
    totalRain: "10mm",
    location: "kingston",
    hrsOfSun: "3",
};

const saturdayWeatherKingston =
{
    day: "saturday",
    temperature: "20",
    wind: "23 SW",
    low: "15",
    high: "21",
    hoursOfSun: "1",
    totalRain: "5mm",
    location: "kingston",
    hrsOfSun: "3",
};

const sundayWeatherKingston =
{
    day: "sunday",
    temperature: "18",
    wind: "15 S",
    low: "14",
    high: "21",
    hoursOfSun: "0",
    totalRain: "15mm",
    location: "kingston",
    hrsOfSun: "0",
};

const mondayWeatherOttawa =
{
    day: "monday",
    temperature: "15",
    wind: "18 E",
    low: "11",
    high: "15",
    hoursOfSun: "0",
    totalRain: "20mm",
    location: "ottawa",
    hrsOfSun: "9",
};

const tuesdayWeatherOttawa =
{
    day: "tuesday",
    temperature: "22",
    wind: "26 E",
    low: "10",
    high: "25",
    hoursOfSun: "1",
    totalRain: "2mm",
    location: "ottawa",
    hrsOfSun: "4",
};

const wednesdayWeatherOttawa =
{
    day: "wednesday",
    temperature: "20",
    wind: "16 NE",
    low: "13",
    high: "19",
    hoursOfSun: "3",
    totalRain: "0mm",
    location: "ottawa",
    hrsOfSun: "5",
};

const thursdayWeatherOttawa =
{
    day: "thursday",
    temperature: "20",
    wind: "14 E",
    low: "15",
    high: "21",
    hoursOfSun: "7",
    totalRain: "0mm",
    location: "ottawa",
    hrsOfSun: "8",
};

const fridayWeatherOttawa =
{
    day: "friday",
    temperature: "20",
    wind: "15 NE",
    low: "15",
    high: "22",
    hoursOfSun: "2",
    totalRain: "10mm",
    location: "ottawa",
    hrsOfSun: "4",
};

const saturdayWeatherOttawa =
{
    day: "saturday",
    temperature: "20",
    wind: "23 SW",
    low: "15",
    high: "21",
    hoursOfSun: "1",
    totalRain: "5mm",
    location: "ottawa",
    hrsOfSun: "12",
};

const sundayWeatherOttawa =
{
    day: "sunday",
    temperature: "18",
    wind: "15 S",
    low: "14",
    high: "21",
    hoursOfSun: "0",
    totalRain: "15mm",
    location: "ottawa",
    hrsOfSun: "1",
};

const mondayWeatherToronto =
{
    day: "monday",
    temperature: "21",
    wind: "14 S",
    low: "15",
    high: "24",
    hoursOfSun: "1",
    totalRain: "5mm",
    location: "toronto",
    hrsOfSun: "9",
};

const tuesdayWeatherToronto =
{
    day: "tuesday",
    temperature: "19",
    wind: "16 N",
    low: "13",
    high: "19",
    hoursOfSun: "1",
    totalRain: "0mm",
    location: "toronto",
    hrsOfSun: "7",
};

const wednesdayWeatherToronto =
{
    day: "wednesday",
    temperature: "20",
    wind: "16 NE",
    low: "13",
    high: "19",
    hoursOfSun: "3",
    totalRain: "0mm",
    location: "toronto",
    hrsOfSun: "2",
};

const thursdayWeatherToronto =
{
    day: "thursday",
    temperature: "20",
    wind: "14 E",
    low: "15",
    high: "21",
    hoursOfSun: "7",
    totalRain: "0mm",
    location: "toronto",
    hrsOfSun: "4",
};

const fridayWeatherToronto =
{
    day: "friday",
    temperature: "20",
    wind: "15 NE",
    low: "15",
    high: "22",
    hoursOfSun: "2",
    totalRain: "10mm",
    location: "toronto",
    hrsOfSun: "3",
};

const saturdayWeatherToronto =
{
    day: "saturday",
    temperature: "20",
    wind: "23 SW",
    low: "15",
    high: "21",
    hoursOfSun: "1",
    totalRain: "5mm",
    location: "toronto",
    hrsOfSun: "5",
};

const sundayWeatherToronto =
{
    day: "sunday",
    temperature: "18",
    wind: "15 S",
    low: "14",
    high: "21",
    hoursOfSun: "0",
    totalRain: "15mm",
    location: "toronto",
    hrsOfSun: "6",
};

// This object helps to populate the weeklyWeather Object
const weeklyWeather = {};

// Creating members for the weeklyWeather object, 
// effectively linking each of the former objects to weeklyWeather

// Kingston's object members
weeklyWeather.mondayWeatherKingston = mondayWeatherKingston;
weeklyWeather.tuesdayWeatherKingston = tuesdayWeatherKingston;
weeklyWeather.wednesdayWeatherKingston = wednesdayWeatherKingston;
weeklyWeather.thursdayWeatherKingston = thursdayWeatherKingston;
weeklyWeather.fridayWeatherKingston = fridayWeatherKingston;
weeklyWeather.saturdayWeatherKingston = saturdayWeatherKingston;
weeklyWeather.sundayWeatherKingston = sundayWeatherKingston;

// Ottawa's object members
weeklyWeather.mondayWeatherOttawa = mondayWeatherOttawa;
weeklyWeather.tuesdayWeatherOttawa = tuesdayWeatherOttawa;
weeklyWeather.wednesdayWeatherOttawa = wednesdayWeatherOttawa;
weeklyWeather.thursdayWeatherOttawa = thursdayWeatherOttawa;
weeklyWeather.fridayWeatherOttawa = fridayWeatherOttawa;
weeklyWeather.saturdayWeatherOttawa = saturdayWeatherOttawa;
weeklyWeather.sundayWeatherOttawa = sundayWeatherOttawa;

// Totonto's object members
weeklyWeather.mondayWeatherToronto = mondayWeatherToronto;
weeklyWeather.tuesdayWeatherToronto = tuesdayWeatherToronto;
weeklyWeather.wednesdayWeatherToronto = wednesdayWeatherToronto;
weeklyWeather.thursdayWeatherToronto = thursdayWeatherToronto;
weeklyWeather.fridayWeatherToronto = fridayWeatherToronto;
weeklyWeather.saturdayWeatherToronto = saturdayWeatherToronto;
weeklyWeather.sundayWeatherToronto = sundayWeatherToronto;

// This object creates arrays for each day of the week (members)
// The arrays contain the original daily objects to be accessed when the user
// seaches by city and day
const dailyWeather = {
    monday: [mondayWeatherKingston, mondayWeatherOttawa, mondayWeatherToronto],
    tuesday: [tuesdayWeatherKingston, tuesdayWeatherOttawa, tuesdayWeatherToronto],
    wednesday: [wednesdayWeatherKingston, wednesdayWeatherOttawa, wednesdayWeatherToronto],
    thursday: [thursdayWeatherKingston, thursdayWeatherOttawa, thursdayWeatherToronto],
    friday: [fridayWeatherKingston, fridayWeatherOttawa, fridayWeatherToronto],
    saturday: [saturdayWeatherKingston, saturdayWeatherOttawa, saturdayWeatherToronto],
    sunday: [sundayWeatherKingston, sundayWeatherOttawa, sundayWeatherToronto]
}

// Creates an object with each member being an array that displays either the daily
// weather or weekly weather by grabbing all indexes of an array, or you can grab
// each member and all indexes of each member to obtain the weather for all locations
// and all days
const weatherByCity = {
    kingston: [
        mondayWeatherKingston, tuesdayWeatherKingston, wednesdayWeatherKingston, thursdayWeatherKingston,
        fridayWeatherKingston, saturdayWeatherKingston, sundayWeatherKingston
    ],
    ottawa: [mondayWeatherOttawa, tuesdayWeatherOttawa, wednesdayWeatherOttawa, thursdayWeatherOttawa,
        fridayWeatherOttawa, saturdayWeatherOttawa, sundayWeatherOttawa
    ],
    toronto: [mondayWeatherToronto, tuesdayWeatherToronto, wednesdayWeatherToronto, thursdayWeatherToronto,
        fridayWeatherToronto, saturdayWeatherToronto, sundayWeatherToronto
    ],
}

// Creates a master object which allows you to access all objects through this one
const masterWeather = {
    dailyWeather: dailyWeather,
    weeklyWeather: weeklyWeather,
    weatherByCity: weatherByCity,
}

// Allows the masterWeather Obj to be inmported into another file (server.js)
module.exports = masterWeather;