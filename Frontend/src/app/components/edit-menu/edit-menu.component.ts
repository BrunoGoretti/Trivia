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
  questions: AddQuestion[] = [];
  title = 'AddQuestion.UI';
  QuestionToEdit? : AddQuestion;

  constructor(private addQuestionService: AddQuestionService,
    private http: HttpClient, private router: Router){}
    ngOnInit() : void {
    this.addQuestionService
    .getQuestion()
    .subscribe((result: AddQuestion[]) => (this.questions = result));
    }

    updateQuestionList(questions: AddQuestion[]){
      this.questions = questions;
    }

    initNewHero(){
      this.QuestionToEdit = new AddQuestion();
    }

  btnClick() {
    this.router.navigateByUrl('trivia-game');
  }
  btnAddQuestion() {
    this.router.navigateByUrl('add-question');
  }

}
