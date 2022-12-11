import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { TriviaDataComponent } from '../trivia-game/trivia-game.component';
import { TriviaData } from 'src/app/models/trivia-data';
import { AddQuestionService } from 'src/app/services/add-question.service';

@Component({
  selector: 'app-edit-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css'],
})
export class EditMenuComponent {
  questions: TriviaData[] = [];
  title = 'AddQuestion.UI';
  QuestionToEdit? : TriviaData;

  constructor(private addQuestionService: AddQuestionService,
    private http: HttpClient, private router: Router){}
    ngOnInit() : void {
    this.addQuestionService
    .getQuestion()
    .subscribe((result: TriviaData[]) => (this.questions = result));
    }
     btnClick() {
    this.router.navigateByUrl('trivia-game');
     }
     btnAddQuestion() {
    this.router.navigateByUrl('add-question');
     }
}
