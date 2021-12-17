import rootReducer from './reducers';
import { configureStore } from '@reduxjs/toolkit';
import { createBrowserHistory } from 'history';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const history = createBrowserHistory();

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
    blacklist: ['socket', 'streams', 'toggle'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    
    reducer: persistedReducer,

    //추가 미드웨어 적용방법 미들웨어 적용시 옵션 같이 설정
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false
        })
});


// for typescript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
