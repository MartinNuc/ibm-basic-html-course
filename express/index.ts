import express from 'express';

const app = express();

interface Log {
  ip: string;
  time: Date;
}

let logs: Array<Log> = [];

app.use((req, res, next) => {
  let now = new Date();
  let ip = req.connection.remoteAddress;
  if (ip) {
    logs.push({
      time: now,
      ip
    })
  }
  next();
});

// http://localhost:3000/static/trollface.png
app.use('/static', express.static('public'));

// http://localhost:3000/
app.get('/', (req, res) => {
  let html = '<ul>';
  logs.forEach(item => html += `<li>TIME=${item.time} IP=${item.ip}</li>`)
  html += '</ul>';
  res.send(html);
});

// http://localhost:3000
app.get('/users/:userId/cars/:carId', (req, res) => {
  res.send(`<h1>userId</h1> = ${req.params.userId}, carIrd = ${req.params.carId}
    color = ${req.query.color}`);
});


app.get('/', (req, res) => {
  res.render('index');
})

app.get('/contact', (req, res) => {
  res.render('contact', {
    title: 'fsjheflis'
  });
})

app.get('/investments/list', (req, res) => {
  res.render('list', {
    title: 'htlwehtlh'
  });
})









app.listen(3000, '0.0.0.0', () => console.log('ready'));
