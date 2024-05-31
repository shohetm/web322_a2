/********************************************************************************
* WEB322 – Assignment 02
* 
* I declare that this assignment is my own work in accordance with Seneca's
* Academic Integrity Policy:
* 
* https://www.senecacollege.ca/about/policies/academic-integrity-policy.html
* 
* Name: Mike Shohet Student ID: 146462197 Date: 05-31-2024
*
* Published URL: ___________________________________________________________
*
********************************************************************************/

const legoData = require('./modules/legoSets');



const express = require('express')
const app = express()
const port = 3000

app.get("/", (req, res) => res.send("Assignment 2: Mike Shohet - 146462197"));

app.get("/lego/sets", async (req, res) => {
    try {
        const allSets = await legoData.getAllSets();
        res.json(allSets); // Send the sets as a JSON response
      } catch (error) {
        res.status(500).send(error); // Send error message with 500 status code
      }
});

app.get("/lego/sets/num-demo", async (req,res) => {
    try {
        const numSets = await legoData.getSetByNum("063-1");
        res.json(numSets);
    }catch (error) {
        res.status(500).send(error);
    }
});

app.get("/lego/sets/theme-demo", async (req,res) => {
    try {
        const themeSets = await legoData.getSetsByTheme("Supplemental");
        res.json(themeSets);
    }catch(error){
        res.status(500).send(error);
    }
});

//legoData.Initialize(); 

app.listen(port, () => console.log(`App listening on port ${port}!`))

