import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Feature, FeatureType } from '../shared/models/feature.model';
import FeatureService from '../shared/api/feature.service'
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit, OnDestroy {

  f1: Array<Feature>;
  sub: Subscription;
  addMode: boolean = false;
  workspaceId: number;


  constructor(
    private route: ActivatedRoute,
    private featureService: FeatureService) {
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  

  ngOnInit() {


    this.sub = this.route.params.subscribe(params => {
      const workspaceId = params['workspaceId'];
      if (workspaceId) {

        let obs = this.featureService.getAll(workspaceId);

        obs.subscribe((response) => {
          console.log("Get response from HttpClient");
          this.f1 = response;
          this.workspaceId = workspaceId;
          console.log(response)
        });
      }

    });
  }

  add(){
    this.addMode = true;
  }

  cancelAdd(){
    this.addMode = false;
  }

  addFeature(save:boolean){

    this.addMode = false;
    if(save){
      //refresh the component to show the added feature.
      this.ngOnInit();
      console.log("save clicked in child component");
    }
    else{
      console.log("cancel clicked in child component");
    }
  }

  featureRemoved(){
    this.ngOnInit();
    console.log("feature removed / parent side");
  }
}
