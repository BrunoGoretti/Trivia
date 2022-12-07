import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { TriviaGameComponent } from '../trivia-game/trivia-game.component';

@Component({
  selector: 'app-edit-menu',
  templateUrl: './edit-menu.component.html',
  styleUrls: ['./edit-menu.component.css'],
})
export class EditMenuComponent {
  constructor(private http: HttpClient, private router: Router) {}
  posts: any[] = [];
  
  btnClick() {
    this.router.navigateByUrl('trivia-game');
  }
  btnAddQuestion() {
    this.router.navigateByUrl('add-question');
  }
}
