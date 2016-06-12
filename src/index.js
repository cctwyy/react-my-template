var React = require('react');
var ReactDOM = require('react-dom');

var HelloComponent = React.createClass({
  render: function () {
    return (
      <h1>Hello, world!</h1>
    );
  }
});

ReactDOM.render(
  <HelloComponent />,
  document.getElementById('app')
);


