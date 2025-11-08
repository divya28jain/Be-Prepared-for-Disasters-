const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => res.render('index', { page: 'home' }));
app.get('/features', (req, res) => res.render('features', { page: 'features' }));
app.get('/admin', (req, res) => res.render('admin', { page: 'admin' }));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Be Prepared for Disasters frontend running on port ${PORT}`));
