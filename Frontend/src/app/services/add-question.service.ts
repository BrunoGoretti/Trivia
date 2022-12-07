import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviroments } from 'src/environment/environment';
import { AddQuestion } from 'src/app/models/question-model';

@Injectable({
  providedIn: 'root'
})
export class AddQuestionService {
  private url = "CreateQuestion";
  constructor(private http: HttpClient) { }

  public getQuestion() : Observable<AddQuestion[]> {
   return this.http.get<AddQuestion[]>(`${enviroments.apiUrl}/${this.url}`);
  }
  
  public updateQuestion(question : AddQuestion) : Observable<AddQuestion[]> {

    return this.http.put<AddQuestion[]>(
      `${enviroments.apiUrl}/${this.url}`,
      question);
   }

   public createQuestion(question : AddQuestion) : Observable<AddQuestion[]> {
    return this.http.post<AddQuestion[]>(
      `${enviroments.apiUrl}/${this.url}`, question);
   }
}
