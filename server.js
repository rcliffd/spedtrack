const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

import passport from 'passport';


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(passport.initialize());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Routes
app.use(routes);

require('./routes/loginUser')(app);
require('./routes/registerUser')(app);
require('./routes/finduser')(app);
require('./routes/deleteUser')(app);
require('./routes/updateuser')(app);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/spedtrack");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});