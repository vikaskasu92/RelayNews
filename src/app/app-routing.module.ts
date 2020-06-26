import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BusinessComponent } from './businessComponent/businessComponent.component';
import { TechnologyComponent } from './technologyComponent/technologyComponent.component';
import { PoliticsComponent } from './politicsComponent/politicsComponent.component';
import { MostPopularComponent } from './mostPopularComponent/mostPopular.component';
import { SearchComponent } from './search/search.component';
import { WorldComponent } from './world/world.component';
import { OtherNewsComponent } from './otherNewsComponent/otherNewsComponent.component';


const routes: Routes = [
  {path:'business',component:BusinessComponent},
  {path:'world',component:WorldComponent},
  {path:'technology',component:TechnologyComponent},
  {path:'politics',component:PoliticsComponent},
  {path:'search',component:SearchComponent},
  {path:'mostPopular',component:MostPopularComponent},
  {path:'otherNews',component:OtherNewsComponent},
  {path:'', pathMatch:'full', redirectTo:'business'},
  {path:'**', redirectTo:'business'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
