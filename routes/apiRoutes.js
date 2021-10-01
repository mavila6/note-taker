// variables importing the node modules
const router = require("express").Router();
const fs = require("fs");
const UUID = require("uuid");
// route to get the existing notes from db.json file and display them on the site
router.get("/api/notes", (req, res) => {
    // uses fs module to read db.json
    fs.readFile("./db/db.json", "UTF8", (err, data) => {
        // parses the data from db.json
        const notes = JSON.parse(data);
        res.send(notes);
        // catches errors and diplays on console
        if (err) {
            throw err;
        };
    });
});
// route to post the user notes and save them to db.json
router.post("/api/notes", (req, res) => {
    // generates unique id for each of the new notes
    req.body.id = UUID.v1();
    // uses fs module to read db.json
    fs.readFile("./db/db.json", "UTF8", (err, data) => {
        // parses the data from db.json
        const notes = JSON.parse(data);
        notes.push(req.body);
        // catches errors and diplays on console
        if (err) {
            throw err;
        };
        // uses file system module to write the new notes in the db.json file
        fs.writeFile("./db/db.json", JSON.stringify(notes), (err) => {
            res.json(req.body);
            // catches errors and diplays on console
            if (err) {
                throw err;
            }
        });
    });
});
// route to delete the selected notes using the dynamically generated id
router.delete("/api/notes/:id", (req, res) => {
    // uses fs module to read db.json
    fs.readFile("./db/db.json", "UTF8", (err, data) => {
        // parses the data from db.json this time in a let variable to be re-declared
        let notes = JSON.parse(data);
        notes = notes.filter(note => note.id !== req.params.id);
        fs.writeFile("./db/db.json", JSON.stringify(notes), (err) => {
            res.json("Successfully Deleted Note!");
            // catches errors and diplays on console
            if (err) {
                throw err;
            }
        });
    });
});
// exports the router
module.exports = router;