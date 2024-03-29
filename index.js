const Vue = require("vue");
const server = require("express")();
const renderer = require("vue-server-renderer").createRenderer();

server.get("*", (req, res) => {
  const app = new Vue({
    data: {
      url: req.url,
    },
    template: "<div>The visited url is: {{ url }} </div>",
  })

  renderer.renderToString(app, (err, html) => {
    if (err) {
      res.status(500).end("Internal server error");
      return;
    }
    res.end(`
      <!Doctype html>
      <html lang="en">
      <head>
      <title>Hello</title>
      </head>
      <body>${html}</body>
      </html>
    `)
  })
});

module.exports = server;
