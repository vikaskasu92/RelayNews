import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'

import { MatButtonModule } from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainBodyComponent } from './mainBody/mainBody.component';
import { TopStoriesComponent } from './topStories/topStories.component';
import { BusinessComponent } from './businessComponent/businessComponent.component';
import { TechnologyComponent } from './technologyComponent/technologyComponent.component';
import { PoliticsComponent } from './politicsComponent/politicsComponent.component';
import { MostPopularComponent } from './mostPopularComponent/mostPopular.component';
import { MovieReviewsComponent } from './movieReviewsComponent/movieReviewsComponent.component';
import { NewsContentComponent } from './shared/components/newsContentComponent/newsContentComponent.component';
import { ComponentHeadingComponent } from './shared/components/componentHeading/componentHeading.component';
import { MostViewedComponent } from './shared/components/mostViewedComponent/mostViewedComponent.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainBodyComponent,
    TopStoriesComponent,
    BusinessComponent,
    TechnologyComponent,
    PoliticsComponent,
    MostPopularComponent,
    MovieReviewsComponent,
    NewsContentComponent,
    ComponentHeadingComponent,
    MostViewedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatInputModule,
    MatListModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
