const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;
var user = require('./routes/user');
const passport = require('passport');
app.use(express.json());
// app.use(express.static(path.join(__dirname, 'client/public')));
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, './client/public', 'index.html'));
// });
// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));
app.use('/user', user);
// create a GET route
app.get('/game', passport.authenticate('jwt', { session: false }));
