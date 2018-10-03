"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
let logs = [];
app.use((req, res, next) => {
    let now = new Date();
    let ip = req.connection.remoteAddress;
    if (ip) {
        logs.push({
            time: now,
            ip
        });
    }
    next();
});
// http://localhost:3000/static/trollface.png
app.use('/static', express_1.default.static('public'));
// http://localhost:3000/
app.get('/', (req, res) => {
    let html = '<ul>';
    logs.forEach(item => html += `<li>TIME=${item.time} IP=${item.ip}</li>`);
    html += '</ul>';
    res.send(html);
});
// http://localhost:3000
app.get('/users/:userId/cars/:carId', (req, res) => {
    res.send(`<h1>userId</h1> = ${req.params.userId}, carIrd = ${req.params.carId}
    color = ${req.query.color}`);
});
app.listen(3000, '0.0.0.0', () => console.log('ready'));
