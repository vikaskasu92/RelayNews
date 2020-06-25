import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BusinessComponent } from './businessComponent/businessComponent.component';
import { TechnologyComponent } from './technologyComponent/technologyComponent.component';
import { PoliticsComponent } from './politicsComponent/politicsComponent.component';
import { MostPopularComponent } from './mostPopularComponent/mostPopular.component';
import { MovieReviewsComponent } from './movieReviewsComponent/movieReviewsComponent.component';
import { SearchComponent } from './search/search.component';


const routes: Routes = [
  {path:'business',component:BusinessComponent},
  {path:'technology',component:TechnologyComponent},
  {path:'politics',component:PoliticsComponent},
  {path:'search',component:SearchComponent},
  {path:'mostPopular',component:MostPopularComponent},
  {path:'movieReviews',component:MovieReviewsComponent},
  {path:'**', redirectTo:'business'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
