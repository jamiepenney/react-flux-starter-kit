import React from 'react';

export default React.createClass({
	render: function() {
		return (
			<li>{this.props.value}</li>
		);
	}
});