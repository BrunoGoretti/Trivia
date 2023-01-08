import { Router } from '@angular/router';
import { TriviaData } from 'src/app/models/trivia-data';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BaseHttpService } from 'src/app/services/base-http.service';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css'],
})
export class AddQuestionComponent implements OnInit {
  questions: TriviaData[] = [];
  questionToEdit?: TriviaData;

  constructor(private BaseHttpService: BaseHttpService, private router: Router) {}
  ngOnInit(): void {}
  initNewQuestion() {
    this.questionToEdit = new TriviaData();
  }

  updateQuestionList(updatequestion: TriviaData[]) {
    this.questions = updatequestion;
  }

  goBack(): void
  {
    this.router.navigateByUrl('');
  }
}
