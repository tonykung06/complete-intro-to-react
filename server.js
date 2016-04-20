require('babel-register');
const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const ReactRouter = require('react-router');
const match = ReactRouter.match;
const RouterContext = ReactRouter.RouterContext;
const Provider = require('react-redux').Provider;
const store = require('./js/Store.jsx').store;
const _ = require('lodash');
const fs = require('fs');
const port = 5050;
const baseTemplate = fs.readFileSync('./index.html');
const template = _.template(baseTemplate);
const routes = require('./js/ClientApp.jsx').Routes;

const app = express();

app.use('/public', express.static('./public'));

app.use((req, res) => {
  match({
    routes: routes,
    location: req.url
  }, (err, redirectLocation, renderProps) => {
    if (err) {
      return res.status(500).send(err.message);
    } else if (redirectLocation) {
      return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      const body = ReactDOMServer.renderToString(
        React.createElement(Provider, {store}, React.createElement(RouterContext, renderProps))
      );

      return res.status(200).send(template({body}));
    }

    return res.status(404).send('Not Found');
  });
});

console.log('listening on port ' + port);
app.listen(port);
