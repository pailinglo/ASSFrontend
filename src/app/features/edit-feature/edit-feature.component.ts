import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import FeatureService from 'src/app/shared/api/feature.service';
import { Feature, FeatureType } from 'src/app/shared/models/feature.model';
import {ActivatedRoute, Router} from '@angular/router';
import { resolve } from 'url';


@Component({
  selector: 'app-edit-feature',
  templateUrl: './edit-feature.component.html',
  styleUrls: ['./edit-feature.component.css']
})
export class EditFeatureComponent implements OnInit, OnDestroy {

  @Input("featureId") featureId : string;
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

  ngOnInit() {

    this.sub = this.route.params.subscribe((params)=>{

      const featureId = params["featureId"];
      console.log('featureId = ' + featureId);
      if(featureId != ""){
        let obs = this.featureService.get(featureId);
        obs.subscribe((response)=>{
          console.log("Get response from HttpClient");
          this.feature = response;
          this.featureType = this.feature.type.toString();
          console.log(response);
        });
      }

    });

    
  }


  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  save(){
    console.log('save clicked');
    this.feature.type = +this.featureType;  //convert from string to number
    let obs = this.featureService.save(this.feature);
    obs.subscribe((response)=>{
      console.log("getting response from server:");
      console.log(response);
    });
  }

  cancel(){
    console.log('cancel clicked');
  }

}
