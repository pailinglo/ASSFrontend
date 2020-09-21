import { Component, Input, OnDestroy, OnInit } from '@angular/core';
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

  @Input("featureId") featureId : string;
  feature : Feature = new Feature();
  sub: Subscription;


  constructor(private featureService: FeatureService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  

  ngOnInit() {

    this.sub = this.route.params.subscribe((params)=>{

      const featureId = params["featureId"];
      console.log('featureId = ' + featureId);
      if(featureId != ""){
        let obs = this.featureService.get(featureId);
        obs.subscribe((response)=>{
          console.log("Get response from HttpClient");
          this.feature = response;
          console.log(response);
        });
      }

    });

    
  }


  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
