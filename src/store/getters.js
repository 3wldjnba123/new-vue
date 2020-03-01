const getters = {
  token: state => state.user.token,
  name: state => state.user.name,
  roles: state => state.user.roles
  // permission_routes: state => state.permission.routes,
  // errorLogs: state => state.errorLog.logs
};
export default getters;
