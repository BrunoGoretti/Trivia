import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TriviaGameComponent } from './components/trivia-game/trivia-game.component';
import { EditMenuComponent } from './components/edit-menu/edit-menu.component';
import { AddQuestionComponent } from './components/add-question/add-question.component';


const routes: Routes = [
  {component: EditMenuComponent, path: ''},
  {component: TriviaGameComponent, path: 'trivia-game'},
  {component: AddQuestionComponent, path: 'add-question'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
