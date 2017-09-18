
import { createStore, compose,applyMiddleware} from 'redux'
import thunk from "redux-thunk";
import logger from "redux-logger";
import { persistStore, autoRehydrate } from 'redux-persist';
import reducer from '../reducers';
const store = compose(applyMiddleware(thunk,logger),autoRehydrate())(createStore)(reducer)
persistStore(store);

export default store;
