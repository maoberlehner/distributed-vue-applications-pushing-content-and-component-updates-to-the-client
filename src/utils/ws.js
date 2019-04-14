import news1Update from '../../server/data/news-1-update.json';
import news3add from '../../server/data/news-3-add.json';

// const ws = new WebSocket(`ws://localhost:8200/ws`);
// Naiv mock WebSocket implementation for easier deployment.
const ws = {};

const ADD = JSON.stringify({
  type: `ADD`,
  entity: news3add,
});
const UPDATE = JSON.stringify({
  type: `UPDATE`,
  entity: news1Update,
});

setInterval(() => ws.onmessage({ data: ADD }), 5000);
setTimeout(() => setInterval(() => ws.onmessage({ data: UPDATE }), 5000), 2500);

export default ws;
