import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WorkspaceComponent } from './workspace/workspace.component';
import { NewcaseComponent } from './workspace/newcase/newcase.component';
import { FeaturesComponent } from './features/features.component';
import { FeatureComponent } from './features/feature/feature.component';
import FeatureService from './shared/api/feature.service';
import { EditFeatureComponent } from './features/edit-feature/edit-feature.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
// import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WorkspaceComponent,
    NewcaseComponent,
    FeaturesComponent,
    FeatureComponent,
    EditFeatureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    // NgSelectModule,
    CommonModule
  ],
  providers: [
    FeatureService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
