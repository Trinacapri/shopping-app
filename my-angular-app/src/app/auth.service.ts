//this will conatin themethod related to login and registration
import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse, HttpHeaders } from "@angular/common/http";

@Injectable()
export class AuthService {
  private _registerUrl = "http://localhost:5000/api/register";
  private _loginUrl = "http://localhost:5000/api/login";
  private _addcategoryUrl = "http://localhost:5000/api/category";
  private _addproductyUrl = "http://localhost:5000/api/product";
  constructor(private http: HttpClient) {}
  registerUser(user) {
    return this.http.post<any>(this._registerUrl, user); //it is making httpreq to the backend url passing in the user details and returned the details of the registered user as a response
  }
  loginUser(user) {
    return this.http.post<any>(this._loginUrl, user); //it accepts the login user object and returns the response that the backend api sends
  }
  loggedIn() {
    return !!localStorage.getItem("token");
  }
  getToken() {
    return localStorage.getItem("token");
  }
  addcategory(categoryname) {
    return this.http.post<any>(this._addcategoryUrl, categoryname);
  }
  addproduct(productname) {
    return this.http.post<any>(this._addproductyUrl, productname);
  }
}
