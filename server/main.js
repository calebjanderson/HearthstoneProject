var express = require('express');
var path = require('path');
var browserify = require('browserify-middleware');
var app = express();
var cardAPI = require('./routers/card_router.js')
var routes = express.Router();

routes.use(express.static(path.join(__dirname, "../client/public")));

routes.get('/app-bundle.js',
 browserify('./client/main.js', {
    transform: [ [ require('babelify'), { presets: ["es2015", "react"] } ] ]
  })
);

routes.use('/cards', cardAPI);
app.use('/', routes);

var port = process.env.PORT || 4000;
app.listen(port);
console.log("Listening on localhost:" + port);
