import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { TriviaData } from 'src/app/models/trivia-data';
import { BaseHttpService } from 'src/app/services/base-http.service';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css'],
})
export class MenuComponent {
  // questions: TriviaData[] = [];
  title = 'AddQuestion.UI';
  QuestionToEdit? : TriviaData;

  constructor(private addBaseHttpService: BaseHttpService,
    private http: HttpClient, private router: Router){}
    ngOnInit() : void {
    this.addBaseHttpService
    .getQuestion()
    }
     startGame() {
    this.router.navigateByUrl('trivia-game');
     }
     addQuestion() {
    this.router.navigateByUrl('add-question');
     }
}
