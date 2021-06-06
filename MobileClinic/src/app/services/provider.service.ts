import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// change your server name here
const SERVER_NAME = 'http://localhost';
const API_URL = SERVER_NAME + '/doclab/patient/';
const IMG_URL = SERVER_NAME + '/doclab/uploads/';
const EMPTYIMG_URL =
  SERVER_NAME + '/doclab/patient/uploads/empty/empty-avatar.jpg';
const ICON_URL = SERVER_NAME + '/doclab/uploads/icons/';
const LOGIN_URL = SERVER_NAME + '/doclab/patient/login.php';



const PROVIDER_API_URL = SERVER_NAME + '/doclab/provider/';
const PROVIDER_LOGIN_URL = SERVER_NAME + '/doclab/provider/login-api.php';
@Injectable({
  providedIn: 'root',
})
export class ProviderService {
  items: any;
  imgURL: string = IMG_URL;
  emptyURL: string = EMPTYIMG_URL;
  iconURL: string = ICON_URL;
  loginURL: string = LOGIN_URL;
  providerLoginURL: string =PROVIDER_LOGIN_URL;

  constructor(private http: HttpClient) {}

  postData(pathURL: string, dataPost: any) {
    return this.http.post(API_URL + pathURL, dataPost);
  }

  getData(getpathURL: string) {
    return this.http.get(API_URL + getpathURL);
  }
  postDataProvider(pathURL: string, dataPost: any) {
    return this.http.post(PROVIDER_API_URL + pathURL, dataPost);
  }

  getDataProvider(getpathURL: string) {
    return this.http.get(PROVIDER_API_URL + getpathURL);
  }
}
