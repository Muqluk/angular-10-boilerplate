/* 
  eslint-disable
    @typescript-eslint/no-explicit-any,
    @typescript-eslint/explicit-module-boundary-types,
*/
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "environments/environment";

const API_URL = environment.API_URL;

@Injectable()
export class RestProvider {
  private url: string = API_URL.endsWith("/") ? API_URL : `${API_URL}/`;

  constructor(public http: HttpClient) { }

  public get(endpoint: string, params = new HttpParams(), options = new HttpHeaders(), url?: string): Promise<any> {
    const requestOptions = { headers: options, params, withCredentials: true };
    const _url = `${url ? url : this.url}${endpoint}`;

    return new Promise((resolve, reject) => {
      this.http.get(_url, requestOptions).subscribe(resolve, reject);
    })
  }

  public post(endpoint: string, body: any = {}, params = new HttpParams(), options = new HttpHeaders(), url?: string): Promise<any> {
    const requestOptions = { headers: options, params, withCredentials: true };
    const _url = `${url ? url : this.url}${endpoint}`;

    return new Promise((resolve, reject) => {
      this.http.post(_url, body, requestOptions).subscribe(resolve, reject);
    })
  }

  public put(endpoint: string, body: any, params = new HttpParams(), options = new HttpHeaders(), url?: string): Promise<any> {
    const requestOptions = { headers: options, params, withCredentials: true };
    const _url = `${url ? url : this.url}${endpoint}`;

    return new Promise((resolve, reject) => {
      this.http.put(_url, body, requestOptions).subscribe(resolve, reject)
    });
  }

  public delete(endpoint: string, params = new HttpParams(), options = new HttpHeaders(), url?: string): Promise<any> {
    const requestOptions = { headers: options, params, withCredentials: true };
    const _url = `${url ? url : this.url}${endpoint}`;

    return new Promise((resolve, reject) => {
      this.http.delete(_url, requestOptions).subscribe(resolve, reject);
    });
  }
}
