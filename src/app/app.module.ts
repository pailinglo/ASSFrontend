import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WorkspaceComponent } from './workspace/workspace.component';
import { NewcaseComponent } from './workspace/newcase/newcase.component';
import { FeaturesComponent } from './features/features.component';
import { FeatureComponent } from './features/feature/feature.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WorkspaceComponent,
    NewcaseComponent,
    FeaturesComponent,
    FeatureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
