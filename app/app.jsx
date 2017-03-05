const React = require('react');
const ReactDOM = require('react-dom');
const {Route, Router, IndexRoute, hashHistory} = require('react-router');
const Main = require('Main');


require('style!css!sass!applicationStyles');

ReactDOM.render(
   <Router history={hashHistory}>
      <Route path="/" component={Main}>
         {/* index route are used for settin main page component */}

      </Route>
   </Router>,
   document.getElementById('app')
);
