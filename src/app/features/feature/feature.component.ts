import { Component, OnInit, Input } from '@angular/core';
import { Feature, FeatureType } from '../../shared/models/feature.model';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css']
})
export class FeatureComponent implements OnInit {

  @Input('feature') feature: Feature;
  featureType: string;
  constructor() { }

  ngOnInit() {
    //get the string of enum type
    this.featureType = FeatureType[this.feature.type];
  }

}
