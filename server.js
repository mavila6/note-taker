// requires express 
const express = require("express");
// variable that allows us to call on express in the following code
const app = express();
// variable to represent the port for the server
const PORT = process.env.PORT || 3001;

// Middleware to parse incoming data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// start the server on the specified port
app.listen(PORT, () => {
    console.log(`App is now listening on PORT ${PORT}`);
});