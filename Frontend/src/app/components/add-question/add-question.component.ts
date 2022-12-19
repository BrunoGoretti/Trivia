import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { TriviaData } from 'src/app/models/trivia-data';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AddQuestionService } from 'src/app/services/add-question.service';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit{

  questions: TriviaData[] = [];
  questionToEdit? : TriviaData;

  // @Input() question?: TriviaData;
  constructor(private addQuestionService: AddQuestionService) { }
  ngOnInit() : void {
     }
      initNewHero(){
        this.questionToEdit = new TriviaData();
      }

      updateQuestionList(heroes: TriviaData[]){
        this.questions = heroes;
      }
}
