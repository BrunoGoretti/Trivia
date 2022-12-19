import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BaseHttpService } from 'src/app/services/base-http.service';
import { TriviaData } from 'src/app/models/trivia-data';

@Component({
  selector: 'app-trivia-game',
  templateUrl: './trivia-game.component.html',
  styleUrls: ['./trivia-game.component.css']
})
export class TriviaDataComponent {

  question?: TriviaData;

  constructor(private http: HttpClient, private addBaseHttpService: BaseHttpService){}
  // posts: TriviaData[] = [];

  ngOnInit() : void{this.getOneQuestion()}

  getOneQuestion(){
    this.addBaseHttpService
    .getOneQuestion()
    .subscribe();
  }
}
