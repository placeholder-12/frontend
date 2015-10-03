var React = require('react');

var KvalitatorFormComponent = React.createClass({
  render: function () {
    return (
        <div>
          <form action="https://github.com/login/oauth/authorize?client_id=9611a8ed755aec36ffbb" method="GET">
            <input type="hidden" name="client_id" value="9611a8ed755aec36ffbb" />
            <input type="submit" value="Authorize with Github" />
          </form>
        </div>
    );
  }
})

module.exports = KvalitatorFormComponent;
