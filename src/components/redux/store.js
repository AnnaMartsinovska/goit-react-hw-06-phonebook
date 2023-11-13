import { combineReducers, createStore } from 'redux';
import { phonebookReducer } from './reducer';
import { devToolsEnhancer } from '@redux-devtools/extension';

const enhancer = devToolsEnhancer();

const rootReducer = combineReducers({
  phonebook: phonebookReducer,
});

export const store = createStore(rootReducer, enhancer);
