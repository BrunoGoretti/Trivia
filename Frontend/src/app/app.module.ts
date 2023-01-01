import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TriviaDataComponent } from './components/trivia-game/trivia-game.component';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './components/main-menu/main-menu.component';
import { AddQuestionComponent } from './components/add-question/add-question.component';
import { FormsModule } from '@angular/forms';
import { CreateQuestionComponent } from './components/create-question/create-question.component';

@NgModule({
  declarations: [
    AppComponent,
    TriviaDataComponent,
    MenuComponent,
    AddQuestionComponent,
    CreateQuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
