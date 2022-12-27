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
  userAnswer?: string = '';
  constructor(
    private http: HttpClient,
    private httpService: BaseHttpService,
    ) {}

  ngOnInit(): void {
    this.getOneQuestion();
  }

  getOneQuestion() {
    this.httpService.getOneQuestion().subscribe((data) => {
      this.data = data[0];
    });
  }

  AnswerButton() {
    // console.log(this.userAnswer);

    this.httpService.getOneQuestion().subscribe((data) => {
      this.data = data[0];
    });;

    if(this.userAnswer == this.data?.rightAnswer){
        console.log("Correct");
    }
    else{
      console.log("Wrong");
    }
  }
}
