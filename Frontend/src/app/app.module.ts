import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TriviaGameComponent } from './trivia-game/trivia-game.component';
import { HttpClientModule } from '@angular/common/http';
import { EditMenuComponent } from './edit-menu/edit-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    TriviaGameComponent,
    EditMenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
