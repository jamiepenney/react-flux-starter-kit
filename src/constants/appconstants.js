import keyMirror from 'react/lib/keyMirror';

export var ActionTypes = keyMirror({
    ADD_NEW_ITEM: null,
    RECEIVE_ADD_NEW_ITEM: null
});

export var PayloadSources = keyMirror({
    SERVER_ACTION: null,
    VIEW_ACTION: null
});

export var Events = keyMirror({
   CHANGE: null 
});