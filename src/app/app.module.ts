import { MockXHRBackend } from './mock-xhr-backend';
import { MediaItemService } from './media-item.service';
import { MediaItemFormComponent } from './media-item-form.component';
import { FavoriteDirective } from './favorite.directive';
import { MediaItemListComponent } from './media-item-list.component';
import { MediaItemComponent } from './media-item.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { categoryListPipe } from './category-list.pipe';
import { ReactiveFormsModule} from '@angular/forms';
import { lookupListToken, lookupLists } from './providers';
import { HttpClientModule, HttpXhrBackend } from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    MediaItemComponent,
    MediaItemListComponent,
    FavoriteDirective,
    categoryListPipe,
    MediaItemFormComponent
  ],
  providers: [
    MediaItemService,
    { 
      provide: lookupListToken, 
      useValue: lookupLists
    },
    { 
      provide: HttpXhrBackend, 
      useClass: MockXHRBackend
    }
  ],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule{}