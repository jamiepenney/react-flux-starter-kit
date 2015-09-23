import { Dispatcher } from 'flux';
import { PayloadSources } from '../constants/appconstants';

var AppDispatcher = new Dispatcher();
export default AppDispatcher;

AppDispatcher.handleViewAction = function (action) {
    var payload = {
        source: PayloadSources.VIEW_ACTION,
        action: action
    };
    this.dispatch(payload);
};

AppDispatcher.handleServerAction = function (action) {
    var payload = {
        source: PayloadSources.SERVER_ACTION,
        action: action
    };
    this.dispatch(payload);
};