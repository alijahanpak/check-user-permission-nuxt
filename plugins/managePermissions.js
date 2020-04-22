import Vue from 'vue'

export default function ({store}) {
  Vue.prototype.$can = (...args) => {
    if(store.state.userPermissions != null){ // ***** userPermissions can set with axios after user login ***
      //console.log('Permissions : ' + JSON.stringify(store.state.userPermissions));
      let state= false;
      for(let arg of args){
        let flag= false;
        for(let item of store.state.userPermissions){
          item.permission === arg ? flag= true : flag = false;
          if(flag)
            break;
        }
        state= (state || flag)
      }
      return state;
    }
  }
}
