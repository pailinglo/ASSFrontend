import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  //can either save an existing or add a new feature
  save(feature: Feature): Observable<Feature>{
    
    let result: Observable<Feature>;
    //what does this mean? instead of feature.id == ""
    if(feature.id){
      feature.type = +feature.type; //convert to number or will have error
      result = this.http.put<Feature>(`${this.API}/feature/${feature.id}`,feature);
    }
    //add a new feature
    else{
      result = this.http.post<Feature>(`${this.API}/feature/`,feature);      
    }
    return result;
  }

  remove(featureId:string){

    return this.http.delete(`${this.API}/feature/${featureId}`);

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
