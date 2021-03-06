const express = require("express");
const morgan = require("morgan");
//const postBank = require("./postBank");
const postList = require("./views/postList");
//const postDetails = require("./views/postDetails");
const app = express();
const client = require('./db/index.js')
app.use(morgan('dev'));
app.use(express.static(__dirname + "/public"));
app.get("/", async (req, res, next) => {
  try{
  const data = await client.query('SELECT * FROM posts');
  const posts = data.rows
  res.send(postList(posts));
  } catch(err) {
    next(err)
  }
});
// app.get("/posts/:id", (req, res) => {
//   const post = postBank.find(req.params.id);
//   res.send(postDetails(post));
// });
const PORT = 1337;
app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
