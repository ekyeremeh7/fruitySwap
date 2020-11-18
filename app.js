const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

// MEMBERS INFO
const founderInfo = "Osei Eric Owiredu is the Founder and Executive Director of Reliance Charity Foundation. He is a man who transforms houses into homes through the Gospel of Christ.Campus Director for Hult Foundation / United Nations program for tertiary students. He believes in the dreams and potentials of every child and youth and feeds parent on the truth about parenting for a glorious community building. Eric is a Christian, advisor, teacher, life coach, community developer, philanthropist and a research assistant in El-parah Consult Limited. He is currently a student of Accra Technical University pursuing Marketing and Management Studies. Eric is versatile, deligent, humble, highly committed to his work and aims to restore the hope of the vulnerable, make life better for others and eradicate poverty in Africa.";

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static("public"));

app.get("/", function(req, res) {
    res.render("home", {
        founderContent: founderInfo,
      
    });
});




let port = process.env.PORT;
if (port == null || port == "") {
    port = 3000;
}

app.listen(port, function() {
    console.log("Server is running on Port 3000");
});