import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TriviaDataComponent } from './components/trivia-game/trivia-game.component';
import { EditMenuComponent } from './components/main-menu/main-menu.component';
import { AddQuestionComponent } from './components/add-question/add-question.component';


const routes: Routes = [
  {component: EditMenuComponent, path: ''},
  {component: TriviaDataComponent, path: 'trivia-game'},
  {component: AddQuestionComponent, path: 'add-question'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
