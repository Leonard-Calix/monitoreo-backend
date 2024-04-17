require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express()

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors())

//app.use('/api/app', require('./routes/app'));
app.use('/api/users', require('./routes/users'))
app.use('/api/departments', require('./routes/departments'))
app.use('/api/municipalities', require('./routes/municipality'))
app.use('/api/polls', require('./routes/poll'))
app.use('/api/auth', require('./routes/auth'))
app.use('/api/questions', require('./routes/questions'))
app.use('/api/communities', require('./routes/communities'))
app.use('/api/surveys', require('./routes/serveys'))




app.listen(process.env.PORT, () => {
  console.log('Servidor corriendo en puerto ', process.env.PORT)
})