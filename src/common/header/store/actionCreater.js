import * as constants from './constants';
import axios from 'axios'
import {fromJS} from 'immutable'
export const search_focus=()=>({type: constants.SEARCH_FOCUS,})
export const search_blur=()=>({type: constants.SEARCH_BLUR})
export const mouseIn=()=>({type: constants.MOUSE_IN})
export const mouseOut=()=>({type: constants.MOUSE_OUT})
export const changePage=(page)=>({type: constants.CHANGE_PAGE,
 page
})
const changeList=(data)=>({
  type:constants.CHANGE_LIST,
  data:fromJS(data),
  totalPage:Math.ceil(data.length/10)
})
export const getList=()=>{
 return (dispatch)=>{
    axios.get('/api/headerList.json').then((res)=>{
      const data=res.data;
      const action=changeList(data.data)
      dispatch(action)
  }).catch(res=>{
    console.log('error');
  })
 }
 
}