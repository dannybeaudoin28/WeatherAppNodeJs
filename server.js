// Danny Beaudoin
// 9 October 2021
// This creates the back-end server and allows backend code to execute


// "Import" all required files and packages
const express = require('express');
const ejs = require('ejs');
const os = require("os");


// Adds the following Objects to the backend of the application
const { weatherByCity, dailyWeather, weeklyWeather } = require('./weather.js');

const app = express();


// Middleware

// Sets the absolute path for the views folder to load static and dynami pages
app.set('views', 'C:/Users/HP_User/OneDrive - St. Lawrence College/CPA Program/Second Year/Semester 1/COMP206/Week 6/weatherApp/public/views');
// sets engine to use ejs
app.set('view engine', 'ejs');


// Start the server listening on port 3000
let server = app.listen(3000, () => {
    //Output the IP Adress and Port #
    console.log("Server has started on port: ", server.address().port)
    let networkInfo = os.networkInterfaces();
    let network = networkInfo['Wi-Fi'];
    network.forEach((item) => {
        if (item.family == 'IPv4')
            console.log("On IP address", item.address)
    })
})

//This route loads the homepage of the application
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/views/home.html")
})

// Allows the user to view weather for all days, and all locations
app.get("/weather/", (req, res) => {
    let result = weatherByCity;
    let data = result;
    res.render("weather.ejs", { data: result });
})

// Allows the user to view the weather for all days of a specific location
app.get("/weather/:location/", (req, res) => {
    let result = weatherByCity;
    let requestedLocation = req.params.location.toLowerCase();
    result = weatherByCity[requestedLocation];
    
    let data = result


    // Sends data to ejs scriptlet to create 7 day forecast table using data from weatherByCity Object
    res.render("weatherLoc.ejs", { data: result });
})

// Finds the sunny days for a given location
app.get("/weather/sunnyDays/location/:location/", (req, res) => {
    let result = weatherByCity;
    let location = req.params.location.toLowerCase();
    let sunnyDays = [];

    // Assigns a value to the day index based on whichever city the user wants to query
    // This value will be used to index the array inside of the dailyWeather object

    if (location == "kingston") {
        dayIndex = 0;
    }
    else if (location == "ottawa") {
        dayIndex = 1;
    }
    else {
        dayIndex = 2;
    }

    for (item in dailyWeather) {
        if (dailyWeather[item][dayIndex].hrsOfSun > 5) {
            // Adds the sunny day to the sunnyDays array to be sent to the result
            sunnyDays.push(dailyWeather[item][dayIndex].day);
        }
    }

    result = "The sunny days \(with 5 or more hours of sun\) for the given location are: \n" + sunnyDays;
    let data = result;
    res.render("sunnyDays.ejs", { data: result });
})


// Finds the warmest day for a given location
app.get("/weather/city/warmestDay/location/:requestedLocation/warmest/", (req, res) => {
    let result = weatherByCity;
    let location = req.params.requestedLocation.toLowerCase();
    let warmestDay = "";
    let warmestTemp = 0;
    let dayIndex = 0;
    let requestedCity = "";

    // Assigns a value to the day index based on whichever city the user wants to query
    // This value will be used to index the array inside of the dailyWeather object
    if(location == "kingston")
    {
        dayIndex = 0;
    }
    else if (location == "ottawa")
    {
        dayIndex = 1;
    }
    else
    {
        dayIndex = 2;
    }

    for (item in dailyWeather)
    {
        if (dailyWeather[item][dayIndex].high > warmestTemp)
        {
            warmestDay = dailyWeather[item][dayIndex].day;
            warmestTemp = dailyWeather[item][dayIndex].high;
        }
    }

    // To be sent to client
    result = warmestDay + " is the warmest day with a high of: " + warmestTemp;

    let data = result;
    res.render("warmestDay.ejs", { data: result });
})

// Finds the warmest location for a given day
app.get("/weather/location/city/:dayOfWeek/warmestLocation/", (req, res) => {
    let result = weatherByCity;
    let newDay = req.params.dayOfWeek.toLowerCase();
    let warmestCity = "";
    let warmestTemp = 0;

    for (item in dailyWeather[newDay])
    {
        if (dailyWeather[newDay][item].high > warmestTemp)
        {
            warmestTemp = dailyWeather[newDay][item].high
            warmestCity = dailyWeather[newDay][item].location
        }
    }
    result = warmestCity + " is the warmest city. With a high of: " + warmestTemp;

    let data = result;

    res.render("warmestLoc.ejs", { data: result });
})

// Find the average weekly temperature for all locations
app.get("/weather/allLocations/avgTemp/", (req, res) => {
    let result = weatherByCity;
    let totalTempKingston = 0;
    let totalTempOttawa = 0;
    let totalTempToronto = 0;
    let avgTempKingston = 0;
    let avgTempOttawa = 0;
    let avgTempToronto = 0;
    let length = 0;

    for (let index = 0; index < 3; index++)
    {
        for (item in dailyWeather)
        {
            if (dailyWeather[item][index].location == "kingston")
            {
                totalTempKingston += parseInt(dailyWeather[item][index].high);
            }
            else if (dailyWeather[item][index].location == "ottawa")
            {
                totalTempOttawa += parseInt(dailyWeather[item][index].high);
            }
            else
            {
                totalTempToronto += parseInt(dailyWeather[item][index].high);
            }
            // Converts the string value to an int to be used to find the average
            
            length++;
        }
    }

    avgTempKingston = totalTempKingston / length;
    avgTempOttawa = totalTempOttawa / length;
    avgTempToronto = totalTempToronto / length;
    result = {kingston: avgTempKingston, ottawa: avgTempOttawa, toronto: avgTempToronto};

    let data = result;
    res.render("avgTemp.ejs", { data: result });
})

// Allows the user to view the weather for a specific day for a specific location
app.get("/weather/:location/:dayOfWeek/", (req, res) => {
    let result = weatherByCity;
    if (req.params.location && req.params.dayOfWeek) {
        let requestedLocation = req.params.location.toLowerCase();
        let newDay = req.params.dayOfWeek.toLowerCase();
        let weatherIndex;

        //assigns a value to the index which will allow us to select the appropriate city after choosing the day
        if (requestedLocation == "kingston")
        {
            weatherIndex = 0;
        }
        else if(requestedLocation == "ottawa")
        {
            weatherIndex = 1;
        }
        else if (requestedLocation == "toronto")
        {
            weatherIndex = 2;
        }
        
        // Searches each member in the dailyWeather Obj to see if it contains the requested 
        // location and sends it back as a result if a match
        for (item in dailyWeather[newDay]) {
            for (let i = 0; i < 1; i++)
            { 
                if (dailyWeather[newDay][item].location == requestedLocation) {
                    result = dailyWeather[newDay][weatherIndex];
                }
            }
            
        }

        // creates a new object to send to the ejs file to be rendered
        let data = result

        // Allows the user to view the weather for a specific day in a specific location
        res.render("weatherLocDay.ejs", { data: result })  
    }
})