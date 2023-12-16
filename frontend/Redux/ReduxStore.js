import { configureStore } from '@reduxjs/toolkit'
import { DetailsReducerSlice } from '../Pages/DetailsPage/Redux/DetailsReducer';
import { ReduxApi } from './ReduxApi';
export default configureStore({
  reducer: 
  {
    DetailsReducer : DetailsReducerSlice.reducer,

    [ReduxApi.reducerPath] : ReduxApi.reducer
  },
  middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(ReduxApi.middleware)


})