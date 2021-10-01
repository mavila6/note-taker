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
        }
        fs.writeFile("./db/db.json", JSON.stringify(notes), (err) => {
            res.json(req.body);
            if (err) {
                throw err;
            }
        });
    });
});

// router.delete("", (req, res) => {

// });

module.exports = router;