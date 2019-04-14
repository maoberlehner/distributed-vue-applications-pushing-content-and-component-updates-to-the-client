const express = require(`express`);
const path = require(`path`);
const webSocket = require(`ws`);
const http = require(`http`);

const news = require(`./data/news.json`);
const news1Update = require(`./data/news-1-update.json`);
const news3add = require(`./data/news-3-add.json`);

const PORT = 8200;

const app = express();

app.use((req, res, next) => {
  res.header(`Access-Control-Allow-Origin`, `*`);
  res.header(`Access-Control-Allow-Headers`, `Origin, X-Requested-With, Content-Type, Accept`);
  next();
});

app.use(express.static(path.resolve(__dirname, `components`), {
  maxAge: `365d`,
}));

app.get(`/news`, (req, res) => {
  res.send(news);
});

const server = http.createServer(app);

const wss = new webSocket.Server({
  path: `/ws`,
  server,
});

const ADD = JSON.stringify({
  type: `ADD`,
  entity: news3add,
});
const UPDATE = JSON.stringify({
  type: `UPDATE`,
  entity: news1Update,
});

wss.on(`connection`, (ws) => {
  setInterval(() => ws.send(ADD), 5000);
  setTimeout(() => setInterval(() => ws.send(UPDATE), 5000), 2500);
});

server.listen(PORT);
// eslint-disable-next-line no-console
console.log(`Listening on: http://localhost:${PORT}`);
