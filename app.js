const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date");

const app = express();

let items = [];
let schoolList = [];

app.set("view engine", "ejs"); //calls EJS for a viewer 
app.use(express.static("public")); //calls the folder to use the CSS file for styling 
app.use(bodyParser.urlencoded({extended: true})); //calls the bodyparser module to use for the form

app.get("/", function(req, res) {    
    let day = date.getDate(); //calls an exported function from the module assigned to "date"
    res.render("list", {listTitle: "Pendientes del " + day, listOfThings:items}); //renders the template site using the specified format 
})

app.get("/school", function(req, res) {
    res.render("list", {listTitle: "Escuela", listOfThings:schoolList}); //renders the template site using changes to the dynamic elements, which correspond to the new path  
})

app.post("/", function(req, res) {
    console.log(req.body)
    let item = req.body.newItem;
    if (req.body.button === "Escuela") {
        schoolList.push(item);
        res.redirect("/school");
    } else {
        items.push(item);
        res.redirect("/");
    }
})

app.listen(3000, function(req, res) {
    console.log("Your server is running on port 3000.")
})