import axios from 'axios';
import authHeader from './auth-header';
//const API_URL = 'http://localhost:8080/api/test/';
const API_URL = 'http://restapi.adequateshop.com/api/';

class UserService {
    getPublicContent() {
       return axios.get(API_URL + 'Tourist');
    }
    getUserBoard() {
        return axios.get(API_URL + 'user', { headers: authHeader() });  /* we add a HTTP header with the help of authHeader() function when requesting authorized resource. */
    }
    getModeratorBoard() {
        return axios.get(API_URL + 'mod', { headers: authHeader() });  /* we add a HTTP header with the help of authHeader() function when requesting authorized resource. */
    }
    getAdminBoard() {
        return axios.get(API_URL + 'admin', { headers: authHeader() });  /* we add a HTTP header with the help of authHeader() function when requesting authorized resource. */
    }
}
export default new UserService();