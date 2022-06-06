/*
Data service
We also have methods for retrieving data from server. In the case we access protected resources, 
the HTTP request needs Authorization header.
*/

/**
 * authHeader  - helper function for data service.  
 *      The code checks Local Storage for user item. 
 *      If there is a logged in user with accessToken (JWT), 
 *      return HTTP Authorization header. Otherwise, return an empty object.
 * @returns object ({HTTP Authorization header} or {})
 */
export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('user'));
    const token = user ? (user.token ? user.token : (user.jwt ? user.jwt : (user.accessToken ? user.accessToken : null))) : null;

    if (user && token && token!==null) {
        return { Authorization: 'Bearer ' + token};
    } else {
        return {};
    }
}

/*
Note: For Node.js Express back-end, please use x-access-token header like this:

export default function authHeader() {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user && user.accessToken) {
    // for Node.js Express back-end
    return { 'x-access-token': user.accessToken };
  } else {
    return {};
  }
}
*/