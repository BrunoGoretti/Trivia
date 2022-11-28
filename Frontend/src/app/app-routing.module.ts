import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TriviaGameComponent } from './trivia-game/trivia-game.component';
import { EditMenuComponent } from './edit-menu/edit-menu.component';


const routes: Routes = [
  { path: 'menu', component: EditMenuComponent},
  { path: 'trivia-game', component: TriviaGameComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[]
})
export class AppRoutingModule { }
// sddssd
