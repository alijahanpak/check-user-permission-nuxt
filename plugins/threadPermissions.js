export default function ({store, $axios}) {
  console.log('Auth = ' + store.state.auth);
    let updateDataThreadNowPlaying= null;
    console.log('threadPermission Start');
    updateDataThreadNowPlaying = setInterval(function(){
    if(store.state.auth != null) {
      console.log('threadPermission Enter');

      // Example of axios for check new user permission from admin

      /*$axios.$post('/admin/user/info')
        .then((response) => {
          store.commit('setUserInfo', response);
        }, (error) => {
          console.log(error);
      });*/
    }
  }, 120000);
}
