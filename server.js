const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080

app.use(express.static('./dist/voting'));

app.get('/*', function (req, res) {
    res.sendFile('index.html', { root: 'dist/voting/' }
    );
});

app.listen(PORT);

console.log('voting app listen on port : ' + PORT)