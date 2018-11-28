import authReducer from './authReducer'
import projectReducer from './projectReducer'
import {combineReducers, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import logger from 'redux-logger'
import {reduxFirestore, getFirestore} from 'redux-firestore'
import {reactReduxFirebase, getFirebase} from 'react-redux-firebase'
import fbConfig from '../../config/fbconfig'
import { firestoreReducer } from 'redux-firestore'

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  firestore: firestoreReducer
})
export const middleware = compose(
  applyMiddleware(logger, thunkMiddleware.withExtraArgument({getFirebase, getFirestore})),
  reduxFirestore(fbConfig),
  reactReduxFirebase(fbConfig)
  )

//compose allows us to add more store reducer (middleware) to our redux store in order to connect our firebase app to our app, the configuration
//of our firebase is passed to both reduxFirestore and reactReduxFirebase in order for the {getFirebase, getFirestore }in our action to know to connect to that specific app


export default rootReducer;