import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import FeatureService from 'src/app/shared/api/feature.service';
import { Feature, FeatureType } from '../../shared/models/feature.model';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css']
})
export class FeatureComponent implements OnInit {

  @Input('feature') feature: Feature;
  editMode: boolean = false;
  removeMode: boolean = false;
  selected: number; 
  items:any = [];
  
  //when remove-confirmed, need to ask parent page to refresh
  @Output("removeConfirmed") removeConfirmed = new EventEmitter();

  constructor(private featureService:FeatureService) { }

  ngOnInit() {
    
    //populate the feature type selection dropdown:
    let keys = Object.keys(FeatureType).filter(f=>!isNaN(Number(f)));
    for(const key of keys){
      this.items.push({id:+key,name:FeatureType[key],image:""});
    }
    this.selected = this.feature.type;
    
  }

  edit(){
    this.editMode = true;
  }
  
  save(){
    console.log('save clicked');
    console.log(this.selected);
    this.feature.type = this.selected;  //convert from string to number
    let obs = this.featureService.save(this.feature);
    obs.subscribe((response)=>{
      console.log("getting response from server:");
      console.log(response);
    });
    this.editMode = false;
  }

  cancel(){
    console.log('cancel clicked');
    this.editMode = false;
  }

  remove(){
    this.removeMode = true;
  }
  confirmRemove(){

    console.log("remove feature:"+this.feature.id);
    let obs = this.featureService.remove(this.feature.id);
    obs.subscribe((response)=>{
      console.log("getting response from server:");
      console.log(response);
      this.removeConfirmed.emit();
    });
    this.removeMode = false;
  }
  cancelRemove(){
    this.removeMode = false;
  }
}
