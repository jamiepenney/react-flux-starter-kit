import React from 'react';
import _ from 'lodash';

import Item from './item.jsx';
import ListStore from '../../stores/liststore';
import * as ItemActions from '../../actions/itemActions';

export default React.createClass({
	getInitialState: function() {
		return {
			items: ListStore.getAllItems()
		};
	},
	addNewItem: function(e) {
		e.preventDefault();
		ItemActions.createNewItem();
	},
	onListChange: function() {
		this.setState({ items: ListStore.getAllItems() });
	},
	componentDidMount: function(){
		ListStore.addChangeListener(this.onListChange);
	},
	componentWillUnmount: function(){
		ListStore.removeChangeListener(this.onListChange);
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