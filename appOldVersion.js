const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs")

app.get("/", function(req, res) {
    var today = new Date();
    var currentDayNumber = today.getDay();
    var day = "";

    switch (currentDayNumber) {
        case 0:
            day = "Sunday"
            break;
        case 1:
            day = "Monday"
            break;
        case 2:
            day = "Tuesday"
            break;
        case 3:
            day = "Wednesday"
            break;
        case 4:
            day = "Thursday"
            break;
        case 5:
            day = "Friday"
            break;
        case 6:
            day = "Saturday"
            break;
        default:
            day = "day"
            break;
    }

    res.render("list", {nameOfDay: day});
    res.send();
})

app.listen(3000, function(req, res) {
    console.log("Your server is running on port 3000.")
})