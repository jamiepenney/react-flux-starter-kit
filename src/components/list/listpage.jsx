import React from 'react';
import _ from 'lodash';

import Item from './item.jsx';

export default React.createClass({
	getInitialState: function() {
		return {
			items: [{
				id: 1, value: "Item 1"
			}, {
				id: 2, value: "Item 2"
			}, {
				id: 3, value: "Item 3"
			}]
		};
	},
	addNewItem: function(e) {
		e.preventDefault();
		var items = this.state.items;
		var nextId = _.last(items).id + 1;
		items.push({id: nextId, value: "Item " + nextId});
		this.setState({items: items});
		return false;
	},
	render: function() {
		var items = this.state.items.map(item => (
			<Item key={item.id} value={item.value} />
		));
		
		return (
			<div>
				<h2>List Example</h2>
				<a onClick={this.addNewItem}>Add new item</a>
				<ul>{items}</ul>
			</div>
		);
	}
});