import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AddQuestion } from 'src/app/models/question-model';
import { AddQuestionService } from 'src/app/services/add-question.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AddQuestion.UI';
  questions: AddQuestion[] = [];

  constructor(private addQuestionService: AddQuestionService,
    private http: HttpClient, private router: Router){}
    ngOnInit() : void {
    this.addQuestionService
    .getQuestion()
    .subscribe((result: AddQuestion[]) => (this.questions = result));
    }

  btnClick() {
    this.router.navigateByUrl('trivia-game');
  }
}
