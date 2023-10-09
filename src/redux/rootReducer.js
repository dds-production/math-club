import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import chatReducer from './slices/chatSlice';

const rootPersistConfig = {
  key: 'root',
  storage,
  // keyPrefix: 'redux-',
};

const rootReducer = combineReducers({
  // auth: authReducer,
  chat: chatReducer,
});

export { rootPersistConfig, rootReducer };
