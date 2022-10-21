// ----------
// Require Statments -- tells the app what packages are being used
// ----------

const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
require('dotenv').config();
require('./config/database');

// ----------
// Defining the port that the app runs on
// ----------
const port = process.env.PORT || 3001

// ----------
// Creating the application using express so that it can actually process requests
// ----------
const app = express();

// ----------
// BEGINNING OF MIDDLEWARE
// ----------

// Middleware functions (preceded by app.use) are run EVERY time a server receives a request of any type.
app.use(logger('dev'));
app.use(express.json());

//configure both serve-favicon & static middleware to serve from the production 'build' folder
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));
// ----------
// END OF MIDDLEWARE
// ----------

// ----------
// ROUTES START HERE
// ----------

app.use('/api/users', require('./routes/api/users'));

//Create Read Update Destroy routes go here (Index, Show, Create, Update, Delete) -- (New and Edit go on the front end (And kind of Tndex & Show))

//Index and Show on the express server grab the data from the database that's needed and send it to the front end to be rendered there.


//Put API routes here, before the "catch all" route

// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX requests. If the express server doesn't match anything, it sends it over to react.


app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });

// This is your *default* route. If the route being received does not match any other route that exists on the server, it sends it back information about the frontend React App and renders it to the page. This is why it is put at the very end, because if it does not match anything else, it knows to do this.

// ----------

// configure to use port 3001 instead of 3000 during the development to avoid collision with React's dev server.
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
  });

  // tells the server that the API is running on to open the port that we specified at the very beginning of the file and run the API on that port.