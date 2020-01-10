import {SET_TOKEN_MODAL} from  './action-types'
export default {
  setTokenModal(param=true){
    return {type:SET_TOKEN_MODAL,params:param}
  }
}