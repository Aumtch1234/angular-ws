import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiEndpoint = 'http://localhost/web_app/webapi';
  countries:any;
  selectedLandmark:any;
  constructor() { }
}
