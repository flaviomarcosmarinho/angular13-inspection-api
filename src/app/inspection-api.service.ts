import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AnyForUntypedForms } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InspectionApiService {

  readonly inspectionAPIURL = "https://localhost:7132/api";

  constructor(private http: HttpClient) { }

  getInspectionList(): Observable<any[]> {
    return this.http.get<any>(this.inspectionAPIURL + '/inspections');
  }

  addInspection(data: any) {
    return this.http.post(this.inspectionAPIURL + '/inspections', data);
  }

  updateInspection(id: number | string, data: any) {
    return this.http.put(this.inspectionAPIURL + `/inspections/${id}`, data);
  }

  deleteInspection(id: number | string) {
    return this.http.delete(this.inspectionAPIURL + `/inspections/${id}`);
  }

  //Inspection Types
  getInspectionTypesList(): Observable<any[]> {
    return this.http.get<any>(this.inspectionAPIURL + '/inspectionTypes');
  }

  addInspectionTypes(data: any) {
    return this.http.post(this.inspectionAPIURL + '/inspectionTypes', data);
  }

  updateInspectionTypes(id: number | string, data: any) {
    return this.http.put(this.inspectionAPIURL + `/inspectionTypes/${id}`, data);
  }

  deleteInspectionTypes(id: number | string) {
    return this.http.delete(this.inspectionAPIURL + `/inspectionTypes/${id}`);
  }

  //Statuses
  getStatusList(): Observable<any[]> {
    return this.http.get<any>(this.inspectionAPIURL + '/status');
  }

  addStatus(data: any) {
    return this.http.post(this.inspectionAPIURL + '/status', data);
  }

  updateStatus(id: number | string, data: any) {
    return this.http.put(this.inspectionAPIURL + `/status/${id}`, data);
  }

  deleteStatus(id: number | string) {
    return this.http.delete(this.inspectionAPIURL + `/status/${id}`);
  }
}
