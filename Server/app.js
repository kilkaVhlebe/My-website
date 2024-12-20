const createError = require('http-errors');
const express = require('express');
const path = require('path');
const logger = require('morgan');
const dotenv = require('dotenv/config')
const cors = require('cors')
const blockedIps = new Set();
const requestCounts = {};

const reviewsRouter = require('./routes/reviews.router');
const usersRouter = require('./routes/users');

const app = express();



app.use((req, res, next) => {
  const ip = req.ip;
  const now = Date.now();

  if (blockedIps.has(ip)) {
    res.status(429).send('Your IP is temporarily blocked due to excessive requests.');
    return;
  }

  if (!requestCounts[ip]) {
    requestCounts[ip] = { count: 1, lastReset: now };
  } else {
    if (now - requestCounts[ip].lastReset > 60 * 1000) {
      requestCounts[ip] = { count: 1, lastReset: now };
    } else {
      requestCounts[ip].count++;
      if (requestCounts[ip].count > 60) {
        blockedIps.add(ip);
        setTimeout(() => {
          blockedIps.delete(ip);
          requestCounts[ip] = { count: 0, lastReset: now };
        }, 300 * 1000);
        res.status(429).send('Your IP is temporarily blocked due to excessive requests.');
        return;
      }
    }
  }

  next();
});

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', reviewsRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
