export const state = () => ({
  auth: true, // auth variable check user Login or No
  userPermissions: [
    {id: 1, permission: 'SHOW_WELCOME_LINK'},
    //{id: 2, permission: 'SHOW_INSPIRE_LINK'},
    //this user dont have 'SHOW_INSPIRE_LINK' permission

    //{id: 3, permission: 'CAN_DELETE'},
    //this user dont have 'CAN_DELETE' permission

    //{id: 3, permission: 'CAN_DELETE'},
    //this user dont have 'CAN_DELETE' permission

    {id: 4, permission: 'CAN_SHARE'},
    {id: 5, permission: 'CAN_LIKE'},
    //{id: 6, permission: 'CAN_BOOKMARK'},
    //this user dont have 'CAN_BOOKMARK'' permission

    /* another permission to you need
    *
    *
    *
    * */

  ],
});

export const mutations = {
  setAuth(state, auth) {
    /*you can use 'setAuth' to change auth state*/
    state.auth = auth;
  },
  setUserPermission(state, userPermissions) {
    /*you can use 'setUserPermission' to change userPermission array*/
    state.userPermissions = userPermissions;
  },
};
