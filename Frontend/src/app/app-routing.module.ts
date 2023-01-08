import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TriviaDataComponent } from './components/trivia-game/trivia-game.component';
import { MenuComponent as MenuComponent } from './components/main-menu/main-menu.component';
import { AddQuestionComponent } from './components/add-question/add-question.component';
import { ConclusionComponent } from './components/conclusion/conclusion.component';


const routes: Routes = [
  {component: MenuComponent, path: ''},
  {component: TriviaDataComponent, path: 'trivia-game'},
  {component: AddQuestionComponent, path: 'add-question'},
  {component: ConclusionComponent, path: 'conclusion'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
