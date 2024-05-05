var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//Serve Express Static Files
app.use(express.static(path.join(__dirname, 'public')));
//Serve Angular Static Files
  app.use(express.static(path.join(__dirname, 'angular_resume', 'build', 'browser')));
  //For other (most) requests
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'angular_resume', 'build', 'browser', 'index.html'));
  });

app.use('/', indexRouter);
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

//DATABASE / API STUFF 
// const apiRouter = require('./api/routes/index');
// app.use('/api', (req, res, next) => {
//   res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With,Content-Type, Accept');
//   next();
// });
// app.use('/', indexRouter);
// app.use('/api', apiRouter);

const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const User = require('./api/models/user');
const Experience = require('./api/models/experience');
const Education = require('./api/models/education');
const Projects = require('./api/models/projects');

const cors = require('cors');
app.use(cors({
  origin: 'localhost:4200'
}));

app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/resume_database', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find();
    console.log("app.js - users: " + users);
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.get('/experience', async (req, res) => {
  try {
    const experience = await Experience.find();
    res.json(experience);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.get('/education', async (req, res) => {
  try {
    const education = await Education.find();
    res.json(education);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.get('/projects', async (req, res) => {
  try {
    const projects = await Projects.find();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});




app.post('/users', async (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    contactInfo: req.body.contactInfo
  });
  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.get('/', (req, res) => {
  res.send('Welcome to the MEAN stack application!');
});

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`Server started on port ${PORT}`));





module.exports = app;
