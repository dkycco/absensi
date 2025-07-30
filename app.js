const express = require('express');
const path = require('path');
const http = require('http');
const { Server } = require('socket.io');
const expressLayouts = require('express-ejs-layouts');
const webRoutes = require('./routes/web');
const apiRoutes = require('./routes/api');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.set('io', io);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'app/views'));

app.use(expressLayouts);
app.set('layout', 'layouts/main-layout');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', webRoutes);
app.use('/api', apiRoutes);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});