import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Feature } from '../models/feature.model';
import { Observable } from 'rxjs';


//export default make the class the default export such that no need to be in curly braces when import.
@Injectable()
export default class FeatureService {

  API: string = "https://localhost:44314/api";

  constructor(private http:HttpClient) {

  }

  getAll(workspaceId: string): Observable<Array<Feature>> {
    //console.log('get all from workspace ' + workspaceId);
    return this.http.get<Array<Feature>>(`${this.API}/workspace/${workspaceId}/feature`);
  }

  get(featureId: string): Observable<Feature>{
    return this.http.get<Feature>(`${this.API}/feature/${featureId}`);
    
  }

  //  getAll(): Observable < Array < SugarLevel >> {
  //    return this.http.get<Array<SugarLevel>>(this.SUGARLEVELS_API);
  //  }
  //  get(id: string) {
  //    return this.http.get(`${this.SUGARLEVELS_API}/${id}`);
  //  }
  //  save(sugarLevel: SugarLevel): Observable < SugarLevel > {
  //    let result: Observable<SugarLevel>;
  //    if(sugarLevel.id) {
  //    result = this.http.put<SugarLevel>(
  //      `${this.SUGARLEVELS_API}/${sugarLevel.id}`,
  //      sugarLevel
  //    );
  //  } else {
  //    result = this.http.post<SugarLevel>(this.SUGARLEVELS_API, sugarLevel);
  //  }
  //  return result;
  //}
  //remove(id: number) {
  //  return this.http.delete(`${this.SUGARLEVELS_API}/${id.toString()}`);
  //}

}
