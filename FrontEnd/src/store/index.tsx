import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import logger from 'redux-logger';
import { authApi } from './api/auth';
import { patientApi } from './api/patient';
import authReducer from './slice/authSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
    [patientApi.reducerPath]: patientApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger, authApi.middleware, patientApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export default store;
