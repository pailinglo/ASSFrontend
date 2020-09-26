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
    
    console.log(feature);
    if(feature.id>0){
      console.log("PUT requested");
      feature.type = +feature.type; //convert to number or will have error
      result = this.http.put<Feature>(`${this.API}/feature/${feature.id}`,feature);
    }
    //add a new feature
    else{
      console.log("POST requested");
      result = this.http.post<Feature>(`${this.API}/feature/`,feature);      
    }
    return result;
  }

  remove(featureId:number){

    return this.http.delete(`${this.API}/feature/${featureId}`);

  }

  
}
