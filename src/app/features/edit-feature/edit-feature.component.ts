import { Component, Input, OnDestroy, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import FeatureService from 'src/app/shared/api/feature.service';
import { Feature, FeatureType } from 'src/app/shared/models/feature.model';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-edit-feature',
  templateUrl: './edit-feature.component.html',
  styleUrls: ['./edit-feature.component.css']
})
export class EditFeatureComponent implements OnInit, OnDestroy {

  @Input("featureId") featureId : number;
  @Input("workspaceId") workspaceId: number;
  @Output() btnClick: EventEmitter<any> =  new EventEmitter();

  feature : Feature = new Feature();
  sub: Subscription;
  featureTypes: any;
  keys: Array<string>;
  featureType: string;

  constructor(private featureService: FeatureService,
    private router: Router,
    private route: ActivatedRoute
    ) { 

      this.featureTypes = FeatureType;
      this.keys = Object.keys(FeatureType).filter(f=>!isNaN(Number(f)));


    }

  

  //using edit-feature component as a component
  ngOnInit() {

    
      console.log('featureId = ' + this.featureId);
      if(this.featureId != 0){
        console.log("existing feature");
        let obs = this.featureService.get(this.featureId.toString());
        obs.subscribe((response)=>{
          console.log("Get response from HttpClient");
          this.feature = response;
          this.featureType = this.feature.type.toString();
          console.log(response);
        });
      }
      else{
        console.log("new feature");
        this.feature = new Feature();
        this.feature.workspaceId = this.workspaceId;
      }
    
  }

  ngOnDestroy(): void {
    //this.sub.unsubscribe();
  }

  save(){
    console.log('save clicked');
    console.log(this.feature)
    this.feature.type = +this.featureType;  //convert from string to number
    this.feature.workspaceId = +this.workspaceId; //theoretically, both fields are number that I shouldn't have to convert,...
    let obs = this.featureService.save(this.feature);
    obs.subscribe((response)=>{
      console.log("getting response from server:");
      console.log(response);
    });
    this.btnClick.emit(true);  //meaning save
  }

  cancel(){
    console.log('cancel clicked');
    this.btnClick.emit(false);
  }

}
