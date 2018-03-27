const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World to our Reminder App!'))

app.listen(3000, () => console.log('ReminderMe app listening on port 3000!'))
