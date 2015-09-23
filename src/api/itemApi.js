import * as ActionCreators from '../actions/itemActions';
import $ from 'jquery';

var currentId = 0; 

export function createNewItem() {
	var nextId = currentId++;
	var newItem = {id: nextId, value: "Item " + nextId};
	ActionCreators.receiveItem(newItem);
}