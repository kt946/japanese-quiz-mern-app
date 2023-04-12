import decode from 'jwt-decode'; // this is a library that will decode the token for us

// we instantiate a new version of this for every component that imports it.
// this ensures we are using a new version of this functionality and removes some risk of leaving remnant data hanging around
class AuthService {
  // retrieve data saved in token
  getProfile() {
    return decode(this.getToken());
  }

  // check if the user is still logged in
  loggedIn() {
    // check if there is a saved token and it's still valid
    const token = this.getToken();
    // check if token is NOT undefined and the token is NOT expired
    return !!token && !this.isTokenExpired(token);
  }

  // check if the token has expired
  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        return true;
      } else {
        return false;
      }
    } catch (err) {
      return false;
    }
  }

  // retrieves the user token from localStorage
  getToken() {
    return localStorage.getItem('id_token');
  }

  login(idToken) {
    // saves token to localStorage
    localStorage.setItem('id_token', idToken);

    // redirect user to dashboard
    window.location.assign('/dashboard');
  }

  logout() {
    // clear token from localStorage
    localStorage.removeItem('id_token');
    // this will reload the page and reset the state of the application
    window.location.assign('/');
  }
}

export default new AuthService();
