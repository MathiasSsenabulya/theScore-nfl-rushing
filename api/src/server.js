const express = require('express');
const bodyParser = require('body-parser');
const rushingStats = require('./rushing');

const app = express();
const port = process.env.APP_SERVER_PORT || 5050;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/rushing', (req, res) => {
  const statsWithKeys = Object.keys(rushingStats);
  const startAt = +req.query.startAt || 0;
  const endAt = (+req.query.limitTo || 25) + startAt;
  let playerStats = new Object();
  let respStatus = "success";

  function reconstruct(obj, key) {
    obj[key] = rushingStats[key];
    return obj;
  }
  function sortBy(prop) {
    return (a, b) => {
      let aVal = typeof a[prop] !== "number" ? parseInt(a[prop].match(/\d+/g).join('')) : a[prop];
      let bVal = typeof b[prop] !== "number" ? parseInt(b[prop].match(/\d+/g).join('')) : b[prop];
      return aVal > bVal ? -1 : aVal < bVal ? 1 : 0;
    }
  }
  if (req.query.player) {
    const foundIndex = statsWithKeys
      .filter(key => rushingStats[key]["Player"] === req.query.player)[0]
    playerStats = [rushingStats[foundIndex]];
  }
  else if (req.query.sortBy) {
    playerStats = rushingStats
      .sort(sortBy(req.query.sortBy))
      .slice(startAt, endAt)
  }
  else {
    playerStats = rushingStats
      .slice(startAt, endAt)
  }
  const response = {
    status: respStatus,
    data: {
      stats: playerStats
    }
  }
  res.send(playerStats);
});

app.listen(port, () => console.log(`Listening on port ${port}`));