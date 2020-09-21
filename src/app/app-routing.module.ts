import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeaturesComponent } from './features/features.component';
import { WorkspaceComponent } from './workspace/workspace.component';
import { HomeComponent } from './home/home.component';
import { EditFeatureComponent } from './features/edit-feature/edit-feature.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'workspace', component: WorkspaceComponent},
  { path: 'features/workspace/:workspaceId', component: FeaturesComponent },
  { path: 'features/edit-feature/:featureId', component: EditFeatureComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
