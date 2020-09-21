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

          console.log(response)
        });
      }

    });
  }
}
