// variables used to require express router and path 
const router = require('express').Router();
const path = require('path');
// get method route to define the home page route
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});
// get method defines the notes route
router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});
// exports the router
module.exports = router;