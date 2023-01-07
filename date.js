//this is a Node module made by me, to practice the functionality of node module exports 

exports.getDate = function() { //this can also be "module.exports"
    let today = new Date(); //creates a variable that calls on the local system's date 
    let options = { //determines the options for a function that will be called later on 
        year: "numeric",
        weekday: "long",
        day: "numeric",
        month: "long"
    }
    let day = today.toLocaleDateString("es-mx", options) //calls a function that assigns a string to the date of today, usin the defined options 
    return day
}

exports.getDay = function() {
    let today = new Date(); //creates a variable that calls on the local system's date 
    let options = { //determines the options for a function that will be called later on 
        weekday: "long",
    }
    let day = today.toLocaleDateString("es-mx", options) //calls a function that assigns a string to the date of today, usin the defined options 
    return day   
}