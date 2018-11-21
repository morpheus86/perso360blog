import authReducer from './authReducer'
import projectReducer from './projectReducer'
import {combineReducers, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import logger from 'redux-logger'

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer
})
export const middleware = applyMiddleware(logger, thunkMiddleware)

export default rootReducer;