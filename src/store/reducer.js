import {combineReducers} from 'redux-immutable'
import {reducer as headerReducer} from '../common/header/store'
import {reducer as homeReducer} from '../pages/home/store'
const hReducer= combineReducers({
 header: headerReducer,
 home:homeReducer
})  
export default hReducer
 