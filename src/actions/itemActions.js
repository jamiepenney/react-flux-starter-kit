import AppDispatcher from '../dispatcher/appdispatcher';
import { ActionTypes } from '../constants/appconstants';
import * as ItemApi from '../api/itemApi';

export function receiveItem(item) {
    AppDispatcher.handleServerAction({
        type: ActionTypes.RECEIVE_ADD_NEW_ITEM,
        item: item
    });
}

export function createNewItem() {
    AppDispatcher.handleViewAction({
        type: ActionTypes.ADD_NEW_ITEM
    });
    ItemApi.createNewItem();
}
