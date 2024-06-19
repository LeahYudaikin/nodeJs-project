require('dotenv').config();
const express = require('express');

const volunteerRouter = require('./routers/volunteer.router.js');
const locationRouter = require('./routers/location.router.js');
const priorityRouter = require('./routers/priority.router.js');
const helpRequestRouter = require('./routers/helpRequest.router.js');

const app = express();

const host = process.env.HOST;
const port = process.env.PORT;

app.use(express.json());

app.use('/api/volunteers', volunteerRouter);
app.use('/api/locations', locationRouter);
app.use('/api/priorities', priorityRouter);
app.use('/api/helpRequests', helpRequestRouter);

// app.use((err, req, res, next) => {
//     console.error(err.stack)
//     res.status(500).send('Something broke in app!')
// })

app.listen(port, host, () => {
    console.log(`express server is running at http://${host}:${port}`);
})