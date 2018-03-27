const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World to our Reminder App! We are super excited to start our journey together OMG'))

app.listen(3000, () => console.log('ReminderMe app listening on port 3000!'))
