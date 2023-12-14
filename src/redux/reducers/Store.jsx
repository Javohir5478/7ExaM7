import {createStore} from '@reduxjs/toolkit';
import { rootReducer } from './rootReducer';

export const Store = createStore(

 rootReducer,
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);                              