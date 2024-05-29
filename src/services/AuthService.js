
/**
 * Auth Service
 */
import axios from 'axios';
import { API_URL } from '../config';

const baseUrl = `${API_URL}/Auth`;

const AuthService = {
  login: function(email, password) {
    return axios.get(baseUrl + '/login', { params: { email, password }});
  },
  register: function(data) {
    return axios.post(baseUrl + '/register', { ...data });
  },
  getUser: function() {
    return axios.get(baseUrl + '/user', { headers: this.authHeader() });
  },
  logout: function () {
    localStorage.removeItem('token');
  },
  getToken: function() {
    return localStorage.getItem('token');
  },
  saveToken: function(token) {
    localStorage.setItem('token', token);
  },
  authHeader: function () {
    return { Authorization: this.getToken() }
  }
}

export default AuthService