import { ActionTypes, Events } from '../constants/appconstants';
import AppDispatcher from '../dispatcher/appdispatcher';
import { EventEmitter } from 'events';

import _ from 'lodash';

var _list = [];

class ListStore {
    getAllItems() {
        return _list;    
    }
    
    emitChange() {
        this.eventEmitter.emit(Events.CHANGE_EVENT);
    }

    addChangeListener(fn) {
        this.eventEmitter.on(Events.CHANGE_EVENT, fn);
    }

    removeChangeListener(fn) {
        this.eventEmitter.removeListener(Events.CHANGE_EVENT, fn);
    }
    
    register(dispatchHandler){
        this.dispatchToken = AppDispatcher.register(dispatchHandler);
    }
    
    dispatchHandler(payload){
        var action = payload.action;
    
        switch (action.type) {
            case ActionTypes.RECEIVE_ADD_NEW_ITEM:
                _list.push(action.item);
                this.emitChange();
                break;
            default:
        }
    }
    
    constructor(){
        this.eventEmitter = new EventEmitter();
        this.dispatchToken = AppDispatcher.register(this.dispatchHandler.bind(this));
    }
}

var _Store = new ListStore(); 
export default _Store;