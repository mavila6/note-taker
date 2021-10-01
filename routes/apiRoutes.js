const router = require("express").Router();
const fs = require("fs");
const UUID = require("uuid");

router.get("/api/notes", (req, res) => {
    fs.readFile("./db/db.json", "UTF8", (err, data) => {
        const notes = JSON.parse(data);
        res.send(notes);
        if (err) {
            throw err;
        };
    });
});

router.post("/api/notes", (req, res) => {
    req.body.id = UUID.v1();
    fs.readFile("./db/db.json", "UTF8", (err, data) => {
        const notes = JSON.parse(data);
        notes.push(req.body);
        if (err) {
            throw err;
        };
        fs.writeFile("./db/db.json", JSON.stringify(notes), (err) => {
            res.json(req.body);
            if (err) {
                throw err;
            }
        });
    });
});

router.delete("/api/notes/:id", (req, res) => {
    fs.readFile("./db/db.json", "UTF8", (err, data) => {
        let notes = JSON.parse(data);
        notes = notes.filter(note => note.id !== req.params.id);
        fs.writeFile("./db/db.json", JSON.stringify(notes), (err) => {
            res.json("Successfully Deleted Note!");
            if (err) {
                throw err;
            }
        });
    });
});

module.exports = router;