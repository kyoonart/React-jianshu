import {combineReducers} from 'redux-immutable'
import {reducer as headerReducer} from '../common/header/store'
const hReducer= combineReducers({
 header: headerReducer,
})  
export default hReducer