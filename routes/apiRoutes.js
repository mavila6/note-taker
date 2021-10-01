const router = require("express").Router();
const fs = require("fs");

router.get("/api/notes", (req, res) => {
    fs.readFile("./db/db.json", "UTF8", (err, data) => {
        const notes = JSON.parse(data);
        res.send(notes);
        // console.log(data);
        if (err) {
            throw err;
        };
    });
});

// router.post("", (req, res) => {

// });

// router.delete("", (req, res) => {

// });

module.exports = router;