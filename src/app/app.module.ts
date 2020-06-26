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
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainBodyComponent } from './mainBody/mainBody.component';
import { BusinessComponent } from './businessComponent/businessComponent.component';
import { TechnologyComponent } from './technologyComponent/technologyComponent.component';
import { PoliticsComponent } from './politicsComponent/politicsComponent.component';
import { MostPopularComponent } from './mostPopularComponent/mostPopular.component';
import { NewsContentComponent } from './shared/components/newsContentComponent/newsContentComponent.component';
import { ComponentHeadingComponent } from './shared/components/componentHeading/componentHeading.component';
import { MostViewedComponent } from './shared/components/mostViewedComponent/mostViewedComponent.component';
import { LoadingDialog } from './shared/dialogs/loadingDialog/loadingDialog.component';
import { MoreNewsDialog } from './shared/dialogs/moreNewsDialog/moreNewsDialog.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { SearchResultsComponent } from './search/searchResults/searchResults.component';
import { WorldComponent } from './world/world.component';
import { OtherNewsComponent } from './otherNewsComponent/otherNewsComponent.component';
import { DisplayNewsComponent } from './shared/components/disaplayNewsContentComponent/displayNews.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainBodyComponent,
    SearchComponent,
    BusinessComponent,
    TechnologyComponent,
    PoliticsComponent,
    MostPopularComponent,
    OtherNewsComponent,
    NewsContentComponent,
    ComponentHeadingComponent,
    MostViewedComponent,
    WorldComponent,
    SearchResultsComponent,
    DisplayNewsComponent,
    LoadingDialog,
    MoreNewsDialog,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatInputModule,
    MatListModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[
    LoadingDialog,
    MoreNewsDialog
  ]
})
export class AppModule { }
