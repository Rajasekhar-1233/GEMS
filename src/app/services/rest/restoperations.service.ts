import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
let headers: HttpHeaders = new HttpHeaders();
headers = headers.append('Content-Type', 'application/json');

@Injectable({
  providedIn: 'root'
})
export class RestoperationsService {

  constructor(private http: HttpClient) {

  }

  getUsersData() {
    return this.http.get("http://localhost:8000/data");
  }

  addData(datatoAdd) {
    return this.http.post("http://localhost:8000/data", datatoAdd);
  }

  updateData(datatoUpdate,id) {
    return this.http.put("http://localhost:8000/data"+ '/' + id, datatoUpdate)
  }

  delete(id: string) {
    return this.http.delete("http://localhost:8000/data"+ '/' + id);
  }

}
