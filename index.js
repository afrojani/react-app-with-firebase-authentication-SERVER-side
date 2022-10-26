const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const courses = require('./courses.json');

app.get('/', (req, res) => {
    res.send('courses api running');
});

app.get('/courses', (req, res) => {
    res.send(courses);
})

app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const selectCourse = courses.find(c => c.id === id);
    res.send(selectCourse);
})

app.listen(port, () => {
    console.log('courses server running on port', port);
})