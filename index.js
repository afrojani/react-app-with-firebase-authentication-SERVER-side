const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('courses api running');
});

app.listen(port, () => {
    console.log('courses server running on port', port);
})