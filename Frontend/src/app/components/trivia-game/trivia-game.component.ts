import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BaseHttpService } from 'src/app/services/base-http.service';
import { TriviaData } from 'src/app/models/trivia-data';

@Component({
  selector: 'app-trivia-game',
  templateUrl: './trivia-game.component.html',
  styleUrls: ['./trivia-game.component.css'],
})
export class TriviaDataComponent implements OnInit {
  data: TriviaData | undefined;

  score: number = 0;
  isGrayAnswerBtn: boolean = false;
  isGrayNextQuestionBtn: boolean = true;
  answerButtonEnabled: boolean = false;
  nextQuestionButtonEnabled: boolean = true;
  limit: number = 4;
  clickCount: number = 0;
  userAnswer?: string = '';
  answerMessage: string = ""
  conclusionMessage: string = ""
  constructor(
    private http: HttpClient,
    private httpService: BaseHttpService,
    private router: Router,
    ) {}

    ngOnInit(): void {
      this.getOneQuestion();
    }

    getOneQuestion() {
      this.httpService.getOneQuestion().subscribe((data) => {
        this.data = data;
      });
    }

    answerButton() {
      this.clickCount++;

      if(this.userAnswer?.toLowerCase() === this.data?.rightAnswer?.toLowerCase()){
        this.answerMessage = "correct"
        this.score++;
        console.log(this.score);
      }
      else{
        this.answerMessage = "wrong";
      }
      this.userAnswer = '';
      this.isGrayAnswerBtn = true;
      this.isGrayNextQuestionBtn = false;
      this.answerButtonEnabled = true;
      this.nextQuestionButtonEnabled = false;
      this.questionLimit();
    }

  nextQuestionButton(){
      this.httpService.getOneQuestion().subscribe((data) => {
        this.data = data;
      });
      this.answerMessage = '';
      this.isGrayAnswerBtn = false;
      this.isGrayNextQuestionBtn = true;
      this.answerButtonEnabled = false;
      this.nextQuestionButtonEnabled = true;
  }
  goBack(): void
  {
    this.router.navigateByUrl('');
  }

  questionLimit(): void
  {
     if(this.limit === this.clickCount)
     {
      this.isGrayNextQuestionBtn = true;
      this.nextQuestionButtonEnabled = true;
       if(this.score === 0){
          this.conclusionMessage = "You lose"
       }
       else if(this.score === this.limit){
          this.conclusionMessage = "You won!"
       }
       else{
        this.conclusionMessage = "You could play better"
       }
     }
  }
}
